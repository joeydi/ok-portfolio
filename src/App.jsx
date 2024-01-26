import logo from "./images/logo.svg";
import "./styles/typekit.css";
import "./styles/main.scss";

const projects = [
    {
        image: "/rigorous.png",
        name: "Rigorous Technology",
        description: "",
        link: "https://rgs-web.vercel.app/",
    },
    {
        image: "/distefanolandscaping.png",
        name: "di Stefano Landscaping",
        description: "",
        link: "https://distefanolandscaping.com/",
    },
    {
        image: "/americanplatingpower.png",
        name: "American Plating Power",
        description: "",
        link: "https://app-comps.netlify.app/",
    },
    {
        image: "/colcap.png",
        name: "Columbia Capital",
        description: "",
        link: "https://colcap.com/",
    },
    {
        image: "/inspace.png",
        name: "InSpace",
        description: "",
        link: "https://inspace.chat/",
    },
    {
        image: "/phxinjurylaw.png",
        name: "Phoenix Accident and Injury Law Firm",
        description: "",
        link: "https://phxinjurylaw.com/",
    },
    {
        image: "/mastcamz.png",
        name: "NASA Mastcam-Z",
        description: "",
        link: "https://mastcamz.asu.edu/",
    },
    {
        image: "/adelantehealthcare.png",
        name: "Adelante Healthcare",
        description: "",
        link: "https://adelantehealthcare.com/",
    },
    {
        image: "/prcno.png",
        name: "Preservation Resource Center of New Orleans",
        description: "",
        link: "https://prcnostg.wpengine.com/",
    },
    {
        image: "/wildflowerbread.png",
        name: "Wildflower Bread Company",
        description: "",
        link: "https://wildflowerbread.com/",
    },
    {
        image: "/10across.png",
        name: "ASU Ten Across",
        description: "",
        link: "https://10across.com/",
    },
    {
        image: "/nyutov.png",
        name: "NYU Technology Opportunities & Ventures",
        description: "",
        link: "https://tov.med.nyu.edu/",
    },
];

function App() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <img src={logo} width="133" height="30" alt="Okay Plus logo" />
                        <a href="mailto:joeydi@okaypl.us" target="_blank">
                            <span class="d-none d-sm-block">Get In Touch</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <section className="hero text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <h1>
                                    Elevating startups, small businesses, and{" "}
                                    <span style={{ textWrap: "nowrap" }}>non-profits</span> to new heights with 15 years of design
                                    and development expertise.
                                </h1>
                                <p>
                                    Delivering good ideas, responsive design, and clean code to meet the needs of creative
                                    directors, marketers, and business owners.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="container">
                        <div className="row gy-4">
                            {projects.map((project, i) => {
                                return (
                                    <div className="col-sm-6 col-md-4" key={i}>
                                        <a className="project" href={project.link} target="_blank">
                                            <img class="mb-3" src={project.image} alt="" />
                                            <div>
                                                <h2>{project.name}</h2>
                                                <p>{project.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
