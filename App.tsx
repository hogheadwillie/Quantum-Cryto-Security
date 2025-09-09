import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Header from './components/Header';
import RecommendationItem from './components/RecommendationItem';
import SummaryTable from './components/SummaryTable';
import AuthModal from './components/AuthModal';
import { getRecommendationsData, getSummaryData } from './constants';
import { useAuth } from './context/AuthContext';
import { useLanguage } from './context/LanguageContext';
import { Recommendation } from './types';
import FeedbackMessage from './components/FeedbackMessage';

const App: React.FC = () => {
  const { isAuthenticated, feedback, setFeedback } = useAuth();
  const { t } = useLanguage();

  const RECOMMENDATIONS_DATA = getRecommendationsData(t);
  const SUMMARY_DATA = getSummaryData(t);

  const [recommendations, setRecommendations] = useState<Recommendation[]>(RECOMMENDATIONS_DATA);
  const [elaboratingId, setElaboratingId] = useState<number | null>(null);

  const handleFetchElaboration = async (item: Recommendation) => {
    if (item.elaboration) return; // Don't fetch if already present

    setElaboratingId(item.id);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `As a cybersecurity expert specializing in blockchain and enterprise systems, elaborate on this security recommendation.
      Title: "${item.title}"
      Recommendation: "${item.recommendation}"
      Action Plan: ${item.actionPlan.map(a => `\n- ${a}`).join('')}
      
      Explain *why* this is important, the common risks if not addressed, and provide a more detailed technical overview of how to implement the action plan. Format your response in simple markdown.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      const elaborationText = response.text;
      
      setRecommendations(prev => 
        prev.map(rec => rec.id === item.id ? { ...rec, elaboration: elaborationText } : rec)
      );

    } catch (error) {
      console.error("Full error details from AI elaboration API:", error);
      setFeedback({ message: t('aiError'), type: 'error' });
    } finally {
      setElaboratingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
       <div className="fixed top-28 right-8 z-50 w-full max-w-sm">
          {feedback && <FeedbackMessage type={feedback.type} message={feedback.message} />}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <AuthModal />

        <main>
          {isAuthenticated ? (
            <>
              <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('priorityRecommendations')}</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recommendations.map((item) => (
                    <RecommendationItem 
                      key={item.id} 
                      item={item} 
                      onElaborate={handleFetchElaboration}
                      isElaborating={elaboratingId === item.id}
                    />
                  ))}
                  <div className="hidden lg:block"></div>
                </div>
              </div>
              <div className="mt-20">
                 <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('summaryTitle')}</h2>
                 <SummaryTable data={SUMMARY_DATA} />
              </div>
            </>
          ) : (
            <div className="text-center mt-20 bg-gray-800/50 border border-gray-700 rounded-xl p-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white">{t('welcome')}</h2>
                <p className="text-gray-400 mt-4">{t('loginPrompt')}</p>
            </div>
          )}
        </main>

        <footer className="mt-20 text-center text-gray-500">
            <p>{t('footerText')}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;