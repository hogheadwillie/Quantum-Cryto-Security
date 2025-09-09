import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { AuthContextType, User, Feedback, TwoFactorMethod } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const clearFeedback = useCallback(() => setFeedback(null), []);
  
  const login = async (email: string, pass: string) => {
    console.log('Logging in with', email, pass);
    clearFeedback();
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, you would handle 2FA challenges here.
    // For this mock, we just log in.
    setUser({ email });
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (email: string, pass: string, method: TwoFactorMethod, phone?: string) => {
    console.log('Signing up', { email, pass, method, phone });
    clearFeedback();
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({ email });
    setIsAuthModalOpen(false);
    setFeedback({ message: 'Signup successful!', type: 'success' });
  };

  const verify2FA = async (code: string) => {
    console.log('Verifying 2FA with code', code);
    clearFeedback();
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // This is a simplified flow. In a real app, this would be part of login/signup.
    // Assuming it's successful and the user is now logged in.
    if (!user) { // This might happen if verify2FA is called in a weird state.
        // For mock purposes, let's create a user.
        setUser({ email: 'test@example.com' });
    }
    setIsAuthModalOpen(false);
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    clearFeedback();
  };

  const value = {
    user,
    isAuthenticated: !!user,
    feedback,
    isAuthModalOpen,
    login,
    logout,
    signup,
    verify2FA,
    setFeedback,
    clearFeedback,
    openAuthModal,
    closeAuthModal,
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
