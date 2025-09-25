// import { useState } from 'react';
// import { useTheme } from '../contexts/ThemeContext';

// interface AddTodoFormProps {
//   onAdd: (title: string, description: string) => void;
//   loading?: boolean;
// }

// export const AddTodoForm = ({ onAdd, loading = false }: AddTodoFormProps) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const { theme } = useTheme();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (title.trim()) {
//       onAdd(title.trim(), description.trim());
//       setTitle('');
//       setDescription('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-8">
//       <div className={`p-6 rounded-lg ${
//         theme.mode === 'dark' ? 'bg-gray-800' : 'bg-white'
//       } border ${
//         theme.mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
//       }`}>
//         <h2 className={`text-lg font-semibold mb-4 ${
//           theme.mode === 'dark' ? 'text-white' : 'text-gray-900'
//         }`}>
//           Add New Todo
//         </h2>
        
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="title" className={`block text-sm font-medium mb-2 ${
//               theme.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               Title *
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className={`w-full p-3 rounded border ${
//                 theme.mode === 'dark'
//                   ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
//                   : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//               }`}
//               placeholder="What needs to be done?"
//               disabled={loading}
//             />
//           </div>
          
//           <div>
//             <label htmlFor="description" className={`block text-sm font-medium mb-2 ${
//               theme.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               Description
//             </label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className={`w-full p-3 rounded border ${
//                 theme.mode === 'dark'
//                   ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
//                   : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//               }`}
//               placeholder="Add some details..."
//               rows={3}
//               disabled={loading}
//             />
//           </div>
          
//           <button
//             type="submit"
//             disabled={!title.trim() || loading}
//             className="w-full bg-blue-500 text-white py-3 px-4 rounded font-medium hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
//           >
//             {loading ? 'Adding...' : 'Add Todo'}
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface AddTodoFormProps {
  onAdd: (title: string, description: string) => void;
  loading?: boolean;
}

export const AddTodoForm = ({ onAdd, loading = false }: AddTodoFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim());
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className={`p-6 rounded-lg ${
        theme.mode === 'dark' ? 'bg-gray-800' : 'bg-white'
      } border ${
        theme.mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <h2 className={`text-lg font-semibold mb-4 ${
          theme.mode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Add New Todo
        </h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className={`block text-sm font-medium mb-2 ${
              theme.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-3 rounded border ${
                theme.mode === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="What needs to be done?"
              disabled={loading}
            />
          </div>
          
          <div>
            <label htmlFor="description" className={`block text-sm font-medium mb-2 ${
              theme.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full p-3 rounded border ${
                theme.mode === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="Add some details..."
              rows={3}
              disabled={loading}
            />
          </div>
          
          <button
            type="submit"
            disabled={!title.trim() || loading}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded font-medium hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Adding...' : 'Add Todo'}
          </button>
        </div>
      </div>
    </form>
  );
};