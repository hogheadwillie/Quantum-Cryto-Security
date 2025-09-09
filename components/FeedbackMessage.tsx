import React from 'react';

interface FeedbackMessageProps {
  type: 'error' | 'success';
  message: string;
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ type, message }) => {
  if (!message) return null;

  const baseClasses = 'p-3 rounded-md text-sm font-medium';
  const typeClasses = {
    error: 'bg-red-500/20 text-red-400',
    success: 'bg-green-500/20 text-green-400',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {message}
    </div>
  );
};

export default FeedbackMessage;
