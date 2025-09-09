import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout, openAuthModal } = useAuth();
  const { t } = useLanguage();

  return (
    <header className="flex items-center justify-between py-6 md:py-8">
      {/* Left Spacer */}
      <div className="flex-1"></div>
      
      {/* Centered Title */}
      <div className="flex-1 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-5xl lg:text-6xl">
          {t('mainTitle')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          {t('mainSubtitle')}
        </p>
      </div>

      {/* Right Aligned Controls */}
      <div className="flex-1 flex justify-end items-start">
         <div className="flex items-center space-x-4">
          <LanguageSelector />
          {isAuthenticated && user ? (
            <>
              <span className="text-gray-300 hidden sm:inline">{t('welcomeUser', { email: user.email })}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
              >
                {t('logout')}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => openAuthModal('login')}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
              >
                {t('login')}
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
              >
                {t('signup')}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;