// import React from 'react';
// import ProfileImage from '../image/prophile.png';
// import BackgroundImage from "../image/back.jpg";

// import SkillsSection from './skills';
// import ServiceSection from './service';
// import Portfolio from './portfolio';
// import Resume from './resume';
// import Contact from './contact';
// import Footer from './footer';

// const Home = ({ skillsRef, servicesRef, portfolioRef, resumeRef, contactRef }) => {
//     return (
//         <div>
//             <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6">
//                 <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12  items-center relative " >
//                     <div className="relative z-20 flex-1 text-center lg:text-left lg:order-1">
//                         <div className="mb-4 mt-16">
//                             <span className="bg-zinc-800 text-emerald-100 border border-zinc-600 px-4 py-2 rounded-full inline-block">
//                                 Hello, I’m Santosh Developer and Software Engineer
//                             </span>
//                         </div>
//                         <h1 className="text-5xl lg:text-6xl mb-4">
//                             I’m a <span className="text-green-400">Developer</span>
//                             <br />
//                             And Entrepreneur Based
//                             <br />
//                             In United States
//                         </h1>
//                         <p className="text-gray-400 mb-8">
//                             I’ve done remote work for agencies, consulted for startups, and collaborated with talented people
//                             to create digital products for both business and consumer use.
//                         </p>
//                         <div className="flex justify-center lg:justify-start gap-6">
//                             <div className="bg-black p-6 rounded-lg text-center">
//                                 <div className="text-2xl font-bold">15</div>
//                                 <div className="text-gray-500">Projects</div>
//                             </div>
//                             <div className="bg-black p-6 rounded-lg text-center">
//                                 <div className="text-2xl font-bold">15+</div>
//                                 <div className="text-gray-500">Clients</div>
//                             </div>
//                             <div className="bg-black p-6 rounded-lg text-center">
//                                 <div className="text-2xl font-bold">500+</div>
//                                 <div className="text-gray-500">Followers</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="relative lg:order-2 flex-1 flex justify-center lg:justify-end absolute">
//                         {/* <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                            
//                         </div> */}
//                         <img src={ProfileImage} alt="Profile" className="relative z-10 w-80 h-full object-cover" />
//                     </div>
//                 </div>
//             </div>
//             <div ref={skillsRef}><SkillsSection /></div>
//             <div ref={servicesRef}><ServiceSection /></div>
//             <div ref={portfolioRef}><Portfolio /></div>
//             <div ref={resumeRef}><Resume /></div>
//             <div ref={contactRef}><Contact /></div>
//             <Footer />
//         </div>
//     );
// };

// export default Home;







import React from 'react';
import ProfileImage from '../image/prophile.png';
import BackgroundImage from "../image/back.jpg";

import SkillsSection from './skills';
import ServiceSection from './service';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';
import Footer from './footer';

const Home = ({ skillsRef, servicesRef, portfolioRef, resumeRef, contactRef }) => {
    return (
        <div>
            <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6 relative">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                    <div className="relative z-20 flex-1 text-center lg:text-left lg:order-1 lg:mr-[-20%]">
                        <div className="mb-4 mt-16">
                            <span className="bg-zinc-800 text-emerald-100 border border-zinc-600 px-4 py-2 rounded-full inline-block">
                                Hello, I’m Santosh Developer and Software Engineer
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl mb-4">
                            I’m a <span className="text-green-400">Developer</span>
                            <br />
                            And Software Engineer
                            <br />
                            In India
                        </h1>
                        <p className="text-gray-400 mb-8">
                            I’ve done remote work for agencies, consulted for startups, and collaborated with talented people
                            to create digital products for both business and consumer use.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-6">
                            <div className="bg-black p-6 rounded-lg text-center">
                                <div className="text-2xl font-bold">15</div>
                                <div className="text-gray-500">Projects</div>
                            </div>
                            <div className="bg-black p-6 rounded-lg text-center">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-gray-500">Clients</div>
                            </div>
                            <div className="bg-black p-6 rounded-lg text-center">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-gray-500">Followers</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:order-2 flex-1 flex justify-center lg:justify-end">
                        {/* <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}></div> */}
                        <img src={ProfileImage} alt="Profile" className="relative z-10 w-80 h-full object-cover" />
                    </div>
                </div>
            </div>
            <div ref={skillsRef}><SkillsSection /></div>
            <div ref={servicesRef}><ServiceSection /></div>
            <div ref={portfolioRef}><Portfolio /></div>
            <div ref={resumeRef}><Resume /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
};

export default Home;
