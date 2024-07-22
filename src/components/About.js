import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 max-sm:w-[800px]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-4/6">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Me</h1>
                <p className="text-lg mb-4 text-gray-700">
                    Hello, I'm Manish Ray. Welcome to my website! Here, you can explore a range of features by logging in or signing up. Once logged in, you'll be able to add and delete your notes securely and freely, similar to how you use Google Drive. Your data is safely stored in the cloud.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                    This is an ongoing project, and I'm constantly working on adding new features such as large file uploads, big PDF uploads, and other exciting functionalities. Stay tuned for more updates!
                </p>
                <p className="text-lg mb-4 text-gray-700">
                    Feel free to reach out to me via email at: <a href="mailto:manishiitguwahati37@gmail.com" className="text-blue-500 hover:underline">manishiitguwahati37@gmail.com</a>
                </p>
                <a href="https://www.linkedin.com/in/manish-ray-55899b252/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-blue-700 hover:underline">
                    <FaLinkedin className="mr-2 text-2xl" /> Connect with me on LinkedIn
                </a>
            </div>
        </div>
    );
};

export default About;
