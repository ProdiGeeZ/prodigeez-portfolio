/* eslint-disable react/prop-types */
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";


const ProjectCard = ({ imageSrc, title, hoverTitle, description, date, technologies }) => {
    return (
        <Card className="w-[350px] hover:scale-105 transition ease-in-out duration-500 hover:ring-2 ring-foreground ring-opacity-15 shadow-md hover:shadow-xl">
            <CardContent className="p-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <img src={imageSrc}
                        alt={title}
                        className="object-cover w-full h-full rounded-t-lg" 
                        />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center p-4 rounded-b-lg">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="text" className="text-xl text-foreground">{title}</Button>
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
                            <Badge key={index} className="bg-[#169c4e96] hover:bg-[#2f8854a8] dark:bg-[#3aff8c50] dark:text-foreground border-[#08fc6e83] dark:border-[#3aff8c57] m-1 hover:dark:bg-[#3bc775a8]">
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
