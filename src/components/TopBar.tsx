// src/components/Topbar.tsx
import { useTheme } from "../contexts/ThemeContext";

interface TopbarProps {
  // Remove onSearch prop since we're not using search anymore
}

const Topbar = ({}: TopbarProps) => {
  const { toggleColorMode, mode, theme } = useTheme();
  const backgroundColor = theme.palette.background.default;

  return (
    <div 
      className="flex justify-between items-center p-4 shadow-md"
      style={{ backgroundColor }}
    >
      {/* APPLICATION NAME */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mr-4 font-sans">
        Todo App
      </h1>

      {/* EMPTY SPACE WHERE SEARCH BAR USED TO BE */}
      <div className="flex-1"></div>

      {/* ICONS */}
      <div className="flex items-center space-x-2 ml-4">
        <button
          onClick={toggleColorMode}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          aria-label="Toggle dark mode"
        >
          {mode === 'dark' ? '🌙' : '☀️'}
        </button>
        
        {/* You can add other icons here later */}
      </div>
    </div>
  );
};

export default Topbar;