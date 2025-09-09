import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import TwoFactorSelection from './TwoFactorSelection';
import TwoFactorSetup from './TwoFactorSetup';
import TwoFactorSmsInput from './TwoFactorSmsInput';
import TwoFactorVerify from './TwoFactorVerify';
import { useAuth } from '../context/AuthContext';
import { AuthStep } from '../types';
import FeedbackMessage from './FeedbackMessage';

const AuthModal: React.FC = () => {
    const { 
        isAuthModalOpen, 
        closeAuthModal, 
        isAwaiting2FA, 
        user, 
        authModalStep,
        feedback,
        clearFeedback 
    } = useAuth();
    const [step, setStep] = useState<AuthStep>('login');
    const [signupCredentials, setSignupCredentials] = useState({ email: '', password: ''});
    const [smsPhoneNumber, setSmsPhoneNumber] = useState('');

    useEffect(() => {
        if (isAuthModalOpen) {
            clearFeedback();
            setStep(authModalStep);
        } else {
            // Delay reset to allow for closing animation
            setTimeout(() => {
                setStep('login');
                setSignupCredentials({ email: '', password: '' });
                setSmsPhoneNumber('');
                clearFeedback();
            }, 300);
        }
    }, [isAuthModalOpen, authModalStep, clearFeedback]);
    
    const handleSetStep = (newStep: AuthStep) => {
        clearFeedback();
        setStep(newStep);
    }

    const handleSignupSubmit = (credentials: { email: string, pass: string }) => {
        setSignupCredentials({ email: credentials.email, password: credentials.pass });
        handleSetStep('2fa-select');
    };

    const handleSmsInputSuccess = (phone: string) => {
        setSmsPhoneNumber(phone);
        handleSetStep('2fa-sms-verify');
    };
    
    const renderStep = () => {
        if (isAwaiting2FA && user) {
            return <TwoFactorVerify context='login' method={user.twoFactorMethod} />;
        }

        switch (step) {
            case 'login':
                return <LoginForm switchToSignup={() => handleSetStep('signup')} />;
            case 'signup':
                return <SignupForm onSuccess={handleSignupSubmit} switchToLogin={() => handleSetStep('login')} />;
            case '2fa-select':
                return <TwoFactorSelection onSelect={(method) => handleSetStep(method === 'app' ? '2fa-app-setup' : '2fa-sms-setup')} />;
            case '2fa-app-setup':
                return <TwoFactorSetup credentials={signupCredentials} />;
            case '2fa-sms-setup':
                return <TwoFactorSmsInput onSuccess={handleSmsInputSuccess} />;
            case '2fa-sms-verify':
                 return <TwoFactorVerify context='signup' method='sms' credentials={signupCredentials} phoneNumber={smsPhoneNumber} />;
            default:
                return null;
        }
    };

    return (
        <Modal isOpen={isAuthModalOpen} onClose={closeAuthModal}>
            <div className="space-y-4">
                <div className="min-h-[24px]">
                  {feedback && <FeedbackMessage type={feedback.type} message={feedback.message} />}
                </div>
                {renderStep()}
            </div>
        </Modal>
    );
};

export default AuthModal;