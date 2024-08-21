// // import logo from './logo.svg';
// // import './App.css';
// // import { Route, Routes } from 'react-router-dom';
// // import Header from "./pages/header"
// // import Home from './pages/home';
// // import SkillsSection from './pages/skills'

// // function App() {
// //   return (
// //     <div className="App">
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path='/skills' element={<SkillsSection/>} />

// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;



// import React,{useRef} from 'react';
// import Home from './pages/home';
// import Header from './pages/header';

// const App = () => {
//     const homeRef = useRef(null);
//     const skillsRef = useRef(null);
//     const servicesRef = useRef(null);
//     const portfolioRef = useRef(null);
//     const resumeRef = useRef(null);
//     const contactRef = useRef(null);

//     const handleNavigation = (section) => {
//         switch (section) {
//             case 'home':
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//                 break;
//             case 'skills':
//                 skillsRef.current.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'services':
//                 servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'portfolio':
//                 portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'resume':
//                 resumeRef.current.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             case 'contact':
//                 contactRef.current.scrollIntoView({ behavior: 'smooth' });
//                 break;
//             default:
//                 break;
//         }
//     };

//     return (
//         <div>
//             <Header onNavigate={handleNavigation} />
//             <div ref={homeRef}>
//                 <Home
//                     skillsRef={skillsRef}
//                     servicesRef={servicesRef}
//                     portfolioRef={portfolioRef}
//                     resumeRef={resumeRef}
//                     contactRef={contactRef}
//                 />
//             </div>
//         </div>
//     );
// };

// export default App;




import React, { useRef, useState } from 'react';
import Home from './pages/home';
import Header from './pages/header';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);

    const handleNavigation = (section) => {
        setActiveSection(section);
        switch (section) {
            case 'home':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'skills':
                skillsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'services':
                servicesRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'portfolio':
                portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'resume':
                resumeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Header onNavigate={handleNavigation} activeSection={activeSection} />
            <Home
                skillsRef={skillsRef}
                servicesRef={servicesRef}
                portfolioRef={portfolioRef}
                resumeRef={resumeRef}
                contactRef={contactRef}
            />
        </div>
    );
};

export default App;
