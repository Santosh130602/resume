
// import React from 'react';
// import { FaLinkedinIn } from "react-icons/fa6";
// import { BsTwitter } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa6";

// const Footer = () => {
//     return (
//         <footer className="bg-black text-white py-10">
//             <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 p-12">
//                 <div className='text-left '>
//                     <h2 className="text-3xl font-bold mb-6">NOXYLYN</h2>
//                     <p className="text-gray-400 mb-4">
//                         Lorem Ipsum Dolor Sit Amet Consectetur. Semper Mauris Ut Quis Sed Praesent Nibh Malesuada.
//                     </p>
//                     <a href="mailto:hello@noxlyn.com" className="text-green-500">
//                         hello@noxlyn.com
//                     </a>
//                 </div>
//                 <div className='text-left'>
//                     <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
//                     <ul>
//                         <li><a href="/" className="text-gray-400">Home</a></li>
//                         <li><a href="/" className="text-gray-400">Skill</a></li>
//                         <li><a href="/" className="text-gray-400">Portfolio</a></li>
//                         <li><a href="/" className="text-gray-400">Experience</a></li>
//                     </ul>
//                 </div>
//                 <div className='text-left'>
//                     <h3 className="text-xl font-semibold mb-6">Link</h3>
//                     <ul>
//                         <li><a href="/" className="text-gray-400">Privacy Policy</a></li>
//                         <li><a href="/" className="text-gray-400">Terms of Use</a></li>
//                     </ul>
//                 </div>
//                 <div className='text-left'>
//                     <h3 className="text-xl font-semibold mb-6">Social Media</h3>
//                     <div className="flex space-x-4">
//                         <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn /></a>
//                         <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors"><BsTwitter /></a>
//                         <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors"><BsInstagram /></a>
//                         <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors"><FaFacebookF /></a>
//                     </div>
//                 </div>
//             </div>
//             <hr className="my-8 border-gray-700"/>
//             <div className="container mx-auto text-center mt-10">
//                 <p className="text-gray-400">© 2024 All rights reserved - Noxlyn</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;




import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 p-12 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold mb-6">SANTOSH</h2>
                    <p className="text-gray-400 mb-4">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Semper Mauris Ut Quis Sed Praesent Nibh Malesuada.
                    </p>
                   
                    <a href="mailto:santoshbiet.cs2144@gmail.com" className="text-green-500 flex text-center gap-2">
                    <HiOutlineMail className='text-2xl'/> HELLO@SANTOSH.COM
                    </a>
                    
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
                    <ul>
                        <li><a href="/" className="text-gray-400">Home</a></li>
                        <li><a href="/" className="text-gray-400">Skill</a></li>
                        <li><a href="/" className="text-gray-400">Portfolio</a></li>
                        <li><a href="/" className="text-gray-400">Experience</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6">Link</h3>
                    <ul>
                        <li><a href="/" className="text-gray-400">Privacy Policy</a></li>
                        <li><a href="/" className="text-gray-400">Terms of Use</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-6">Social Media</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.linkedin.com/in/santosh-pal-7b7b95253/" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn /></a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors"><BsTwitter /></a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors"><BsInstagram /></a>
                        <a href="https://www.facebook.com/profile.php?id=100086410339153&mibextid=ZbWKwL" className="text-gray-400 hover:text-white transition-colors"><FaFacebookF /></a>
                    </div>
                </div>
            </div>
            <hr className="my-8 border-gray-700"/>
            <div className="container mx-auto text-center mt-10">
                <p className="text-gray-400">© 2024 All rights reserved - Noxlyn</p>
            </div>
        </footer>
    );
}

export default Footer;




