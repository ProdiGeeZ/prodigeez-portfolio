import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectInfo';
import { CalendarDays, User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
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
                            <Slash className="text-l my-2" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/projects" className="text-l my-2">Projects</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash className="text-l my-2" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-l my-2">{projectInfo.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-full md:w-5/6 lg:w-[80%] justify-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center md:text-left lg:mb-0">
                        {projectInfo.title}
                    </h1>
                    {images && images.length > 0 ? (
                        <div className='w-full p-0 md:p-[2rem] lg:p-[3rem] lg:pb-6 overflow-hidden lg:pt-8'>
                            <>
                                <Carousel>
                                    <CarouselPrevious />
                                    <CarouselContent>
                                        {images.map((image, index) => (
                                            <CarouselItem key={index}>
                                                <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-none md:rounded-xl shadow-md" style={{ height: 'auto', objectFit: 'cover', borderRadius: 12 }} />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselNext />
                                </Carousel>
                                <div className='w-full flex justify-between mb-3'>
                                    <span className="text-sm md:text-lg pt-1 md:pt-5 lg:pt-2 xl:pt-4 text-foreground inline-flex h-100% items-center ml-4 w-text-prose">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" /> {projectInfo.date}
                                    </span>
                                    <Button onClick={toggleDarkMode} className="my-2 mb-0 mx-2 md:mx-0 shadow-md">
                                        {darkMode ? 'View Light Mode' : 'View Dark Mode'}
                                    </Button>
                                </div>
                                <Separator />
                            </>
                        </div>
                    ) : (
                        <div className='w-full p-0 md:p-[2rem] lg:p-[3rem] lg:pb-6 overflow-hidden lg:pt-8'>
                            <div className="w-full h-[300px] md:h-[500px] bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
                                <span className="text-xl md:text-3xl text-gray-500">No images found or images pending</span>
                            </div>
                            <div className='w-full flex justify-between mb-3'>
                                <span className="text-sm md:text-lg pt-1 md:pt-5 lg:pt-2 xl:pt-4 text-foreground inline-flex h-100% items-center ml-4 w-text-prose">
                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" /> {projectInfo.date}
                                </span>
                                <Button onClick={toggleDarkMode} className="my-2 mb-0 mx-2 md:mx-0 shadow-md">
                                    {darkMode ? 'View Light Mode' : 'View Dark Mode'}
                                </Button>
                            </div>
                            <Separator />
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full flex flex-col p-4 pt-0 lg:w-[70%] mx-auto">
                <h2 className="text-2xl font-bold pb-1">Project Summary</h2>
                <Separator />
                <p className="text-base md:text-xl leading-7 mt-2">
                    {projectInfo.description}
                </p>
            </div>
            <div className='w-full flex justify-center  items-center p-4'>
                <div className="mx-auto w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-5 items-start lg:items-stretch">
                    <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 row-span-1">
                        <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold pb-1">Project Status / Outcome:</h3>
                            <Separator />
                            <ul className="text-lg p-4 md:pt-0  grow">
                                {projectInfo.results.map((item, index) => (
                                    <li key={index} className="text-base list-disc pt-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-1 row-span-1">
                        <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                            <h3 className="text-xl font-bold">Problem Statement</h3>
                            <Separator />
                            <p className="text-md md:text-lg md:pt-2 lg:pt-2 xl:pt-4 h-fit">{projectInfo.initialSituation}</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-1 row-span-1">
                        <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                            <h3 className="text-xl font-bold">Solution</h3>
                            <Separator />
                            <p className="text-md md:text-lg md:pt-2 lg:pt-2 xl:pt-4">{projectInfo.problemIdentification}</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-1 row-span-1">
                        <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                            <div>
                                <h3 className="font-semibold">Languages:</h3>
                                <p>{projectInfo.tech.languages.join(', ')}</p>
                            </div>
                            <div className="mt-2">
                                <h3 className="font-semibold">Frameworks:</h3>
                                <p>{projectInfo.tech.frameworks.join(', ')}</p>
                            </div>
                            <div className="mt-2">
                                <h3 className="font-semibold">Tools:</h3>
                                <p>{projectInfo.tech.tools.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-3 xl:col-span-2 row-span-1">
                        <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">Approach</h3>
                            <Separator />
                            <ul className="text-lg p-4 grow">
                                {projectInfo.implementation.map((item, index) => (
                                    <li key={index} className="text-base list-disc">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-3 lg:col-span-3 xl:col-span-1 row-span-1">
                        <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col h-full">
                            <h2 className="text-2xl font-bold ">Collaborators</h2>
                            <Separator className="mb-4" />
                            {projectInfo.collaborators.map((collaborator, index) => (
                                <div key={index} className="flex flex-col mb-4">
                                    <div className="flex items-center gap-2">
                                        <User className="h-6 w-6" />
                                        <span className="flex-grow">
                                            {collaborator.name}
                                        </span>
                                        {collaborator.profile && (
                                            <a href={collaborator.profile} target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="h-6 w-6" />
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-500 mt-1">
                                        {collaborator.role}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectView;
