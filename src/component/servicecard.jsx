import React from 'react';

const ServiceCard = ({ skill }) => {
    return (
        <div className="bg-zinc-800  text-white rounded-xl p-6 m-4  items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-left text-gray-400">{skill.description}</p>
        </div>
    );
};

export default ServiceCard;
