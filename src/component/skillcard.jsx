import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SkillCard = ({ skill }) => {
    const { name, icon, percentage } = skill;
    const springProps = useSpring({ width: `${percentage}%`, from: { width: '0%' } });

    return (
        <div className="bg-zinc-800 text-white rounded-xl p-4 m-2 flex items-center">
            <div className="text-6xl">{icon}</div>
            <div className="flex-1 ml-4">
                <div className="text-2xl ">{name}</div>
                <div className="relative mt-8 w-full h-3 bg-gray-700 rounded-full">
                    <animated.div 
                        style={{ width: springProps.width }} 
                        className="h-3 bg-green-500 rounded-full" 
                    />
                </div>
            </div>
            <div className="ml-4 mb-10 text-s  border border-zinc-600 rounded py-1 px-2">{percentage}%</div>
        </div>
    );
};

export default SkillCard;
