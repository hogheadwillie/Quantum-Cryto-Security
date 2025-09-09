import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TwoFactorSelectionProps {
    onSelect: (method: 'app' | 'sms') => void;
}

const TwoFactorSelection: React.FC<TwoFactorSelectionProps> = ({ onSelect }) => {
    const { t } = useLanguage();

    const AuthenticatorIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    );

    const SmsIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H5.25A2.25 2.25 0 003 3.75v16.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 20.25V10.5m-10.5 6h9" />
        </svg>
    );

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-white mb-2">{t('twoFactorSelection.title')}</h2>
            <p className="text-center text-gray-400 mb-8">{t('twoFactorSelection.subtitle')}</p>
            <div className="space-y-4">
                <button
                    onClick={() => onSelect('app')}
                    className="w-full flex items-center text-left p-4 bg-gray-900/50 border border-gray-600 rounded-lg hover:border-cyan-500 transition-colors"
                >
                    <AuthenticatorIcon />
                    <div className="ml-4">
                        <p className="font-semibold text-white">{t('twoFactorSelection.authenticatorApp')}</p>
                        <p className="text-sm text-gray-400">{t('twoFactorSelection.authenticatorAppDesc')}</p>
                    </div>
                </button>
                <button
                    onClick={() => onSelect('sms')}
                    className="w-full flex items-center text-left p-4 bg-gray-900/50 border border-gray-600 rounded-lg hover:border-cyan-500 transition-colors"
                >
                    <SmsIcon />
                    <div className="ml-4">
                        <p className="font-semibold text-white">{t('twoFactorSelection.sms')}</p>
                        <p className="text-sm text-gray-400">{t('twoFactorSelection.smsDesc')}</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TwoFactorSelection;