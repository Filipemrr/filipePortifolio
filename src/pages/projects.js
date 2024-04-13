import Footer from "../components/footer";
import React, {useState} from "react";
import {Grid, useMediaQuery} from "@mui/material";
import Modal from "../components/modalToShowProject";
import NavBar from "../components/Navbar";
import {useLocation, useNavigate} from "react-router-dom";
const projects = [
    {
        id: 2,
        articleTitle: "Online Class: a Fullstack SaaS using AI",
        filePath: "onlineClassArticle",
    },
    {id:3, articleTitle: 'Getting started with AI integrations', filePath:'AIGetStartArticle'},
    //{id:4, articleTitle: 'Fake Progress Bar: A Tool for Increasing Video Watch Time', filePath:'progressBarArticle'}
];
function ProjectsView() {
    const isSmallScreen = useMediaQuery("(min-width: 700px)");
    const [activeProject, setActiveProject] = useState(null);

    const openModal = (project) => {
        setActiveProject(project);
    };

    const closeModal = () => {
        setActiveProject(null);
    };

    return (
        <Grid
            item
            md={7}
            sx={{
                width: isSmallScreen ? "100%" : "75%",
                height: "55vh",
                mt: isSmallScreen ? "0" : "15%",
            }}
        >
            <Grid
                item
                className="window"
                sx={{ width: "100%", height: "100%", overflowY: "scroll" }}
            >
                <NavBar />
                <h4 style={{ paddingLeft: "15px" }}>Blog Posts</h4>
                <Grid
                    container
                    direction="column"
                    className={"projects-table"}
                    sx={{ alignItems: "center" }}
                >
                    {projects.map((project) => (
                        <Grid item sx={{ width: "80%" }} key={project.id}>
                            <button
                                onClick={() => openModal(project)}
                                style={{
                                    width: "100%",
                                    height: "50px",
                                    marginBottom: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    cursor: "pointer",
                                }}
                            >
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        fontFamily: "'MS Sans Serif', 'Arial', sans-serif",
                                        fontSize: "13px",
                                    }}
                                >
                                    {project.articleTitle}
                                </p>
                                <span style={{ fontSize: "24px" }}>&rarr;</span>
                            </button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Modal
                isOpen={activeProject !== null}
                onClose={closeModal}
                filePath={activeProject?.filePath}
            >
                <h2>{activeProject?.articleTitle}</h2>
                <p>Details about the project...</p>
            </Modal>
        </Grid>
    );
}
function FakeDesktopBg() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Grid
                container
                md={12}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    position: "relative",
                    flexGrow: 1,
                    backgroundColor: "#008080",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px",
                    }}
                >
                    <img
                        src={
                            "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_small-4.png"
                        }
                        alt="Projects Folder"
                        style={{ width: "50px", height: "50px", cursor: "pointer" }}

                    />
                    <subtitle style={{ color: "#fdffff", cursor: "pointer" }}>
                        Projects
                    </subtitle>
                    <img
                        src={
                            "https://win98icons.alexmeub.com/icons/png/write_wordpad-1.png"
                        }
                        alt="About Me Folder"
                        style={{
                            width: "40px",
                            height: "40px",
                            paddingTop: "8px",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(`/`)}
                    />
                    <subtitle style={{ color: "#fdffff", cursor: "pointer" }}>
                        About Me
                    </subtitle>
                </div>
                {<ProjectsView />}
            </Grid>
            <Footer />
        </div>
    );
}

export default function Projects() {
    return (
        <FakeDesktopBg>
            <Footer />
        </FakeDesktopBg>
    );
}