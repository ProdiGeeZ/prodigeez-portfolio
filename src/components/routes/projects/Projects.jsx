import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <div className="w-screen h-full flex flex-col justify-center items-center p-10">
            <div className="flex w-full my-10 justify-center items-center flex-col">
                <h1 className="text-4xl font-bold decoration-1 underline underline-offset-4">Featured Projects</h1><br/>
                <h1 className="text-base">Hover over project titles for a short summary.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
                <ProjectCard
                    imageSrc="./northcoders.svg"
                    title="NC News"
                    hoverTitle="Full Stack - API & Front End Client"
                    description="News API that serves mock news including articles and comments. Client application built with React."
                    date="November 2023 - December 2023"
                    technologies={['node', 'react', 'express', 'postgres']}
                />
                <ProjectCard
                    imageSrc="./pairsniper.svg"
                    title="Pairsniper Analytics"
                    hoverTitle="Full Stack - API & Front End Client"
                    description="Cryptocurrency analytic tool with a self maintaining database. Pulls and formats live data from CoinMarketCap API."
                    date="January 2024 - Ongoing"
                    technologies={['node', 'react', 'express', 'postgres', 'supabase', 'MUI', 'Tailwind', 'Render']}
                />
                <ProjectCard
                    imageSrc="./squareup.svg"
                    title="Square Up"
                    hoverTitle="Full Stack - API & Front End Client"
                    description="Boardgame meet up app. Search for games events in your area. Host your own. Manage attendees."
                    date="December 2023 - January 2024"
                    technologies={['native', 'node', 'firebase', 'Kitten UI']}
                />
            </div>
        </div>
    )
}

export default Projects