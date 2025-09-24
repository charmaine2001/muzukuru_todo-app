import { useState, useEffect } from 'react';
import { Todo, CreateTodoRequest, UpdateTodoRequest } from '../types/todo';
import { mockApi } from '../services/mockApi';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load todos on component mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await mockApi.getTodos();
      setTodos(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData: CreateTodoRequest) => {
    setError(null);
    try {
      const response = await mockApi.createTodo(todoData);
      setTodos(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create todo');
      throw err;
    }
  };

  const updateTodo = async (id: string, updates: UpdateTodoRequest) => {
    setError(null);
    try {
      const response = await mockApi.updateTodo(id, updates);
      setTodos(prev => prev.map(todo => todo.id === id ? response.data : todo));
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo');
      throw err;
    }
  };

  const deleteTodo = async (id: string) => {
    setError(null);
    try {
      await mockApi.deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo');
      throw err;
    }
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      await updateTodo(id, { completed: !todo.completed });
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
    refetch: loadTodos,
  };
};