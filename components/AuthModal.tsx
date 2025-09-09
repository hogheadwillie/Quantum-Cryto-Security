import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { TwoFactorMethod } from '../types';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import TwoFactorSelection from './TwoFactorSelection';
import TwoFactorSmsInput from './TwoFactorSmsInput';
import TwoFactorSetup from './TwoFactorSetup';
import TwoFactorVerify from './TwoFactorVerify';
import FeedbackMessage from './FeedbackMessage';

type AuthStep = 'login' | 'signup' | '2fa-select' | '2fa-sms-input' | '2fa-setup' | '2fa-verify';

const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, feedback, clearFeedback } = useAuth();
  const [step, setStep] = useState<AuthStep>('login');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [twoFactorMethod, setTwoFactorMethod] = useState<TwoFactorMethod | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (!isAuthModalOpen) {
      // Reset state when modal is closed
      setTimeout(() => {
        setStep('login');
        clearFeedback();
      }, 300); // Delay to allow for closing animation
    }
  }, [isAuthModalOpen, clearFeedback]);

  const handleSignupSuccess = (creds: { email: string, pass: string }) => {
    setCredentials({ email: creds.email, password: creds.pass });
    setStep('2fa-select');
  };

  const handle2faSelect = (method: TwoFactorMethod) => {
    setTwoFactorMethod(method);
    if (method === 'app') {
      setStep('2fa-setup');
    } else {
      setStep('2fa-sms-input');
    }
  };

  const handleSmsInputSuccess = (phone: string) => {
    setPhoneNumber(phone);
    setStep('2fa-verify');
  };

  const renderStep = () => {
    switch (step) {
      case 'login':
        return <LoginForm switchToSignup={() => setStep('signup')} />;
      case 'signup':
        return <SignupForm onSuccess={handleSignupSuccess} switchToLogin={() => setStep('login')} />;
      case '2fa-select':
        return <TwoFactorSelection onSelect={handle2faSelect} />;
      case '2fa-sms-input':
        return <TwoFactorSmsInput onSuccess={handleSmsInputSuccess} />;
      case '2fa-setup':
        return <TwoFactorSetup credentials={credentials} />;
      case '2fa-verify':
        if (!twoFactorMethod) return null; // Should not happen
        return <TwoFactorVerify context="signup" method={twoFactorMethod} credentials={credentials} phoneNumber={phoneNumber} />;
      default:
        return null;
    }
  };
  
  return (
    <Modal isOpen={isAuthModalOpen} onClose={closeAuthModal}>
      {feedback && <div className="mb-4"><FeedbackMessage type={feedback.type} message={feedback.message} /></div>}
      {renderStep()}
    </Modal>
  );
};

export default AuthModal;
