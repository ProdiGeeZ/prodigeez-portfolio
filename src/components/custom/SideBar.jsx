import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <>
            <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center gap-12 md:gap-16 p-1 md:p-3 hover:p-4 bg-gradient-to-tl from-dark-frosted-dark/25 to-frosted-dark backdrop-blur-xl rounded-r-md shadow-2xl dark:bg-gradient-to-tl dark:from-dark-frosted-light/10 dark:to-dark-frosted-dark opacity-50 hover:opacity-100 focus-within:opacity-100 transition-all ease-in-out duration-300 z-50">
                <a href="https://twitter.com/saabir_dev" className="hover:text-[#3198d7]" target="_blank" rel="noopener noreferrer"><FaXTwitter size={24} aria-label='twitter'/></a>
                <a href="https://instagram.com/saabir.io" className="hover:text-pink-700" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} aria-label='instagram'/></a>
                <a href="https://linkedin.com/in/saabirahmed/" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} aria-label='linkedin'/></a>
                <a href="https://github.com/prodigeez" className="hover:text-[#7c7c7c]" target="_blank" rel="noopener noreferrer"><FaGithub size={24} aria-label='github'/></a>
            </div>
        </>
    );
};

export default Sidebar;
