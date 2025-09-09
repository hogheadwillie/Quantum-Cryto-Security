import React from 'react';

const CheckoutForm: React.FC = () => {
    return (
        <form className="space-y-6">
             <h2 className="text-2xl font-bold text-center text-white">Upgrade Plan</h2>
             <p className="text-center text-gray-400">Unlock premium features and enhanced security analysis.</p>
            <div>
                <label htmlFor="card-details" className="block text-sm font-medium text-gray-300">Card Details</label>
                <div className="mt-1 p-3 bg-gray-900/50 border border-gray-600 rounded-md">
                   {/* Placeholder for Stripe/etc. card element */}
                   <p className="text-gray-500">Card element would be here.</p>
                </div>
            </div>
             <div>
                <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                Pay Now
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
