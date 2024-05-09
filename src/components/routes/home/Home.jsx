/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LoadingScreen from "@/components/custom/LoadingScreen";
import NavBar from "@/components/custom/NavBar";
import { Button } from "@/components/ui/button"
import { Link as Scroll } from 'react-scroll'
import { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Contact from "./Contact";
import About from "./About";
import Footer from "@/components/custom/Footer";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1750);
    }, []);

    if (loading) {
        return (
            <>
                <LoadingScreen />
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>Saabir Ahmed - Software Engineer Portfolio</title>
                <meta name="description" content="A Software engineer based in Manchester, England. Specialising in React, Express, Node.js, and PostgreSQL for web and mobile app development." />
            </Helmet>
            <NavBar />
            <div className="flex items-center justify-center w-full h-screen m-w-screen overflow-hidden">
                <div className="flex flex-col items-center justify-center w-full text-center p-4 md:p-10 gap-4 mt-20">
                    <Avatar className="rounded-full w-48 h-48 mb-4 ring-1 ring-primary">
                        <AvatarImage src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/avatar.webp?t=2024-05-09T12%3A33%3A36.624Z" alt="Profile-Image"/>
                        <AvatarFallback><h1 className="text-2xl">just a sec...</h1></AvatarFallback>
                    </Avatar>
                    <h1 className="text-5xl md:text-7xl font-bold mb-2 text-primary">Hi, I'm Saabir.</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Junior Software Engineer</h2>
                    <p className="text-base md:text-lg font-semibold mb-4">
                        Eager developer looking to learn, contribute, and grow in vast world of technology.
                    </p>
                    <Button className="w-1/3 md:w-auto px-4 py-2 rounded-md font-semibold transition-all ease-in-out duration-200 shadow-md hover:shadow-lg">
                        <Link to={"/projects"} aria-label="navigate to projects page">View My Work</Link>
                    </Button>
                    <div className="flex flex-wrap justify-center items-center gap-2 px-5 py-2 mt-4 ring-2 ring-[#076632ad] ring-opacity-50 rounded-full hover:bg-[#4eff6610] transition duration-300 ease-in-out">
                        <h3 className="text-md md:text-lg lg:text-xl font-bold">Tech Stack</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node"
                            className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition ease-in-out" />
                        <i className="devicon-express-original text-xl lg:text-[32px] hover:scale-125 transition ease-in-out "></i>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="React"
                            className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition ease-in-out" />
                        <i className="devicon-postgresql-plain-wordmark text-xl lg:text-[32px] hover:scale-125 transition ease-in-out"></i>
                    </div>
                    <Scroll to="about" spy={true} smooth={true} duration={500} className="my-4" aria-label="scroll to about section">
                        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 hover:translate-y-3 hover:text-[#51b448] transition duration-300 ease-in-out">
                            <p>About Me</p>
                            <ChevronDown style={{ fontSize: '45px' }} ></ChevronDown>
                        </div>
                    </Scroll>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Home