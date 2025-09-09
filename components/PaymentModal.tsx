import React from 'react';
import Modal from './Modal';
import CheckoutForm from './CheckoutForm';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <CheckoutForm />
        </Modal>
    );
};

export default PaymentModal;
