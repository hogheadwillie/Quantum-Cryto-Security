export interface SummaryRow {
  priority: 'Critical' | 'High' | 'Medium' | 'Strategic';
  area: string;
  recommendation: string;
  nextAction: string;
}

export type TwoFactorMethod = 'app' | 'sms';

export interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, params?: { [key: string]: string }) => any;
}

export interface User {
    email: string;
}

export interface Feedback {
    message: string;
    type: 'success' | 'error';
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    feedback: Feedback | null;
    isAuthModalOpen: boolean;
    login: (email: string, pass: string) => Promise<void>;
    logout: () => void;
    signup: (email: string, pass: string, method: TwoFactorMethod, phone?: string) => Promise<void>;
    verify2FA: (code: string) => Promise<void>;
    setFeedback: (feedback: Feedback | null) => void;
    clearFeedback: () => void;
    openAuthModal: () => void;
    closeAuthModal: () => void;
}
