import React from 'react';
import { SummaryRow } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SummaryTableProps {
  data: SummaryRow[];
}

const priorityColorMap = {
    'Critical': 'bg-red-500/20 text-red-400 border-red-500/30',
    'High': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Medium': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Strategic': 'bg-green-500/20 text-green-400 border-green-500/30',
};

const SummaryTable: React.FC<SummaryTableProps> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-white/10 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">{t('summaryHeaderPriority')}</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{t('summaryHeaderArea')}</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{t('summaryHeaderRecommendation')}</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">{t('summaryHeaderNextAction')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-900/50">
                {data.map((row) => (
                  <tr key={row.area} className="hover:bg-gray-800/50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium border ${priorityColorMap[row.priority]}`}>
                        {t(`priority.${row.priority.toLowerCase()}`)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{row.area}</td>
                    <td className="px-3 py-4 text-sm text-gray-300 max-w-sm">{row.recommendation}</td>
                    <td className="px-3 py-4 text-sm text-gray-300 max-w-sm">{row.nextAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryTable;