// import { useState } from 'react';
// import { Todo } from '../types/todo';
// import { useTheme } from '../contexts/ThemeContext';

// interface TodoItemProps {
//   todo: Todo;
//   onToggle: (id: string) => void;
//   onUpdate: (id: string, title: string, description: string) => void;
//   onDelete: (id: string) => void;
// }

// export const TodoItem = ({ todo, onToggle, onUpdate, onDelete }: TodoItemProps) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editTitle, setEditTitle] = useState(todo.title);
//   const [editDescription, setEditDescription] = useState(todo.description);
//   const { theme } = useTheme();

//   const handleSave = () => {
//     if (editTitle.trim()) {
//       onUpdate(todo.id, editTitle.trim(), editDescription.trim());
//       setIsEditing(false);
//     }
//   };

//   const handleCancel = () => {
//     setEditTitle(todo.title);
//     setEditDescription(todo.description);
//     setIsEditing(false);
//   };

//   return (
//     <div 
//       className={`p-4 rounded-lg border transition-colors duration-200 ${
//         theme.mode === 'dark' 
//           ? 'bg-gray-800 border-gray-700' 
//           : 'bg-white border-gray-200'
//       }`}
//     >
//       {isEditing ? (
//         <div className="space-y-3">
//           <input
//             type="text"
//             value={editTitle}
//             onChange={(e) => setEditTitle(e.target.value)}
//             className={`w-full p-2 rounded border ${
//               theme.mode === 'dark'
//                 ? 'bg-gray-700 border-gray-600 text-white'
//                 : 'bg-white border-gray-300 text-gray-900'
//             }`}
//             placeholder="Todo title"
//           />
//           <textarea
//             value={editDescription}
//             onChange={(e) => setEditDescription(e.target.value)}
//             className={`w-full p-2 rounded border ${
//               theme.mode === 'dark'
//                 ? 'bg-gray-700 border-gray-600 text-white'
//                 : 'bg-white border-gray-300 text-gray-900'
//             }`}
//             placeholder="Todo description"
//             rows={3}
//           />
//           <div className="flex gap-2">
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
//             >
//               Save
//             </button>
//             <button
//               onClick={handleCancel}
//               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex items-start justify-between">
//           <div className="flex items-start space-x-3 flex-1">
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => onToggle(todo.id)}
//               className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
//             />
//             <div className="flex-1">
//               <h3 className={`font-medium ${
//                 todo.completed 
//                   ? 'line-through text-gray-500' 
//                   : theme.mode === 'dark' 
//                     ? 'text-white' 
//                     : 'text-gray-900'
//               }`}>
//                 {todo.title}
//               </h3>
//               {todo.description && (
//                 <p className={`mt-1 text-sm ${
//                   theme.mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
//                 }`}>
//                   {todo.description}
//                 </p>
//               )}
//               <p className={`text-xs mt-2 ${
//                 theme.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
//               }`}>
//                 Updated: {todo.updatedAt.toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//           <div className="flex space-x-2 ml-4">
//             <button
//               onClick={() => setIsEditing(true)}
//               className="p-2 text-blue-500 hover:bg-blue-50 rounded transition-colors"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(todo.id)}
//               className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import { useState } from 'react';
import { Todo } from '../types/todo';
import { useTheme } from '../contexts/ThemeContext';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onUpdate, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const { mode } = useTheme();

  // Define colors based on mode
  const colors = {
    background: {
      primary: mode === 'dark' ? 'bg-gray-800' : 'bg-white',
    },
    border: mode === 'dark' ? 'border-gray-700' : 'border-gray-200',
    text: {
      primary: mode === 'dark' ? 'text-white' : 'text-gray-900',
      secondary: mode === 'dark' ? 'text-gray-300' : 'text-gray-600',
    },
  };

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, editTitle.trim(), editDescription.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <div className={`p-4 rounded-lg border transition-colors duration-200 ${colors.background.primary} ${colors.border}`}>
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className={`w-full p-2 rounded border ${colors.text.primary} bg-transparent border-gray-400`}
            placeholder="Todo title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className={`w-full p-2 rounded border ${colors.text.primary} bg-transparent border-gray-400`}
            placeholder="Todo description"
            rows={3}
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="flex-1">
              <h3 className={`font-medium ${
                todo.completed 
                  ? 'line-through text-gray-500' 
                  : colors.text.primary
              }`}>
                {todo.title}
              </h3>
              {todo.description && (
                <p className={`mt-1 text-sm ${colors.text.secondary}`}>
                  {todo.description}
                </p>
              )}
              <p className={`text-xs mt-2 ${colors.text.secondary}`}>
                Updated: {todo.updatedAt.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-blue-500 hover:bg-blue-500/10 rounded transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};