/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import About from "./About";
import { Link as Scroll } from 'react-scroll'
import { Link } from "react-router-dom";
import Contact from "./Contact";
import NavBar from "@/components/custom/NavBar";


function Home() {
    return (
        <>
            <NavBar />
            <div className="flex items-center justify-center w-full h-screen m-w-screen overflow-hidden">
                <div className="flex flex-col items-center justify-center w-full text-center p-4 md:p-10">
                    <Avatar className="rounded-full w-48 h-48 mb-4 ring-1 ring-primary">
                        <AvatarImage src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/avatar.png?t=2024-04-18T18%3A45%3A19.706Z" />
                        <AvatarFallback><h1 className="text-2xl">SA</h1></AvatarFallback>
                    </Avatar>
                    <h1 className="text-5xl md:text-7xl font-bold mb-2 text-primary">Hi, I'm Saabir.</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Junior Software Engineer</h2>
                    <p className="text-base md:text-lg font-semibold mb-4">
                        Eager developer looking to learn, contribute, and grow in vast world of technology.
                    </p>
                    <Button className="w-1/3 md:w-auto px-4 py-2 rounded-md font-semibold hover:bg-primary hover:text-white transition ease-in-out">
                        <Link to={"/projects"}>View My Work</Link>
                    </Button>
                    <div className="flex flex-wrap justify-center items-center gap-2 px-5 py-2 mt-4 ring-2 ring-[#076632ad] ring-opacity-50 rounded-full hover:bg-[#4eff6610] transition ease-in-out">
                        <h6 className="text-md md:text-lg lg:text-xl font-bold">Tech Stack</h6>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node"
                            className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition ease-in-out" />
                        <i className="devicon-express-original text-xl lg:text-[32px] hover:scale-125 transition ease-in-out "></i>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="React"
                            className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition ease-in-out" />
                        <i className="devicon-postgresql-plain-wordmark text-xl lg:text-[32px] hover:scale-125 transition ease-in-out"></i>
                    </div>
                    <Scroll to="about" spy={true} smooth={true} duration={500} className="pt-4">
                        <ChevronDown className="cursor-pointer hover:scale-125 transition ease-in-out" style={{ fontSize: '45px' }} />
                    </Scroll>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    )
}

export default Home