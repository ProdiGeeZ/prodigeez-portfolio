/* eslint-disable react/prop-types */
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const ProjectCard = ({ imageSrc, title, description, date }) => {
    return (
        <Card className="w-[350px] hover:scale-105 transition ease-in-out duration-300 bg-[#0a0a0a]">
            <CardContent className="p-0">
                <div className="aspect-w-1 aspect-h-1">
                    <img src={imageSrc} alt={title} className="object-cover w-full h-full rounded-t-lg" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center p-4 bg-[#050505] rounded-b-lg">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link" className="text-xl text-foreground">{title}</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4 bg-white shadow-lg rounded-md">
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold">{title}</h4>
                            <p className="text-sm">{description}</p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-gray-500">{date}</span>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;