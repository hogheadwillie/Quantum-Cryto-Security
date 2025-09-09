import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { User, AuthContextType, TwoFactorMethod, AuthStep, Feedback } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsersDb = new Map<string, { password: string, twoFactorMethod: TwoFactorMethod }>();
mockUsersDb.set('test@example.com', { password: 'password', twoFactorMethod: 'app' });
mockUsersDb.set('sms-user@example.com', { password: 'password', twoFactorMethod: 'sms' });
mockUsersDb.set('no2fa@example.com', { password: 'password', twoFactorMethod: null });

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAwaiting2FA, setIsAwaiting2FA] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalStep, setAuthModalStep] = useState<AuthStep>('login');
  const [feedback, setFeedback] = useState<Feedback>(null);

  const clearFeedback = useCallback(() => setFeedback(null), []);

  const login = async (email: string, pass: string): Promise<void> => {
    clearFeedback();
    return new Promise(resolve => {
        setTimeout(() => {
            const storedUser = mockUsersDb.get(email);
            if (storedUser && storedUser.password === pass) {
                const currentUser: User = { email, twoFactorMethod: storedUser.twoFactorMethod };
                setUser(currentUser);

                if (storedUser.twoFactorMethod) {
                    setIsAwaiting2FA(true);
                } else {
                    setIsAuthenticated(true);
                    setIsAuthModalOpen(false);
                }
            } else {
                setFeedback({ message: "Invalid credentials", type: 'error' });
            }
            resolve();
        }, 1000);
    });
  };

  const signup = async (email: string, pass: string, method: 'app' | 'sms', phone?: string): Promise<void> => {
    clearFeedback();
    return new Promise(resolve => {
        setTimeout(() => {
            if (mockUsersDb.has(email)) {
                setFeedback({ message: "User already exists", type: 'error' });
            } else {
                console.log(`Signing up ${email} with method ${method}` + (phone ? ` and phone ${phone}` : ''));
                mockUsersDb.set(email, { password: pass, twoFactorMethod: method });
                setIsAuthenticated(true);
                setUser({ email, twoFactorMethod: method });
                setIsAuthModalOpen(false);
            }
            resolve();
        }, 1000);
    });
  };
  
  const verify2FA = async (code: string): Promise<void> => {
      clearFeedback();
      return new Promise(resolve => {
          setTimeout(() => {
              if (code.length === 6 && /^\d+$/.test(code)) {
                  setIsAuthenticated(true);
                  setIsAwaiting2FA(false);
                  setIsAuthModalOpen(false);
              } else {
                  setFeedback({ message: "Invalid verification code", type: 'error' });
              }
              resolve();
          }, 1000);
      });
  };

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const openAuthModal = useCallback((step: AuthStep = 'login') => {
    clearFeedback();
    setAuthModalStep(step);
    setIsAuthModalOpen(true);
  }, [clearFeedback]);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setIsAwaiting2FA(false);
    setUser(null);
    clearFeedback();
  }, [clearFeedback]);


  const value = {
    isAuthenticated,
    user,
    isAwaiting2FA,
    login,
    logout,
    signup,
    verify2FA,
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
    authModalStep,
    feedback,
    setFeedback,
    clearFeedback
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};