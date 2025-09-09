import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../translations';
import { LanguageContextType } from '../types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedTranslation = (language: string, key: string): any => {
  const langTranslations = translations[language as keyof typeof translations];
  if (!langTranslations) {
    return undefined;
  }
  return key.split('.').reduce((obj: any, k: string) => {
    return obj?.[k];
  }, langTranslations);
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string, params?: { [key: string]: string }): any => {
    let translation = getNestedTranslation(language, key) || key;

    if (params && typeof translation === 'string') {
      Object.keys(params).forEach(pKey => {
        const regex = new RegExp(`{{${pKey}}}`, 'g');
        translation = translation.replace(regex, params[pKey]);
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};