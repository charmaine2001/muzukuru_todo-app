import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { toggleColorMode, mode } = useTheme();

  return (
    <button
      onClick={toggleColorMode}
      className={`p-2 rounded-lg border transition-colors ${
        mode === 'dark'
          ? 'bg-gray-700 border-gray-600 text-yellow-400 hover:bg-gray-600'
          : 'bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300'
      }`}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {mode === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};