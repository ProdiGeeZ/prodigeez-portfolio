export const projects = [
    {
        name: "pairsniper",
        title: "PairSniper",
        description: "PairSniper is an advanced trading analytics platform which was custom-built for a private client. It automates complex calculations which were previously performed by the client himself manually. The application uses real-time data from market exchanges and provides a visual display of the results through the website. This allows the client to capitalise on more opportunities as the time lost from calculating is automated, giving him more time to focus on evaluating potential trades. ",
        images: [],
        githubLink: [
            "https://github.com/prodigeez",
            "https://github.com/kylexpowis",
            "https://github.com/orgs/Kaizen-Development/people/imaa04"
        ],
        collaborators: [
            {
                name: "Saabir",
                role: "Lead Developer"
            },
            {
                name: "Kyle Powis",
                role: "Project Manager, Developer",
                profile: "https://github.com/kylexpowis",
            },
            {
                name: "Ima Khan",
                role: "Developer"
            }
        ],
        linkToSite: "Pending, demo under development",
        videoLink: "",
        initialSituation: "The client had developed a unique and successful trading strategy, which proved successful in his trading activities. However, the manual process of calculations was time-consuming and error-prone, often leading to missed opportunities. The client's requirement was clear: 'I want to trade without looking at a graph.'",
        "problemIdentification": "The client needed a system that could automate these complex calculations and handle fast, accurate data fetching to streamline trading strategy implementation.",
        solutionStrategy: {
            "technologyChoice": "The project started with the Binance API but switched to the CoinMarketCap API to access a more comprehensive dataset. Technologies utilised included Node.js, Express, PostgreSQL, React, and Supabase.",
            "developmentApproach": "The team adopted an iterative development process, producing several MVPs that evolved based on continuous real-time testing and client feedback. This approach led to a refined beta version, optimizing both functionality and user experience.",
            "dataHandling": "Data handling challenges were addressed through scheduled cron jobs for regular data maintenance, ensuring continuous synchronization with live market data and the database’s accuracy."
        },
        implementationDetails: {
            Approach: "We initially used the Binance API to fetch data but later switched to the CoinMarketCap API for a more comprehensive dataset. The development stack included Node.js, Express, PostgreSQL, and React, transitioning to Supabase for enhanced real-time capabilities and data management. By adopting Agile methodology, our team could stay flexible and responsive to the client’s feedback and evolving needs. We employed a Kanban system using Todoist to manage tasks effectively. This tool helped us visualise our workflow, track progress, and manage tickets efficiently, ensuring all team members were aligned and could collaborate effectively. In the planning phase, we drew algorithms for the cron jobs essential for database updates and designed wireframes using Figma and Excalidraw to visualize the application’s UI and endpoint structures. To ensure our tests were effective, we used live data from APIs instead of mock data, because of the complexity of the dataset. The project went through a series of iterative cycles, producing multiple versions that were refined based on continuous client feedback and real-time testing. This process brought the system to a beta version, significantly enhancing functionality and user experience.",
            Challenges: "We addressed data management challenges by implementing cron jobs that maintained data accuracy and timeliness. The cron jobs were hosted separately from the main API to reduce the load and ensure rapid data synchronisation, achieving updates within 60 seconds to mirror real-time market changes accurately.",
            "safetyAndIntegrity": "The application's security and data integrity are handled with robust authentication measures and real-time updates via Supabase."
        },
        outcome: "By decoupling data fetching from backend operations, we optimised performance and significantly cut operational costs. The automation significantly improved data processing speed and accuracy, reducing update times from 10 minutes in our first version, to under 5 minutes in our second, and eventually to just 60 seconds in the final MVP. These improvements enabled the client to make faster, more informed decisions, maximising the effectiveness of their trading strategy.",
        reflectionsAndFutureDirections: "The team plans to continue improving data handling and scalability, including enhancing cron job efficiency and refining database operations to manage increasing data volumes. Continuous adjustments will be made to improve data cleaning processes and overall performance. Although Supabase provides a direct API for database interactions, we built a standalone API to potentially scale into a suite of applications for different future use cases. We are still actively developing and maintaining the project as the client plans further enhancements."
    },
    {
        title: '',
        description: '',
        images: [],
        githubLink: '',
        collaborators: [],
        linkToSite: '',
        videoLink: '',
        initialSituation: '',
        problemIdentification: '',
        solutionStrategy: {
            technologyChoice: '',
            developmentApproach: '',
            dataHandling: ''
        },
        implementationDetails: {
            frontendAndBackendRoles: '',
            safetyAndIntegrity: ''
        },
        outcome: '',
        reflectionsAndFutureDirections: ''
    },
    {
        title: '',
        description: '',
        images: [],
        githubLink: '',
        collaborators: [],
        linkToSite: '',
        videoLink: '',
        initialSituation: '',
        problemIdentification: '',
        solutionStrategy: {
            technologyChoice: '',
            developmentApproach: '',
            dataHandling: ''
        },
        implementationDetails: {
            frontendAndBackendRoles: '',
            safetyAndIntegrity: ''
        },
        outcome: '',
        reflectionsAndFutureDirections: ''
    },
];