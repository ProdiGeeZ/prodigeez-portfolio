import { FaFileArrowDown } from "react-icons/fa6";

const Resume = () => {
    return (
        <>
            <html>
                <title>My CV</title>
                <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                        __html:
                            ' * {margin:0; padding:0; text-indent:0; }\n h1 { color: black; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 18.5pt; }\n h2 { color: black; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; }\n .s3 { color: #030303; font-family:"Inter", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s4 { color: #585858; font-family:"Inter", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8pt; }\n .p, p { color: #030303; font-family:"Inter", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; margin:0pt; }\n h3 { color: #07064A; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .h4, h4 { color: #07064A; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10.5pt; }\n .s7 { color: #030303; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt; }\n .s8 { color: #030303; font-family:"Inter", sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 9pt; }\n .s10 { color: #07064A; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt; }\n .s12 { color: #07064A; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10.5pt; }\n .s13 { color: black; font-family:"Inter", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; }\n .s14 { color: #030303; font-family:"Inter", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }\n li {display: block; }\n #l1 {padding-left: 0pt; }\n #l1> li>*:first-child:before {content: "o "; color: #030303; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 7.5pt; }\n li {display: block; }\n #l2 {padding-left: 0pt; }\n #l2> li>*:first-child:before {content: "- "; color: #030303; font-family:"Inter", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; }\n'
                    }}
                />
                <div style={{ height: '75rem', width: '51rem', padding: '3rem', backgroundColor: '#fff' }} className="container flex flex-col justify-center shadow-xl">
                    <a href="./cv.pdf" target="_blank" rel="noopener noreferrer">
                        <FaFileArrowDown color="#579774" className="absolute top-0 right-0 mt-10 mr-10 cursor-pointer" size={35} />
                    </a>
                    <h1
                        style={{
                            paddingTop: "4pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            textAlign: "center"
                        }}
                    >
                        Mohammed Saabir Ahmed
                    </h1>
                    <h2
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            textAlign: "center"
                        }}
                    >
                        Junior Software Engineer
                    </h2>
                    <p
                        className="s4"
                        style={{
                            paddingTop: "4pt",
                            paddingLeft: "10pt",
                            textIndent: "0pt",
                            textAlign: "center"
                        }}
                    >
                        <a
                            href="https://www.saabir.dev/"
                            style={{
                                color: "#030303",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                            target="_blank"
                        >
                            {" "}<u>Portfolio</u>{" "}
                        </a>
                        <a
                            href="https://github.com/ProdiGeeZ/be-nc-news"
                            style={{
                                color: "#030303",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                            target="_blank"
                        >
                            |{" "}<u>GitHub</u>{" "}
                        </a>

                        <a
                            href="https://www.linkedin.com/in/saabirahmed/"
                            style={{
                                color: "#030303",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                            target="_blank"
                        >
                            I{" "}<u>LinkedIn</u>
                        </a><br />
                        <span className="s3"
                            style={{
                                color: "#030303",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                        >07482 641368{" "}</span>
                        <a
                            href="mailto:saabirahmed@live.co.uk"
                            style={{
                                color: "#030303",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                textDecoration: "none",
                                fontSize: "10pt"
                            }}
                            target="_blank"
                        >
                            I{" "}saabirahmed@live.co.uk{" "}
                        </a>
                    </p>
                    <p
                        style={{
                            paddingTop: "4pt",
                            paddingLeft: "19pt",
                            textIndent: "0pt",
                            textAlign: "center"
                        }}
                    >
                        Manchester (Open to Relocation)
                    </p>
                    <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                    </p>
                    <p
                        style={{
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "1pt",
                            textAlign: "left"
                        }}
                    />
                    <p
                        style={{
                            paddingTop: "2pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "112%",
                            textAlign: "justify"
                        }}
                    >
                        Passionate about technology and creative practices, I studied Software
                        Engineering at Manchester Metropolitan University. My skills, furthered at
                        Northcoders bootcamp, blend with a creative background in photography and
                        videography. Seeking a development team role to enhance my software
                        engineering skills.
                    </p>
                    <h2
                        style={{
                            paddingTop: "5pt",
                            paddingBottom: "1pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left",
                            color: '#35346b',
                            textDecoration: 'underline 1px #35346b'
                        }}
                    >
                        <a name="bookmark0">‌</a>Technical <span className="h4">Skills</span>
                    </h2>
                    <p
                        style={{
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "1pt",
                            textAlign: "left"
                        }}
                    />
                    <ul id="l1">
                        <li data-list-text="o">
                            <p
                                className="s7"
                                style={{
                                    paddingTop: "5pt",
                                    paddingLeft: "19pt",
                                    textIndent: "-11pt",
                                    textAlign: "left"
                                }}
                            >
                                Languages:{" "}
                                <span className="p">C#, JavaScript, TypeScript, Node.js</span>
                            </p>
                        </li>
                        <li data-list-text="o">
                            <p
                                className="s7"
                                style={{ paddingLeft: "19pt", textIndent: "-11pt", textAlign: "left" }}
                            >
                                Testing:{" "}
                                <span className="p">
                                    Test Driven Development (TDD), Jest, Supertest
                                </span>
                            </p>
                        </li>
                        <li data-list-text="o">
                            <p
                                className="s7"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "19pt",
                                    textIndent: "-11pt",
                                    textAlign: "left"
                                }}
                            >
                                Back End Technologies:{" "}
                                <span className="p">
                                    Express.js, PSǪL, SǪL, Seeding, Migration, Database Optimisation
                                </span>
                            </p>
                        </li>
                        <li data-list-text="o">
                            <p
                                className="s7"
                                style={{ paddingLeft: "19pt", textIndent: "-11pt", textAlign: "left" }}
                            >
                                Front End Technologies:{" "}
                                <span className="p">
                                    HTML, CSS, React, Tailwind, Lighthouse Accessibility Tools
                                </span>
                            </p>
                        </li>
                        <li data-list-text="o">
                            <p
                                className="s7"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "19pt",
                                    textIndent: "-11pt",
                                    textAlign: "left"
                                }}
                            >
                                Hosting:{" "}
                                <span className="p">
                                    Cloudflare, Render, Netlify, Vercel, Supabase, Firebase
                                </span>
                            </p>
                        </li>
                        <li data-list-text="o">
                            <p
                                className="s7"
                                style={{
                                    paddingTop: "1pt",
                                    paddingLeft: "19pt",
                                    textIndent: "-11pt",
                                    textAlign: "left"
                                }}
                            >
                                Other Skills:{" "}
                                <span className="p">
                                    Paired Programming, Leadership, Project Management, Technical
                                    Communication, SDL, Agile and Scrum Methodologies
                                </span>
                            </p>
                        </li>
                    </ul>
                    <h2
                        style={{
                            paddingTop: "4pt",
                            paddingBottom: "1pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left",
                            color: '#35346b',
                            textDecoration: 'underline 1px #35346b'
                        }}
                    >
                        <a name="bookmark1">‌</a>Work Experience
                    </h2>
                    <p
                        style={{
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "1pt",
                            textAlign: "left"
                        }}
                    />
                    <h4
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Lead Junior Developer – (Long-Term Contract)
                    </h4>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        PairSniper, Manchester
                    </p>
                    <p
                        className="s8"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Jan 2024 <span style={{ color: "#1F1F1F" }}>- </span>Present
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "113%",
                            textAlign: "justify"
                        }}
                    >
                        Implemented a scalable REST API using Express, Node using TDD practices
                        alongside Jest Libraries. Developed complex algorithms to build self-
                        maintaining database which inserts, updates, and deletes cryptocurrency data
                        using cron functions that run periodically from every minute to daily.
                        Deployed a front-end client using React, MUI and Tailwind, which leverages
                        Supabase Real-Time to visualise the data live. Led a small team of three
                        juniors to complete project. Overseeing future development for private
                        client.
                    </p>
                    <h4
                        style={{
                            paddingTop: "4pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Trainee Full Stack Developer
                    </h4>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Northcoders, Manchester
                    </p>
                    <p
                        className="s8"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Oct 2023 <span style={{ color: "#1F1F1F" }}>– </span>Jan 2024
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "113%",
                            textAlign: "justify"
                        }}
                    >
                        Strengthened my full stack development skills at a dynamic bootcamp,
                        mastering tools such as Node, React, and Express. Built API’s and deployed
                        applications, while collaborating on in-depth projects that enhanced my
                        teamwork and adaptability in diverse development environments.
                    </p>
                    <h4
                        style={{
                            paddingTop: "4pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Pharmacy Assistant
                    </h4>
                    <p
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        AliPharma LTD, Manchester
                    </p>
                    <p
                        className="s8"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        Dec 2015 <span style={{ color: "#1F1F1F" }}>- </span>Present
                    </p>
                    <p
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "113%",
                            textAlign: "left"
                        }}
                    >
                        Manage prescriptions accurately, ensured safe medication dispensing with
                        adherence to pharmacy procedures. Using RX Management software to handle
                        prescriptions, maintaining medication inventory. Developed a proficiency in
                        customer service whilst working in a fast-paced team setting.
                    </p>
                    <h2
                        style={{
                            paddingTop: "6pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left",
                            color: '#35346b',
                            textDecoration: 'underline 1px #35346b'
                        }}
                    >
                        <a name="bookmark2">‌</a>Projects
                    </h2>
                    <p style={{ textIndent: "0pt", lineHeight: "1pt", textAlign: "left" }} />
                    <p
                        className="s10"
                        style={{
                            paddingTop: "3pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            textAlign: "left"
                        }}
                    >
                        SquareUp Boardgame Meetup Mobile App -{" "}
                        <span style={{ color: "#030303" }}>Group Project</span>
                    </p>
                    <ul id="l2">
                        <li data-list-text="-">
                            <p style={{ paddingLeft: "10pt", textIndent: "-4pt", textAlign: "left" }}>
                                Developed a cross-platform mobile app using React Native with Firebase
                                for user authentication and real-time database functionality.
                            </p>
                        </li>
                        <li data-list-text="-">
                            <p style={{ paddingLeft: "10pt", textIndent: "-4pt", textAlign: "left" }}>
                                Integrated Google Maps for event location and navigation.
                            </p>
                        </li>
                        <li data-list-text="-">
                            <p style={{ paddingLeft: "10pt", textIndent: "-4pt", textAlign: "left" }}>
                                Adopted an agile environment, emphasising iterative development and
                                continuous feedback.
                            </p>
                        </li>
                        <li data-list-text="-">
                            <p style={{ paddingLeft: "10pt", textIndent: "-4pt", textAlign: "left" }}>
                                Implemented an in-app chat feature to facilitate user communication.
                            </p>
                        </li>
                    </ul>
                    <p
                        className="s10"
                        style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
                    >
                        News API Application <span className="s12">- </span>
                        <span style={{ color: "#030303" }}>Solo Project</span>
                    </p>
                    <p
                        className="s13"
                        style={{
                            paddingTop: "1pt",
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "115%",
                            textAlign: "justify"
                        }}
                    >
                        Developed a robust API from scratch using Node.js, Express.js, and
                        PostgreSǪL. Employed TDD practices with Jest and Supertest to ensure
                        functionality and reliability. The project, hosted with Render and utilizing
                        ElephantSǪL for production, received approval from Northcoders mentors and
                        is managed on GitHub. Deployed a user-interactive news API application on
                        Vercel, employing React for the frontend. Prioritized UI planning and
                        architecture to mitigate development delays. Features user engagement with
                        comments, voting, and content navigation.
                    </p>
                    <h2 style={{
                        paddingTop: "4pt",
                        paddingBottom: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        textAlign: "left",
                        color: '#35346b',
                        textDecoration: 'underline 1px #35346b'
                    }}>
                        <a name="bookmark3">‌</a>Education
                    </h2>
                    <p style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "1pt",
                        textAlign: "left"
                    }}>
                        <br />
                    </p>
                    <h4 style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}>
                        Computer Software Engineering
                    </h4>
                    <p style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        textAlign: "left",
                    }}>
                        <b>Manchester Metropolitan University</b> <i>- (Sep 2018 - May 2022)</i>
                    </p>
                    <p style={{
                        paddingBottom: "6pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        textAlign: "left"
                    }}>
                        Bachelor’s Degree (BEng) - Upper 2nd Class Honours<br />
                        <span className="h4">Computer Software Engineering</span><br />
                        <b>Bolton University</b> - <i>(Oct 2017 - May 2018)</i><br />
                        Foundation Degree - Upper 2nd Class Honours
                    </p>
                </div>
            </html>
        </>
    );
};

export default Resume;