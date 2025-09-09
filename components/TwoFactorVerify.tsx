import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { TwoFactorMethod } from '../types';
import Spinner from './Spinner';

interface TwoFactorVerifyProps {
  context: 'login' | 'signup';
  method: TwoFactorMethod;
  credentials?: { email: string, password: string };
  phoneNumber?: string;
}

const TwoFactorVerify: React.FC<TwoFactorVerifyProps> = ({ context, method, credentials, phoneNumber }) => {
  const { t } = useLanguage();
  const { verify2FA, signup } = useAuth();
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (context === 'login') {
        await verify2FA(code);
      } else if (context === 'signup' && credentials && method === 'sms') {
        await signup(credentials.email, credentials.password, 'sms', phoneNumber);
      } else if (context === 'signup' && credentials && method === 'app') {
        await signup(credentials.email, credentials.password, 'app');
      }
    } finally {
        setIsSubmitting(false);
    }
  };

  const title = context === 'login' ? t('twoFactorVerify.titleLogin') : t('twoFactorVerify.titleSignup');
  const subtitle = method === 'app' 
    ? t('twoFactorVerify.enterCodeApp') 
    : t('twoFactorVerify.enterCodeSms');

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-6">{subtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div>
          <label htmlFor="2fa-verify-code" className="sr-only">{t('twoFactorVerify.verificationCode')}</label>
          <input
            id="2fa-verify-code"
            name="2fa-verify-code"
            type="text"
            inputMode="numeric"
            pattern="\d{6}"
            maxLength={6}
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="block w-full text-center tracking-[0.5em] px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-lg"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? <Spinner size="sm" /> : t('twoFactorVerify.verify')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TwoFactorVerify;