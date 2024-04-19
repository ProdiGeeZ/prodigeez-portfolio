/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="px-10 py-12 w-full mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-screen justify-center items-center">
            <div className="flex justify-center items-center md:col-span-1 lg:col-span-1">
                <img
                    className="w-full h-auto md:flex flex-col justify-center p-5 items-center md:p-20"
                    src={"https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/about.svg?t=2024-04-19T17%3A58%3A30.193Z"}
                    alt="bitmoji-saabir"
                />
            </div>
            <div className="w-full flex-col justify-center h-auto md:flex md:w-full md:justify-center text-left p-10">
                <h1 className="text-white font-bold text-3xl mb-4">
                    About Me
                </h1>
                <h3 className='font-bold text-l md:text-xl'> Based in Manchester, England<span role="img" aria-label="Location"> 📍</span></h3>
                <p className="mb-6 leading-relaxed text-sm p-1 md:text-lg">
                    I'm a junior full stack developer with a passion for technology and creativity. I'm currently seeking a role in software development. I acquired a bachelor’s degree in Software Engineering and then completed a comprehensive Full-Stack bootcamp.
                </p>
                <h3><span role="img" aria-label="Star" className='font-bold text-l md:text-xl'>Hobbies & Interests</span></h3>
                <p className="mb-6 leading-relaxed text-sm p-1 md:text-lg">
                Since childhood, I've been captivated by the creative aspect in everything, exploring photography, videography, and graphic design. My curiosity about how things work has driven me to learn the intricacies of their engineering. This journey has allowed me to create my own works, and I plan to continue developing my skills and creations as I grow.
                </p>
                <Button href="/projects" className="inline-flex flex-row items-center justify-center w-44 px-4 py-2 md:text-base text-md rounded-md font-semibold lg:text-lg lg:mb-6 transition ease-in-out">
                    <Link to={"/projects"}>See Portfolio</Link>
                    <ChevronRight aria-label="Right arrow" />
                </Button>
            </div>
        </div>

    )
}

export default About