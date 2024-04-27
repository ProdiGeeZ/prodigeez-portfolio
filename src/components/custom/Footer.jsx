/* eslint-disable react/no-unescaped-entities */
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

function Footer() {
    return (
        <>
            <Separator className="max-w-screen mt-10"/>
            <section className="bg-background overflow-hidden max-w-screen">
                <div className="sm:px-10 w-full p-5 grid grid-cols-1 xl:grid-cols-2 justify-between items-center overflow-hidden">
                <div className="w-full/2 px-4 my-0 mx-auto flex flex-col justify-center space-y-4 overflow-hidden sm:px-6 lg:px-8">
                        <p className="text-2xl font-semibold flex justify-center items-center lg:w-full">I Might Start a Blog?</p>
                        <p className="text-base flex text-center">I may occasionally write about the personal projects I'm working on. If you're bored...join!</p>
                        <span className="inline-flex gap-2 w-full">
                            <Input type="email" id="email" name="user_email" className="border-2 border-foreground/45 shadow-md rounded-md p-2" placeholder="Your Email" />
                            <Button>Subscribe</Button></span>
                    </div>
                    <div className="w-full overflow-hidden sm:px-6  flex flex-col">
                    <p className="text-2xl font-semibold flex justify-center pt-5 xl:items-end">Useful Links</p>
                        <nav className="flex xl:flex-col justify-center items-center ">
                            <div className="px-4 py-2">
                                <a href="" className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                                    About
                                </a>
                            </div>
                            <div className="px-4 py-2">
                                <a href="/projects" className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                                    Projects
                                </a>
                            </div>
                            <div className="px-4 py-2">
                                <a href="/cv.pdf" target="_blank" className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                                    CV
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <Separator className="max-w-screen mt-1"/>
                        <p className=" text-xs sm:text-base text-center text-gray-400 p-2 py-4">
                            © 2024 Saabir.dev, Inc. All rights reserved. (verbally)
                        </p>
            </section>
        </>
    )
}

export default Footer;