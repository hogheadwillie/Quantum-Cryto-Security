
import React, { useState, useRef, useEffect, useCallback } from 'react';
// FIX: Add import for jsQR to resolve 'Cannot find name' error.
import jsQR from 'jsqr';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner';

interface TwoFactorSetupProps {
  credentials: { email: string, password: string };
}

const TwoFactorSetup: React.FC<TwoFactorSetupProps> = ({ credentials }) => {
  const { t } = useLanguage();
  const { signup, setFeedback, clearFeedback } = useAuth();
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [setupKey, setSetupKey] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopScan = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsScanning(false);
  }, []);

  const startScan = async () => {
    clearFeedback();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", "true"); // Required for iOS
          videoRef.current.play();
          setIsScanning(true);
          requestAnimationFrame(tick);
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setFeedback({ message: t('twoFactorSetup.scanError'), type: 'error' });
        setIsScanning(false);
      }
    }
  };

  const tick = () => {
    if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA && canvasRef.current && streamRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');

      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
      if (imageData) {
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
        if (qrCode && qrCode.data.startsWith('otpauth://')) {
          const secretMatch = qrCode.data.match(/secret=([^&]+)/);
          if (secretMatch && secretMatch[1]) {
            setSetupKey(secretMatch[1]);
            setFeedback({ message: t('twoFactorSetup.scanSuccess'), type: 'success' });
            stopScan();
            return; // Stop the loop
          }
        }
      }
    }
    if (streamRef.current) {
        requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => stopScan();
  }, [stopScan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signup(credentials.email, credentials.password, 'app');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-2">{t('twoFactorSetup.title')}</h2>
      <p className="text-gray-400 mb-6">{t('twoFactorSetup.subtitle')}</p>
      
      {isScanning ? (
         <div className="my-4">
            <video ref={videoRef} className="w-full max-w-xs mx-auto rounded-lg border-2 border-cyan-500" />
            <canvas ref={canvasRef} className="hidden" />
            <button type="button" onClick={stopScan} className="mt-4 text-sm text-cyan-400 hover:text-cyan-300">
                {t('twoFactorSetup.cancelScan')}
            </button>
         </div>
      ) : (
        <div className="my-4">
            <button type="button" onClick={startScan} className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600">
               {t('twoFactorSetup.scanButton')}
            </button>
        </div>
      )}

      <p className="text-gray-400 mb-2">{t('twoFactorSetup.orEnter')}</p>
      <div className="p-2 bg-gray-900 rounded-md text-cyan-400 font-mono tracking-widest my-4 min-h-[2.5rem] flex items-center justify-center">
        {setupKey || t('twoFactorSetup.noKey')}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div>
          <label htmlFor="2fa-code" className="block text-sm font-medium text-gray-300">{t('twoFactorSetup.verificationCode')}</label>
          <div className="mt-1">
            <input
              id="2fa-code"
              name="2fa-code"
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="block w-full text-center tracking-[0.5em] px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? <Spinner size="sm" /> : t('twoFactorSetup.verify')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TwoFactorSetup;