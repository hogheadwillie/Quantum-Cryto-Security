import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Spinner from './Spinner';

interface TwoFactorSmsInputProps {
    onSuccess: (phone: string) => void;
}

const TwoFactorSmsInput: React.FC<TwoFactorSmsInputProps> = ({ onSuccess }) => {
    const { t } = useLanguage();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate sending SMS
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        onSuccess(phoneNumber);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-white mb-2">{t('twoFactorSms.title')}</h2>
            <p className="text-center text-gray-400 mb-8">{t('twoFactorSms.subtitle')}</p>
             <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">{t('twoFactorSms.phoneNumber')}</label>
                <div className="mt-1">
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="block w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 disabled:opacity-50"
                    >
                    {isLoading ? <Spinner size="sm" /> : t('twoFactorSms.sendCode')}
                </button>
            </div>
        </form>
    );
};

export default TwoFactorSmsInput;