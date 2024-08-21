import React from 'react';
import KrishiDoot from "../image/krishi.jpeg"
import StudyNotation from "../image/studynotation.jpg"
import Liaision from "../image/lision.jpg"
import Gmap from "../image/gmap.webp"
import Sabyasachi from "../image/sabyasachi.png"
import Flys from "../image/flys.png"
import WriteEase from "../image/writeease.png"
import Atgworld from "../image/atgworld.png"


const projects = [
  
  {
    title: 'Study-Notation',
    description: 'A Ed-Tech Platform',
    imageUrl: StudyNotation,
    liveUrl:"https://study-coral-eight.vercel.app/"
  },
  {
    title: 'Liaison',
    description: 'A Social Media Platform for finding your friend',
    imageUrl: Liaision,
    liveUrl:"https://liaison-main.vercel.app/"
  },
  {
    title: 'Krishi Doot',
    description: 'One stop solution for farmer',
    imageUrl: KrishiDoot,
    liveUrl:"https://krishi-doot.vercel.app/"
  },
  {
    title: 'G-Map',
    description: 'Search Your Destination',
    imageUrl: Gmap,
    liveUrl:"https://g-map.vercel.app/"
  },
  {
    title: 'Sabyasachi',
    description: 'E-commerce website',
    imageUrl: Sabyasachi,
    liveUrl:"https://sabyasachi.vercel.app/"
  },
  {
    title: 'ATGWorld',
    description: 'Getting Data from API',
    imageUrl: Atgworld,
    liveUrl:"https://atgworld-task-3-beta.vercel.app/"
  },
  {
    title: 'flys',
    description: 'Simple Designe in React',
    imageUrl: Flys,
    liveUrl:"https://fyle-nu.vercel.app/"
  },
  {
    title: 'writeEase',
    description: 'Simple Designe in React',
    imageUrl: WriteEase,
    liveUrl:"https://write-ease.vercel.app/"
  },
  
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className=" bg-zinc-900 text-white flex flex-col items-center justify-center py-10 px-5">
        <h2 className="text-xl text-gray-400 border border-zinc-600 rounded-full inline-block px-4 py-1 mb-2">MY PORTFOLIO</h2>
        <h1 className="text-5xl  text-center mb-10"> Helping Digital Brands Scale With Design. </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <a href={project.liveUrl}>
          <div key={index} className="bg-zinc-800 p-5 rounded-lg shadow-lg">
             <img
              href={project.liveUrl}
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            /> 
            <h2 className="text-xl font-semibold mt-5">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
