/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Link as Scroll } from 'react-scroll'
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="sm:px-10 py-12 w-full min-h-screen grid grid-cols-1 xl:grid-cols-2 justify-center items-center">
                <section>
                    <div className="flex justify-center items-center p-4 md:p-20">
                        <img
                            className="max-w-full h-auto"
                            src={"https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/about.svg?t=2024-04-19T17%3A58%3A30.193Z"}
                            alt="bitmoji-saabir"
                        />
                    </div>
                </section>
                <section>
                    <div className="flex flex-col justify-center text-left px-4 md:px-40">
                        <h2 className="font-bold text-3xl mb-4">
                            About Me
                        </h2>
                        <h3 className='font-bold text-lg md:text-xl'>Based in Manchester, England 📍</h3>
                        <p className="leading-relaxed text-base md:text-lg mb-4">
                            I'm a junior full stack developer with a passion for technology and creativity. I'm currently seeking a role in software development. I acquired a bachelor’s degree in Software Engineering and then completed a comprehensive Full-Stack bootcamp.
                        </p>
                        <h3 className='font-bold text-lg md:text-xl'>Hobbies & Interests</h3>
                        <p className="leading-relaxed text-base md:text-lg mb-6">
                            Since childhood, I've been captivated by the creative aspect in everything, exploring photography, videography, and graphic design. My curiosity about how things work has driven me to learn the intricacies of their engineering. This journey has allowed me to create my own works, and I plan to continue developing my skills and creations as I grow.
                        </p>
                        <Button href="/projects" className="inline-flex items-center justify-center px-4 py-2 text-md md:text-base rounded-md font-semibold transition duration-300 ease-in-out md:w-fit">
                            <Link to={"/projects"}>See Portfolio</Link>
                            <ChevronRight />
                        </Button>
                        <Button variant="outline" component={'Scroll'} className="inline-flex items-center justify-center px-5 py-2 text-md md:text-base rounded-md font-semibold transition duration-300 ease-in-out md:w-fit mt-2">
                            <Scroll to="contact" spy={true} smooth={true} duration={500} className="my-4 ">
                                <span className="inline-flex w-full h-full">Contact Me<ChevronDown /></span>
                            </Scroll>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About;