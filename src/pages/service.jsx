









import React from 'react';
import ServiceCard from '../component/servicecard';
// import SkillCard from './SkillCard';

const skills = [
    { name: 'App Development', icon: '📱', description: 'I am App Developer ready for any task' },
    { name: 'Web Development', icon: '⚙️', description: 'I am Designers are ready for any sort of website you dream of building.' },
    { name: 'Cybersecurity', icon: '🔒', description: 'Cybersecurity is the most important part about the internet. Me and my team can help you protect your identity and data from intruders.' },
    { name: 'Networking', icon: '🌐', description: 'I have a large experience with Servers, Networks, and more. Me and my team will make sure you are covered in this area of your business.' },
];

const ServiceSection = () => {
    return (
        <div className="bg-zinc-900 text-white flex flex-col items-center justify-center py-16">
            <div className="text-center mb-12">
                <h2 className="text-xl text-gray-400 border border-zinc-600 rounded-full inline-block px-4 py-1 mb-2">MY SERVICES</h2>
                <h1 className="text-5xl  mb-4">What Can I Do?</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
                {skills.map((skill, index) => (
                    <ServiceCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
