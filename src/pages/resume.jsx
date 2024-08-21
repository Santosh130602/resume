// src/components/Experience.js
import React from "react";
import ProfileImage from "../image/main.jpeg"

const Resume = () => {
  const experiences = [
    {
      title: "Full stack Developer",
      // date: "2024 - Present",
      description: "Full stack MERN Developer",
      color: "bg-white",
    },
    {
      title: "Android Developer",
      // date: "2024 - Present",
      description: "Using Kotlin for Android Development",
      color: "bg-green-500",
    },
    {
      title: "DevOps",
      // date: "2024 - Present",
      description: "Little Bit knowledge about DevOps, CI/CD pipline, Version Control and Jenkins",
      color: "bg-white",
    },
    {
      title: "Cybersecurity",
      // date: "2024 - Present",
      description:
        "Cybersecurity is the most important part about the internet. Me and my team can help you protect your identity and data from intruders",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-zinc-900 text-white font-sans p-6 pt-20">
         <div className="mb-8 text-center">
             <h2 className="text-xl text-gray-400 border border-zinc-600 rounded-full inline-block px-4 py-1 mb-2">MY RESUME</h2>
              <h1 className="text-5xl">Experience</h1>
            </div> 
      <div className="max-w-6xl mx-auto p-4">
          
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2">
           
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative pl-12 text-left">
                  <div
                    className={`absolute left-0 top-1/4 transform -translate-y-1/2 h-8 w-8 ${experience.color} border-2 border-white rounded-full`}
                  ></div>
                  <h3 className="text-2xl ">{experience.title}</h3>
                  <p className="text-gray-400">{experience.date}</p>
                  <p className="text-gray-400">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <img
                src={ProfileImage}
                alt="Profile Image"
                className=" w-[400px] h-[500px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full">
                100% Skilled in Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
