import { useTheme } from '../contexts/ThemeContext';

interface ErrorAlertProps {
  message: string;
  onDismiss?: () => void;
}

export const ErrorAlert = ({ message, onDismiss }: ErrorAlertProps) => {
  const { mode } = useTheme(); 

  return (
    <div className={`p-4 rounded-lg border ${
      mode === 'dark'
        ? 'bg-red-900 border-red-700 text-red-200'
        : 'bg-red-50 border-red-200 text-red-800'
    }`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className={`ml-4 p-1 rounded ${
              mode === 'dark'
                ? 'hover:bg-red-800'
                : 'hover:bg-red-100'
            }`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};