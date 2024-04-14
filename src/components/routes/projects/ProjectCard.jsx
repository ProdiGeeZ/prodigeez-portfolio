/* eslint-disable react/prop-types */
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Info } from 'lucide-react';
import { Link } from "react-router-dom";


const ProjectCard = ({ imageSrc, title, hoverTitle, description, date, technologies, name }) => {
    return (
        <Card className="w-[350px] hover:scale-105 transition ease-in-out duration-500 hover:ring-2 hover:ring-emerald-500 ring-opacity-15 shadow-md hover:shadow-xl">
            <CardContent className="p-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <Link to={`/projects/${name}`}>
                        <img src={imageSrc}
                            alt={title}
                            className="object-cover w-full h-full rounded-t-lg"
                        />
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center p-4 rounded-b-lg">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <span className="inline-flex items-center h-10 space-x-2">
                            <span className="text-xl text-foreground pl-3"><Link to={`/projects/${name}`}>{title}</Link></span>
                            <Button variant="text" className="text-xl text-foreground p-0">
                                <Info size="14px" color="grey" />
                            </Button>
                        </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4 shadow-lg rounded-md opacity-90">
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold">{hoverTitle || title}</h4>
                            <p className="text-sm">{description}</p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-gray-500">{date}</span>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <div className="flex flex-wrap mt-2 px-2 h-auto">
                    {technologies.map((tech, index) => {
                        return (
                            <Badge key={index} className="bg-gradient-to-br from-emerald-200 to-emerald-100 border border-emerald-300/50 hover:bg-[#1cff7b]/80 text-[#008d3b]/90 dark:bg-[#4aff95]/50 dark:text-[#008d3b]/90 m-1 hover:dark:bg-[#3bc775]/80 dark:border-none shadow-md hover:shadow-lg backdrop-blur-sm hover:backdrop-blur-md transition-all ease-in-out duration-500">
                                {tech}
                            </Badge>
                        )
                    })}
                </div>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
