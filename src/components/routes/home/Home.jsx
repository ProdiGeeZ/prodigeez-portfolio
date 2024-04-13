/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center w-full h-full flex flex-col items-center">
                <Avatar className="rounded-full w-20 h-20 md:w-40 md:h-40 mb-10 mt-20">
                    <AvatarImage src="./avatar.png" />
                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">Hi, I'm Saabir</h1>
                <h2 className="text-xl md:text-2xl mb-4 text-foreground font-bold">Junior Full Stack Developer</h2>
                <p className="text-base md:text-lg mb-6 m-2">
                    Full stack developer based in Manchester, England. Obsessed with the creative process of software development.
                </p>
                <Button size='lg' variant='default'>
                    View My Work
                </Button>
                <div className="inline-flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-6 md:mt-10 w-full">
                    <h6 className='text-sm md:text-lg lg:text-xl mb-2 md:mb-4'>Tech Stack</h6>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML" className="w-8 h-8 md:w-10 md:h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS" className="w-8 h-8 md:w-10 md:h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-8 h-8 md:w-10 md:h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className="w-8 h-8 md:w-10 md:h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-8 h-8 md:w-10 md:h-10" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" className="w-8 h-8 md:w-10 md:h-10" />
                </div>
            </div>
        </div>
    )
}

export default Home