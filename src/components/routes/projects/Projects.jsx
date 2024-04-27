import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import ProjectNav from "@/components/custom/ProjectNav";
import ProjectCard from "./ProjectCard";
import { Slash } from "lucide-react";

function Projects() {
    return (
        <>
            <ProjectNav />
            <div className="flex justify-center w-[100%] md:w-[85%] lg:w-[80%] mx-auto md:justify-start md:my-4 mb-0">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-l my-2 mb-0">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash className="text-l my-2 mb-0"/>
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-l my-2 mb-0">Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center p-10 pt-0">
                <div className="flex w-full my-10 justify-center items-center flex-col">
                    <h1 className="text-4xl font-bold decoration-1 underline underline-offset-4">Featured Projects</h1><br />
                    <h5 className="text-xl text-gray-500 text-center">Hover over the titles for a quick summary😏</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <ProjectCard
                        imageSrc="./northcoders.svg"
                        title="NC News"
                        name="nc-news"
                        hoverTitle="Full Stack - API & Front End Client"
                        description="News API that serves mock news including articles and comments. Client application built with React."
                        date="November 2023 - December 2023"
                        technologies={['node', 'react', 'express', 'postgres', 'jest']}
                    />
                    <ProjectCard
                        imageSrc="./pairsniper.svg"
                        title="Pairsniper Analytics"
                        name="pairsniper"
                        hoverTitle="Full Stack - API & Front End Client"
                        description="Cryptocurrency analytic tool with a self maintaining database. Pulls and formats live data from CoinMarketCap API."
                        date="January 2024 - Ongoing"
                        technologies={['node', 'react', 'express', 'postgres', 'supabase', 'MUI', 'Tailwind', 'Render', 'vercel', 'jest', 'figma', 'photoshop']}
                    />
                    <ProjectCard
                        imageSrc="./squareup.svg"
                        title="Square Up"
                        name="square-up"
                        hoverTitle="Mobile App & Firebase Backend"
                        description="Boardgame meet up app. Search for games events in your area. Host your own. Manage attendees."
                        date="December 2023 - January 2024"
                        technologies={['expo', 'react native', 'node', 'firebase', 'Kitten UI']}
                    />
                </div>
            </div>
        </>
    )
}

export default Projects