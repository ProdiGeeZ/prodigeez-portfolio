/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import About from "./About";
import { Link as Scroll } from 'react-scroll'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center w-full h-[100vh] md:pt-15 mt-8 md:mt-0 flex flex-col items-center p-1 md:p-20">
                    <Avatar
                        className="rounded-full w-[200px] h-[200px] mb-6 sm:w-75 sm:h-auto md:w-[200px] md:h-auto md:mb-2 lg:mb-0 ring-1 ring-primary lg:w-48 lg:h-48">
                        <AvatarImage src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/avatar.png?t=2024-04-18T18%3A45%3A19.706Z" />
                        <AvatarFallback><h1 className="text-2xl">SA</h1></AvatarFallback>
                    </Avatar>
                    <h1 className="text-5xl md:text-7xl lg:text-7xl lg:mb-6 font-bold md:pt-4 lg:pt-6 mb-3 text-primary">Hi, I'm Saabir.</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold lg:mb-4">Junior Software Engineer</h2>
                    <p className="text-base font-semibold md:text-lg p-6 lg:mb-6 ">
                        Eager developer looking to learn, contribute, and grow in vast world of technology.
                    </p>
                    <Button href="/projects" className="w-[35%] h-[6%] mb-12 md:w-auto md:text-base text-md rounded-md font-semibold hover:text-white lg:text-lg lg:mb-20 transition ease-in-out">
                        <Link to={"/projects"}>View My Work</Link>
                    </Button>
                    <div className="flex flex-wrap justify-center w-70 px-5 py-2 items-center gap-2 md:gap-4 md:mt-4 lg:w-70 ring-2 ring-[#076632ad] ring-opacity-50 rounded-full p-1 hover:bg-[#4eff6610] transition ease-in-out duration-300 root:bg-transparent">
                        <h6 className="text-md md:text-lg lg:text-xl mb-0 font-bold flex items-center">Tech Stack</h6>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node"
                            className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition ease-in-out" />
                        <i className="devicon-express-original text-xl lg:text-[32px] hover:scale-125 transition ease-in-out "></i>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="React"
                            className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition ease-in-out" />
                        <i className="devicon-postgresql-plain-wordmark text-xl lg:text-[32px] hover:scale-125 transition ease-in-out"></i>
                    </div>
                    <div>
                        <Scroll to="about" spy={true} smooth={true} duration={500}>
                            <ChevronDown className="cursor-pointer self-center mt-20 md:mt-5 hover:scale-125 transition ease-in-out duration-300" style={{ fontSize: '45px' }} />
                        </Scroll>
                    </div>
                </div>
            </div>
            <div id="about">
                <About  />
            </div>
        </>
    )
}

export default Home