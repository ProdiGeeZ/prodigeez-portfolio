export const projects = [
    {
        "name": "pairsniper",
        "title": "PairSniper Analytics",
        "description": "PairSniper is a customised trading analytics platform that automates data aggregation from market exchanges. It visualises real-time data to help users focus on strategy and capitalise on opportunities efficiently. Designed for scalability, it initially catered to a specific client's trading strategy.",
        "initialSituation": "The client had a unique trading strategy which proved successful. However, it was labor-intensive and prone to errors, leading to missed trading opportunities.",
        "problemIdentification": "There was a need for an automated system that could handle complex data-handling and ensure fast, accurate data retrieval for effective trading strategy execution.",
        date: "Jan 2024 - Ongoing",
        "tech": {
            "languages": [
                "JavaScript",
                "SQL"
            ],
            "frameworks": [
                "React",
                "Tailwind",
                "Express",
                "Node",
                "Jest"
            ],
            "tools": [
                "Supabase",
                "Vercel",
                "Postgres",
                "Render",
                "Figma",
                "Excalidraw",
                "PhotoShop",
                "Todoist"
            ]
        },
        implementation: [
            "Implemented Agile methodologies and utilised a Kanban system for efficient task tracking.",
            "Developed wireframes using Figma/Excalidraw, refining UI and schema as needed.",
            "Initially used Node.js, Express, PostgreSQL, React, ElephantSQL, and Firebase, later transitioning to Supabase for enhanced scalability.",
            "Started with Binance API, later migrated to CoinMarketCap API for improved scalability, reliance, and increased data coverage.",
            "Tested system's handling of complex datasets using live API data by building a seed generation function."
        ],
        "results": [
            "Developed a scalable REST API using Express and Node, with TDD practices via the Jest library. ",
            "Implemented a self-maintaining database with Supabase that updates in real-time and pulls market data every 60 seconds, using hosted cron functions for maintenance and updates.",
            "Built a responsive front-end with React, MUI, and Tailwind, leveraging Supabase’s Real-Time feature for low-latency updates.",
            " This solution significantly reduces manual labor and increases trading opportunities for the private client."
        ],
        "reflectionsAndFutureDirections": [
            "Plan to improve cron job efficiency and database operations to boost system scalability.",
            "Aim to optimize data cleaning processes for enhanced performance."
        ],
        "images": {
            dark: [
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/1.jpg?t=2024-04-17T19%3A55%3A41.279Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/2.jpg?t=2024-04-17T19%3A57%3A17.072Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/3.jpg?t=2024-04-17T19%3A57%3A36.386Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/4.jpg",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/m.jpg?t=2024-04-17T19%3A57%3A52.221Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/s.jpg?t=2024-04-17T19%3A58%3A29.604Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets-dark/v.jpg?t=2024-04-17T19%3A58%3A36.822Z"
            ],
            light: [
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/1.jpg?t=2024-04-17T19%3A59%3A27.481Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/2.jpg?t=2024-04-17T20%3A00%3A22.790Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/3.jpg?t=2024-04-17T20%3A00%3A27.641Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/4.jpg?t=2024-04-17T20%3A00%3A32.782Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/m.jpg?t=2024-04-17T20%3A00%3A38.029Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/s.jpg?t=2024-04-17T20%3A00%3A48.090Z",
                "https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/assets/v.jpg?t=2024-04-17T20%3A00%3A52.703Z"
            ]
        },
        "githubLinks": [
            "https://github.com/prodigeez",
            "https://github.com/kylexpowis",
            "https://github.com/orgs/Kaizen-Development/people/imaa04"
        ],
        "collaborators": [
            {
                "name": "Kyle Powis",
                "role": "Project Manager, Developer",
                "profile": "https://github.com/kylexpowis"
            },
            {
                "name": "Ima Khan",
                "role": "Developer",
                "profile": "https://github.com/imaa04"
            }
        ],
        "linkToSite": "Pending, Demo site under development",
        "videoLink": ""
    },
    {
        name: "nc-news",
        title: "Northcoders News",
        description: "Northcoders News API is a backend service akin to those underpinning websites like Reddit. It allows programmatic access to application data, enabling the frontend to display information such as articles, topics, and user comments. The API is built using a PSQL database and interacts with it through node-postgres.",
        initialSituation: "The need was for a backend solution capable of serving data to a content rating and discussion platform. The focus was on a service that could reliably serve up information as and when needed by the frontend. A a web-based front end client which utilises this api to load content dynamically",
        problemIdentification: "A robust and scalable API was required that could manage and deliver structured content to a web application, facilitating user interactions such as content rating and discussions.",
        date: "Dec 2023 - Jan 2024",
        tech: {
            languages: [
                "JavaScript",
                "SQL"
            ],
            frameworks: [
                "Express",
                "Node",
                "React",
            ],
            tools: [
                "Postgres",
                "Husky",
                "Render",
                "ElephantSQL",
                "Vercel",
                "Excalidraw"
            ]
        },
        implementation: [
            "Adopted Git for version control, branching off for each new ticket. Pull requests reviewed by experienced mentors at bootcamp.",
            "Constructed a RESTful API to handle CRUD operations on articles, topics, and user comments.",
            "Enabled data retrieval and manipulation via specifically designed endpoints, ensuring REST standards are met.",
            "Incorporated automated testing to validate endpoint functionality before code commits.",
            "Utilised Husky to set up pre-commit hooks, preventing commits of failing code."
        ],
        results: [
            "Successfully implemented a series of endpoints enabling data interaction for a social news aggregation platform.",
            "Built front end client using React framework, implementing API endpoints to respective routes and styled with MUI.",
            "Ensured endpoint robustness using TDD with Jest libraries."
        ],
        reflectionsAndFutureDirections: [
            "Plans to refine database queries for optimised performance.",
            "Consideration of additional endpoints for extended functionality based on user feedback."
        ],
        images: {
            dark: [],
            light: []
        },
        githubLinks: [
            { "API": "https://github.com/ProdiGeeZ/be-nc-news" },
            { "frontEnd": "https://github.com/ProdiGeeZ/nc-news-react" }
        ],
        collaborators: [
            {
                name: "Solo Project",
                role: "",
                profile: ""
            }
        ],
        linkToSite: "",
        videoLink: ""
    },
    {
        name: "square-up",
        title: "Northcoders Final Group Project - SquareUp",
        description: "SquareUp is a mobile app designed to connect board game enthusiasts. It allows users to join and host events, instant message others, discover new games, and find events nearby on a map. The app was developed as a final group project at Northcoders, embracing new technologies and agile methodologies.",
        initialSituation: "Board game enthusiasts often struggle to find like-minded individuals and events nearby. There was a clear need for a platform to easily connect users, manage event participation, and foster community engagement.",
        problemIdentification: "A mobile platform was needed that could provide a robust solution for event management, user connectivity, and game discovery, all integrated within an easy-to-use mobile interface.",
        date: "Dec 2023 - Jan 2024",
        tech: {
            languages: [
                "JavaScript"
            ],
            frameworks: [
                "React Native",
                "Node"
            ],
            tools: [
                "Firebase Authentication",
                "Firestore",
                "Expo",
                "Google Maps"
            ]
        },
        implementation: [
            "Utilised React Native to develop a cross-platform mobile application.",
            "Integrated Firebase for authentication and real-time database solutions.",
            "Implemented Google Maps for locating events and guiding users to event locations.",
            "Adopted an agile working environment, utilising best industry practices and focusing on iterative development and feedback.",
            "In app chat system to allow communication between users"
        ],
        results: [
            "Successfully launched a mobile app that enhances connectivity among board game enthusiasts.",
            "Enabled real-time event creation and participation, supported by Firebase and Google Maps.",
            "Provided a platform for instant messaging and game discovery, improving user engagement and satisfaction."
        ],
        reflectionsAndFutureDirections: [
            "Plans to expand the app's functionality with more personalized event suggestions based on user preferences.",
            "Consider implementing enhanced security measures and user verification to ensure a safe community environment."
        ],
        images: {
            dark: [],
            light: []
        },
        githubLinks: [
            { "API": "https://github.com/magnificent-angels/square-up" }
        ],
        collaborators: [
            {
                name: "Northcoders Team",
                role: "Developers",
                profile: ""
            }
        ],
        linkToSite: "",
        videoLink: ""
    }
];