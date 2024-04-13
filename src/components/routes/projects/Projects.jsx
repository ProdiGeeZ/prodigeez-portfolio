import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <div className="w-screen h-full flex flex-col justify-center items-center p-10">
            <div className="flex w-full my-10 justify-center">
                <h1 className="text-3xl font-bold">My Best Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
                <ProjectCard
                    imageSrc="https://i.pinimg.com/originals/9b/d5/69/9bd5699245c1a55ceee00fc5db7f66dd.png"
                    title="PairSniper"
                    description="Cryptocurrency analytic tool with a self maintaining database. Pulls and formats live data from CoinMarketCap API."
                    date="January 2024 - Ongoing"
                />
                <ProjectCard
                    imageSrc="https://i.pinimg.com/originals/9b/d5/69/9bd5699245c1a55ceee00fc5db7f66dd.png"
                    title="NC News"
                    description="News API "
                    date="November 2023 - December 2023"
                />
                <ProjectCard
                    imageSrc="https://i.pinimg.com/originals/9b/d5/69/9bd5699245c1a55ceee00fc5db7f66dd.png"
                    title="Square Up"
                    description="Boardgame meet up app. Search for games events in your area. Host your own. Manage attendees."
                    date="December 2023 - January 2024"
                />
            </div>
        </div>
    )
}

export default Projects