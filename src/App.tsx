import React from 'react';
import { useTodos } from './hooks/useTodos';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { ErrorAlert } from './components/ErrorAlert';
import {ThemeProvider } from './contexts/ThemeContext';
import { ColorModeProvider } from './contexts/ColorModeContext';
import Topbar from './components/TopBar';

function App() {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo, toggleTodo, refetch } = useTodos();

  const handleAddTodo = async (title: string, description: string) => {
    try {
      await addTodo({ title, description });
    } catch (error) {
      
    }
  };

  const handleUpdateTodo = async (id: string, title: string, description: string) => {
    try {
      await updateTodo(id, { title, description });
    } catch (error) {
      
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      
    }
  };

  return (
    <ThemeProvider>
      <ColorModeProvider>
        <div className="min-h-screen transition-colors duration-200 bg-gray-100 dark:bg-gray-900"
        >

          <Topbar/>

          <div className="container mx-auto px-4 py-8 max-w-2xl">

            {error && (
              <div className="mb-6">
                <ErrorAlert message={error} onDismiss={refetch} />
              </div>
            )}

            <AddTodoForm onAdd={handleAddTodo} loading={loading} />

            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
              loading={loading}
            />

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-200">
              <p>
                Total: {todos.length} | Completed: {todos.filter(t => t.completed).length} | 
                Pending: {todos.filter(t => !t.completed).length}
              </p>
            </div>
          </div>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
