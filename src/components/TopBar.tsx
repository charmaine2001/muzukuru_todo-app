// src/components/Topbar.tsx
import { useTheme } from "../contexts/ThemeContext";

const Topbar = () => {
  const { toggleColorMode, mode, theme } = useTheme();
  const backgroundColor = theme.palette.background.default;

  return (
    <div 
      className="flex justify-between items-center p-4 shadow-md"
      style={{ backgroundColor }}
    >
     
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mr-4 font-sans">
        Todo App
      </h1>

      <div className="flex-1"></div>

      <div className="flex items-center space-x-2 ml-4">
        <button
          onClick={toggleColorMode}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          aria-label="Toggle dark mode"
        >
          {mode === 'dark' ? '🌙' : '☀️'}
        </button>
        
        {/* add more icons here charmaine!!! when you get to improve it later */}
      </div>
    </div>
  );
};

export default Topbar;