



// import React from "react";

// const Contact = () => {
//     return (
//         <div className="bg-zinc-900 text-white font-sans p-6 items-center justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl items-center justify-center gap-8">
//                 <div className="text-center md:text-left ">
//                     <h2 className="text-2xl text-gray-400 mb-2">CONTACT US</h2>
//                     <h1 className="text-5xl mb-4">Let's Get In Touch!</h1>
//                     <p className="text-gray-300 mb-6">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptas sequi dicta expedita. Error itaque blanditiis dolore sint in cum numquam. Ipsum pariatur, debitis dolorum in nihil recusandae alias dolor ratione consequatur placeat at voluptatibus esse aspernatur numquam quibusdam amet totam quisquam repellat. Voluptatem debitis nulla beatae doloribus. Sed, sequi.
//                     </p>
//                     <hr className="border-gray-700 mb-6"/>
//                     <div className="flex justify-center md:justify-start space-x-4 mb-8">
//                         <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
//                         <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
//                         <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
//                         <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
//                     </div>
//                 </div>
//                 <div className="max-w-3xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
//                     <h1 className="text-3xl mb-4 text-center">Get In Touch</h1>
//                     <form className="space-y-4">
//                         <input 
//                             type="email" 
//                             placeholder="Enter Your Email" 
//                             className="w-full p-3 bg-transparent border-b-2 border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-500"
//                         />
//                         <input 
//                             type="tel" 
//                             placeholder="Enter Your Phone Number" 
//                             className="w-full p-3 bg-transparent border-b-2 border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-500"
//                         />
//                         <input 
//                             type="text" 
//                             placeholder="Enter Your Address" 
//                             className="w-full p-3 bg-transparent border-b-2 border-gray-400 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-500"
//                         />
//                         <button 
//                             type="submit" 
//                             className="w-full py-3 rounded bg-gray-600 hover:bg-gray-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;



import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="bg-zinc-900 text-white font-sans p-6 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl items-center justify-center gap-12">
                <div className="text-center md:text-left">
                    {/* <h2 className="text-2xl text-gray-400 mb-2">CONTACT US</h2> */}
                    <span className="bg-zinc-800 text-emerald-100 border text-gray-400  border-zinc-600 px-4 py-2 rounded-full inline-block mb-4">
                    CONTACT US
                            </span>
                    <h1 className="text-5xl mb-4">Let's Get In Touch!</h1>
                    <p className="text-gray-300 mb-6">
                    Feel free to reach out if you have any questions, project ideas, or just want to connect! I'm always open to collaborating on exciting projects or discussing new opportunities. Whether you're looking for a developer or just want to chat about tech, I'm here to help. Let's create something amazing together!
                    </p>
                    <hr className="border-gray-700 mb-6"/>
                    <h1 className="text-4xl mb-4">Follow Me</h1>
                    <div className="flex justify-center md:justify-start space-x-4 mt-8 mb-8 gap-4 text-4xl">
                    <a href="https://www.linkedin.com/in/santosh-pal-7b7b95253/" ><FaLinkedinIn /></a>
                    <a href="https://twitter.com" ><BsTwitter/></a>
                    <a href="https://instagram.com" ><BsInstagram/></a>
                    <a href="https://www.facebook.com/profile.php?id=100086410339153&mibextid=ZbWKwL" ><FaFacebookF/></a>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto p-8 bg-zinc-800 rounded-lg shadow-md">
                    <h1 className="text-5xl mb-4 text-left">Get In Touch!</h1>
                    <form className="space-y-4">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            className="w-full p-3 bg-transparent border-b-2 border-zinc-700 text-gray-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-700"
                        />
                        <input 
                            type="tel" 
                            placeholder="Enter Your Phone Number" 
                            className="w-full p-3 bg-transparent border-b-2 border-zinc-700 text-gray-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-700"
                        />
                        <input 
                            type="text" 
                            placeholder="Enter Your Address" 
                            className="w-full p-3 bg-transparent border-b-2 border-zinc-700 text-gray-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-700"
                        />
                        <button 
                            type="submit" 
                            className="w-full py-3 rounded bg-green-600 hover:bg-green-500 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
