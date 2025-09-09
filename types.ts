
import React from 'react';

// Make TypeScript aware of the jsQR function loaded from the CDN
declare global {
  function jsQR(data: Uint8ClampedArray, width: number, height: number): { data: string } | null;
}

export type AuthStep = 'login' | 'signup' | '2fa-select' | '2fa-app-setup' | '2fa-sms-setup' | '2fa-sms-verify';

export interface Recommendation {
  id: number;
  title: string;
  icon: React.ReactNode;
  recommendation: string;
  actionPlan: string[];
  elaboration?: string;
}

export interface SummaryRow {
  priority: 'Critical' | 'High' | 'Medium' | 'Strategic';
  area: string;
  recommendation: string;
  nextAction: string;
}

export interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, params?: { [key: string]: string }) => any;
}

export type TwoFactorMethod = 'app' | 'sms' | null;

export interface User {
    email: string;
    twoFactorMethod: TwoFactorMethod;
}

export type Feedback = {
    message: string;
    type: 'success' | 'error';
} | null;

export interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    isAwaiting2FA: boolean;
    feedback: Feedback;
    setFeedback: (feedback: Feedback) => void;
    clearFeedback: () => void;
    login: (email: string, pass: string) => Promise<void>;
    logout: () => void;
    signup: (email: string, pass: string, method: 'app' | 'sms', phone?: string) => Promise<void>;
    verify2FA: (code: string) => Promise<void>;
    openAuthModal: (initialStep?: AuthStep) => void;
    closeAuthModal: () => void;
    isAuthModalOpen: boolean;
    authModalStep: AuthStep;
}