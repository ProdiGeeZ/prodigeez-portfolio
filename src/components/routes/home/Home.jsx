/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center w-full h-full flex flex-col items-center p-1 md:p-20">
                <Avatar className="rounded-full w-32 h-32 mb-6 mt-6 sm:w-24 sm:h-24 md:w-40 md:h-40 md:mb-2 lg:mb-0 border-4 border-[#dc26269d] lg:w-48 lg:h-48 shadow-xl shadow-red-500/50 " style={{ boxShadow: '0px 2px 10px 4px rgba(255, 0, 0, 0.5)'}}>
                    <AvatarImage src="./avatar.png" />
                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl md:text-5xl lg:text-7xl lg:mb-6 font-bold md:pt-4 lg:pt-6 mb-3 text-primary">Hi, I'm Saabir</h1>
                <h2 className="text-l md:text-2xl text-foreground font-bold lg:mb-4">Junior Full Stack Developer</h2>
                <p className="text-base md:text-lg mb-4 m-2 p-1 lg:mb-6">
                    Full stack developer based in Manchester, England. Obsessed with the creative process of software development.
                </p>
                <Button className="md:text-base py-4 px-4 text-md rounded-md font-semibold hover:bg-[#fd8d8d] hover:text-[#fff] lg:py-6 lg:px-6 lg:text-lg lg:mb-6 ">
                    View My Work
                </Button>
                <div className="flex flex-wrap justify-center mt-6 bg-[#67000067] w-70 px-5 py-2 items-center gap-2 md:gap-4 md:mt-4 lg:w-70 border-[#494949b7] border-2 rounded-full p-1 hover:bg-[#670000a9] transition-all ">
                    <h6 className="text-md md:text-lg lg:text-xl mb-0 font-bold flex items-center">Tech Stack</h6>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition-all" />
                    <i className="devicon-express-original text-xl lg:text-[32px] hover:scale-125 transition-all"></i>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className="w-6 h-6 md:w-8 md:h-8 hover:scale-125 transition-all" />
                    <i className="devicon-postgresql-plain-wordmark text-xl lg:text-[32px] hover:scale-125 transition-all"></i>
                </div>
            </div>
        </div>
    )
}

export default Home