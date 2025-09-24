// import { Todo } from '../types/todo';
// import { TodoItem } from './TodoItem';
// import { useTheme } from '../contexts/ThemeContext';

// interface TodoListProps {
//   todos: Todo[];
//   onToggle: (id: string) => void;
//   onUpdate: (id: string, title: string, description: string) => void;
//   onDelete: (id: string) => void;
//   loading?: boolean;
// }

// export const TodoList = ({ todos, onToggle, onUpdate, onDelete, loading }: TodoListProps) => {
//   const { theme } = useTheme();

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         {[...Array(3)].map((_, i) => (
//           <div key={i} className={`p-4 rounded-lg border animate-pulse ${
//             theme.mode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
//           }`}>
//             <div className="flex space-x-3">
//               <div className={`h-5 w-5 rounded ${
//                 theme.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
//               }`}></div>
//               <div className="flex-1 space-y-2">
//                 <div className={`h-4 rounded ${
//                   theme.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
//                 }`}></div>
//                 <div className={`h-3 rounded w-3/4 ${
//                   theme.mode === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
//                 }`}></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (todos.length === 0) {
//     return (
//       <div className={`text-center py-12 rounded-lg border ${
//         theme.mode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
//       }`}>
//         <p className={theme.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
//           No todos yet. Add one above to get started!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {todos.map(todo => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={onToggle}
//           onUpdate={onUpdate}
//           onDelete={onDelete}
//         />
//       ))}
//     </div>
//   );
// };


import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
import { useTheme } from '../contexts/ThemeContext';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
  onDelete: (id: string) => void;
  loading?: boolean;
}

export const TodoList = ({ todos, onToggle, onUpdate, onDelete, loading }: TodoListProps) => {
  const { colors } = useTheme();

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`p-4 rounded-lg border animate-pulse ${colors.background.primary} ${colors.border}`}>
            <div className="flex space-x-3">
              <div className="h-5 w-5 rounded bg-gray-400"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 rounded bg-gray-400"></div>
                <div className="h-3 rounded w-3/4 bg-gray-400"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className={`text-center py-12 rounded-lg border ${colors.background.primary} ${colors.border}`}>
        <p className={colors.text.secondary}>
          No todos yet. Add one above to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};