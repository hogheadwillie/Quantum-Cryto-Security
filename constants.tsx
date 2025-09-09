
import React from 'react';
import { Recommendation, SummaryRow } from './types';

const AlgorithmIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const KeyManagementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 0110.257-4.257" />
    </svg>
);

const PerformanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const SecurityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const RolloutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
);

const GovernanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" />
    </svg>
);

const DataLifecycleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 20v-5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l-5 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l5-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 4v5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20v-5h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l-5-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l5 5" />
    </svg>
);

const IncidentResponseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const SupplyChainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M10.5 20.5 2.5 17v-10l8-3.5 8 3.5v10l-8 3.5Z"></path>
        <path d="m2.5 7 8 3.5 8-3.5"></path><path d="M10.5 20.5v-9"></path>
    </svg>
);

const TrainingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const MachineLearningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 9.75l1.372-1.372a3.31 3.31 0 014.68 0l1.372 1.372M12 12.75V3M15 16.5v3.375c0 .621-.504 1.125-1.125 1.125h-3.75c-.621 0-1.125-.504-1.125-1.125V16.5" />
    </svg>
);

const QKDIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
);


const icons = [
    <AlgorithmIcon />,
    <KeyManagementIcon />,
    <PerformanceIcon />,
    <SecurityIcon />,
    <RolloutIcon />,
    <GovernanceIcon />,
    <DataLifecycleIcon />,
    <IncidentResponseIcon />,
    <SupplyChainIcon />,
    <TrainingIcon />,
    <MachineLearningIcon />,
    <QKDIcon />
];

export const getRecommendationsData = (t: (key: string, params?: { [key: string]: string }) => any): Recommendation[] => {
    return Array.from({ length: 12 }, (_, i) => {
        const id = i + 1;
        return {
            id,
            title: t(`rec.${id}.title`),
            icon: icons[i],
            recommendation: t(`rec.${id}.recommendation`),
            actionPlan: t(`rec.${id}.actionPlan`),
        };
    });
};

const priorities: SummaryRow['priority'][] = ['Critical', 'Critical', 'Critical', 'Critical', 'High', 'High', 'High', 'Medium', 'Medium', 'Medium', 'High', 'High', 'Strategic'];

export const getSummaryData = (t: (key: string, params?: { [key: string]: string }) => any): SummaryRow[] => {
    return Array.from({ length: 13 }, (_, i) => {
        return {
            priority: priorities[i],
            area: t(`summary.${i}.area`),
            recommendation: t(`summary.${i}.recommendation`),
            nextAction: t(`summary.${i}.nextAction`),
        };
    });
};
