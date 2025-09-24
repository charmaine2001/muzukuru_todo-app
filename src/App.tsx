// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { useTodos } from './hooks/useTodos';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { ThemeToggle } from './components/ThemeToggle';
import { ErrorAlert } from './components/ErrorAlert';
import { useTheme } from './contexts/ThemeContext';
// import './App.css';

function App() {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo, toggleTodo, refetch } = useTodos();
  const { mode, colors } = useTheme();

  const handleAddTodo = async (title: string, description: string) => {
    try {
      await addTodo({ title, description });
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleUpdateTodo = async (id: string, title: string, description: string) => {
    try {
      await updateTodo(id, { title, description });
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      // Error is handled by the hook
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white">Todo App</h1>
          <ThemeToggle />
        </header>

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

        <div className={`mt-8 text-sm ${colors.text.secondary}`}>
          <p>
            Total: {todos.length} | Completed: {todos.filter(t => t.completed).length} | 
            Pending: {todos.filter(t => !t.completed).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
