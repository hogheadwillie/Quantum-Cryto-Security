import React from 'react';
import Card from './Card';
import { Recommendation } from '../types';
import { useLanguage } from '../context/LanguageContext';
import Spinner from './Spinner';

interface RecommendationItemProps {
  item: Recommendation;
  onElaborate: (item: Recommendation) => void;
  isElaborating: boolean;
}

const GeminiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M14.5 3l-2.5 7.5l7.5 2.5l-10 10l-2.5 -7.5l-7.5 -2.5l10 -10z" />
  </svg>
);


const RecommendationItem: React.FC<RecommendationItemProps> = ({ item, onElaborate, isElaborating }) => {
  const { t } = useLanguage();

  return (
    <Card className="flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 bg-gray-700 rounded-lg p-2 mr-4">
            {item.icon}
        </div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>
      <p className="text-gray-400 mb-4 text-sm font-medium italic">
        "{item.recommendation}"
      </p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-cyan-400 mb-2">Action Plan:</h4>
          <ul className="space-y-2 list-disc list-inside text-gray-300 text-sm">
            {item.actionPlan.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>

        {item.elaboration ? (
          <div className="prose prose-sm prose-invert text-gray-300 bg-black/20 p-4 rounded-md border border-gray-700">
            <h5 className="text-cyan-400 flex items-center"><GeminiIcon/> AI Elaboration</h5>
            {item.elaboration.split('\n').map((line, index) => {
              if (line.startsWith('* ')) {
                return <p key={index} className="font-bold my-2">{line.substring(2)}</p>;
              }
              if (line.startsWith('- ')) {
                 return <li key={index} className="ml-4">{line.substring(2)}</li>;
              }
              return <p key={index}>{line}</p>;
            })}
          </div>
        ) : (
          <div className="pt-4 border-t border-gray-700">
             <button
                onClick={() => onElaborate(item)}
                disabled={isElaborating}
                className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 disabled:opacity-50 transition-colors"
              >
                {isElaborating ? (
                  <>
                    <Spinner size="sm" /> <span className="ml-2">{t('generating')}</span>
                  </>
                ) : (
                  <>
                    <GeminiIcon /> {t('elaborateWithAI')}
                  </>
                )}
              </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RecommendationItem;