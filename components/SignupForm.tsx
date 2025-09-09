import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import Spinner from './Spinner';

interface SignupFormProps {
  onSuccess: (credentials: { email: string, pass: string }) => void;
  switchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess, switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { clearFeedback, setFeedback } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearFeedback();
    if (password !== confirmPassword) {
      setFeedback({ message: t('passwordMismatch'), type: 'error' });
      return;
    }
    onSuccess({ email, pass: password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-white">{t('signup')}</h2>
       <div>
        <label htmlFor="email-signup" className="block text-sm font-medium text-gray-300">{t('email')}</label>
        <div className="mt-1">
          <input
            id="email-signup"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password-signup" className="block text-sm font-medium text-gray-300">{t('password')}</label>
        <div className="mt-1">
          <input
            id="password-signup"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="confirm-password-signup" className="block text-sm font-medium text-gray-300">{t('confirmPassword')}</label>
        <div className="mt-1">
          <input
            id="confirm-password-signup"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 disabled:opacity-50"
        >
          {t('continue')}
        </button>
      </div>
      <p className="text-sm text-center text-gray-400">
        {t('hasAccount')}{' '}
        <button type="button" onClick={switchToLogin} className="font-medium text-cyan-400 hover:text-cyan-300">
          {t('login')}
        </button>
      </p>
    </form>
  );
};

export default SignupForm;