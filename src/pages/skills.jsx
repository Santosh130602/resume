import React from 'react';
import SkillCard from '../component/skillcard';

const skills = [
    { name: 'Cybersecurity', icon: '🔒', percentage: 95 },
    { name: 'Web Development', icon: '⚙️', percentage: 90 },
    { name: 'App Development', icon: '📱', percentage: 85 },
    { name: 'Networking', icon: '🌐', percentage: 80 },
];

const SkillsSection = () => {
    return (
        <div className='bg-zinc-900'>

            <div className=" max-w-6xl mx-auto  bg-zinc-900 text-white  items-center justify-center p-6">
                <div className="text-center mb-12">
                    <h2 className="text-xl text-gray-400 border border-zinc-600 rounded-full inline-block px-4 py-1 mb-2">MY SKILLS</h2>
                    <h1 className="text-5xl ">My Advantages</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map(skill => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
