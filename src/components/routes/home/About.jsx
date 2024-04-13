/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react';

function About() {
    return (
        <div className="w-full flex flex-col mt-12 md:flex-row px-10 py-12 justify-center h-auto md:h-[100vh] md:px-80 md:pt-[150px]">
            <div className="w-full h-full align-self-center md:mr-10">
                <div className="w-full md:p-20 lg:p-0 flex ">
                    <img
                        className="w-[100%] h-auto rounded-lg"
                        src="./about.jpg"
                        alt="image of myself"
                    />
                </div>
            </div>
            <div className="w-full mt-4">
                <h1 className="text-white font-bold text-3xl mb-4 lg:mt-[125px]">
                    About Me
                </h1>
                <h3 className='font-bold text-xl'> Based in Manchester, England<span role="img" aria-label="Location"> 📍</span></h3>
                <p className="mb-6 leading-relaxed text-base">
                    I'm a junior full stack developer with a passion for technology and creativity. I'm currently seeking an entry-level role in software development. I acquired a bachelor’s degree in Software Engineering and then completed a comprehensive Full-Stack bootcamp.
                </p>
                <h3><span role="img" aria-label="Star" className='font-bold text-xl'>Hobbies & Interests</span></h3>
                <p className="mb-6 leading-relaxed text-base">
                    From a young age, I've been fascinated by creative arts, exploring photography, videography, and graphic design through school and beyond.
                </p>
                <Button href="/portfolio" className="inline-flex items-center justify-center w-44 md:w-auto px-6 py-2 md:text-base text-md rounded-md font-semibold lg:text-lg lg:mb-6">
                    See Portfolio <ChevronRight aria-label="Right arrow" />
                </Button>
            </div>
        </div>
    )
}

export default About