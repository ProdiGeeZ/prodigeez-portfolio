import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useParams } from "react-router-dom";
import { projects } from "./projectInfo";

function ProjectView() {
    const { name } = useParams();

    const projectInfo = projects.find(project => project.name === name);

    if (!projectInfo) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <div className="w-full h-auto p-5">
                {projectInfo.images && projectInfo.images.length > 0 ? (
                    <Carousel>
                        <CarouselPrevious />
                        <CarouselContent>
                            {projectInfo.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext />
                    </Carousel>
                ) : (
                    <Card>
                        <CardContent>No images available</CardContent>
                    </Card>
                )}
                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold">{projectInfo.title}</h1>
                    <p className="text-base p-2">{projectInfo.description}</p>
                </div>
                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Initial Problem</h2>
                    <p className="text-base p-2">{projectInfo.initialSituation}</p>
                </div>
                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">Problem Identification</h2>
                    <p>{projectInfo.problemIdentification}</p>
                </div>
                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Solution Strategy</h2>
                    <p className="px-2 py-1">Technology Used: {projectInfo.solutionStrategy.technologyChoice}</p>
                    <p className="px-2 py-1">Development Approach: {projectInfo.solutionStrategy.developmentApproach}</p>
                    <p className="px-2 py-1">Data Handling: {projectInfo.solutionStrategy.dataHandling}</p>
                </div>

                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Implementation Details</h2>
                    <p className="px-2 py-1">{projectInfo.implementationDetails.Approach}</p>
                    <p className="px-2 py-1">Challenges: {projectInfo.implementationDetails.Challenges}</p>
                    <p className="px-2 py-1">Safety and Integrity: {projectInfo.implementationDetails.safetyAndIntegrity}</p>
                </div>

                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Outcome</h2>
                    <p className="px-2 py-1">{projectInfo.outcome}</p>
                </div>

                <div className="my-6 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">Reflections and Future Directions</h2>
                    <p className="px-2 py-1">{projectInfo.reflectionsAndFutureDirections}</p>
                </div>
            </div>
        </>
    );
}

export default ProjectView;
