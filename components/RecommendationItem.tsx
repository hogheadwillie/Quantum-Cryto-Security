import React from 'react';
import Card from './Card';

interface RecommendationItemProps {
    title: string;
    description: string;
    area: 'Security' | 'Performance' | 'UX' | 'Growth';
}

const areaStyles = {
    Security: 'text-red-400 border-red-500/30',
    Performance: 'text-yellow-400 border-yellow-500/30',
    UX: 'text-blue-400 border-blue-500/30',
    Growth: 'text-green-400 border-green-500/30'
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({ title, description, area }) => {
    return (
        <Card className="flex flex-col">
             <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium border ${areaStyles[area]}`}>
                    {area}
                </span>
             </div>
            <p className="mt-2 text-gray-400 text-sm flex-grow">{description}</p>
            <div className="mt-4">
                <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
                    View Details &rarr;
                </button>
            </div>
        </Card>
    );
};

export default RecommendationItem;
