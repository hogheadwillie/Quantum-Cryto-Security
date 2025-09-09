import React from 'react';
import Header from './components/Header';
import SummaryTable from './components/SummaryTable';
import AuthModal from './components/AuthModal';
import { MOCK_SUMMARY_DATA } from './constants';
import { useAuth } from './context/AuthContext';
import { useLanguage } from './context/LanguageContext';
import Card from './components/Card';
import RecommendationItem from './components/RecommendationItem';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent"></div>
      
      <Header />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            {t('header.title')}
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Actionable, AI-driven insights to enhance your application's security and performance.
          </p>
        </div>

        {isAuthenticated ? (
          <div>
            <Card>
              <h2 className="text-2xl font-semibold text-white mb-4">Priority Recommendations</h2>
              <SummaryTable data={MOCK_SUMMARY_DATA} />
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <RecommendationItem 
                    title="Database Indexing Strategy"
                    description="Our analysis suggests creating composite indexes on user and transaction tables to reduce query latency by up to 45%."
                    area="Performance"
                />
                 <RecommendationItem 
                    title="Dependency Audit"
                    description="Found 3 medium-severity vulnerabilities in outdated npm packages. Recommended to run `npm audit fix` and verify."
                    area="Security"
                />
            </div>
          </div>
        ) : (
          <div className="text-center p-8 bg-gray-800/50 border border-gray-700 rounded-xl">
            <h2 className="text-2xl font-semibold">Welcome</h2>
            <p className="text-gray-400 mt-2">Please log in to view your security dashboard.</p>
          </div>
        )}
      </main>

      <AuthModal />
    </div>
  );
};

export default App;
