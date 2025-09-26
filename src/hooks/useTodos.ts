import { useState, useEffect } from 'react';
import { Todo, CreateTodoRequest, UpdateTodoRequest } from '../types/todo';
import { mockApi } from '../services/mockApi';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load todos when you mount component
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const response = await mockApi.getTodos();
      setTodos(response.data);
    } catch (err) {
      setError("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData: CreateTodoRequest) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      const response = await mockApi.createTodo(todoData);
      setTodos(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError("Failed to add todo");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id: string, updates: UpdateTodoRequest) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Updating todo:', id, updates);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await mockApi.updateTodo(id, updates);
      setTodos(prev => prev.map(todo => todo.id === id ? response.data : todo));
      return response.data;
    } catch (err) {
      setError("Failed to update todo");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating 1s delay
      await mockApi.deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      try {
        await updateTodo(id, { completed: !todo.completed });
      } catch (err) {
      }
    }
  };

  return {
    todos,
    loading,
    error,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    refetch: fetchTodos,
  };
};