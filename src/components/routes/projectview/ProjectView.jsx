import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectInfo';
import { User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"

function ProjectView() {
    const { name } = useParams();
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const projectInfo = projects.find(project => project.name === name);
    if (!projectInfo) {
        return <p>Project not found</p>;
    }

    const images = darkMode ? projectInfo.images.dark : projectInfo.images.light;

    return (
        <>
            <div className="flex justify-center w-[100%] md:w-[85%] lg:w-[80%] mx-auto md:justify-start my-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-l my-2">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash  className="text-l my-2"/>
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/projects" className="text-l my-2">Projects</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash  className="text-l my-2"/>
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-l my-2">{projectInfo.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-4/5 max-w-screen-xl">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-left">
                        {projectInfo.title}
                    </h1>
                    {images && images.length > 0 ? (
                        <>
                            <Carousel>
                                <CarouselPrevious />
                                <CarouselContent>
                                    {images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <img src={image} alt={`Slide ${index + 1}`} className="w-full" style={{ height: 'auto', objectFit: 'cover', borderRadius: '8px' }} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselNext />
                            </Carousel>
                            <Button onClick={toggleDarkMode} className="my-2 mb-0">
                                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            </Button>
                        </>
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-4/5 max-w-screen-xl m-10 mt-8">
                    <div className="m-2 mt-0 mb-8">
                        <h2 className="text-2xl font-bold">Project Summary</h2>
                        <p className="text-lg leading-7">
                            {projectInfo.description}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-1/2 px-2">
                                <div className="">
                                    <h3 className="text-xl font-bold">
                                        Problem Statement
                                    </h3>
                                    <p className="text-lg">
                                        {projectInfo.initialSituation}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold">
                                        Solution
                                    </h3>
                                    <p className="text-lg">
                                        {projectInfo.problemIdentification}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold">
                                        Project Management
                                    </h3>
                                    <p className="text-lg">
                                        {projectInfo.implementation.methodology}
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 px-2">
                                <div className="">
                                    <h3 className="text-xl font-bold">
                                        Design
                                    </h3>
                                    <p className="text-lg">
                                        {projectInfo.implementation.design}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold">Choice of Technology</h3>
                                    <p className="text-lg">
                                        {projectInfo.implementation.techStack}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold">Initial Approach</h3>
                                    <p className="text-lg">
                                        {projectInfo.implementation.dataSource}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <aside className="lg:w-1/3 lg:pl-8 mt-4 lg:mt-0">
                            <div className="p-4 border border-gray-200 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-2">Technologies</h2>
                                <p>JavaScript/Node, C#, Java, Golang</p>
                                <p>Next.js, React Native, Tailwind CSS</p>
                                <p>Algolia, GraphQL, Airtable, Zapier</p>
                            </div>
                            <div className="mt-6 ">
                                <div className="p-4 border border-gray-200 rounded-lg shadow-md">
                                    <h2 className="text-2xl font-bold mb-2">
                                        Collaborators
                                    </h2>
                                    {projectInfo.collaborators.map((collaborator, index) => (
                                        <div key={index} className="flex justify-start items-center gap-2 mb-2">
                                            <User className="h-6 w-6" />
                                            <span>
                                                <p className='text-sm'>{collaborator.name} - {collaborator.role}</p>
                                            </span>
                                            {collaborator.profile && (
                                                <a href={collaborator.profile} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub className="h-6 w-6" />
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectView;
