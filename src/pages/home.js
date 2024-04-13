import React, { useEffect, useState } from "react";
import "98.css";
import { Grid, useMediaQuery } from "@mui/material";
import { aboutMeEn } from "./data";
import "./style.css";
import profilePic from "./img.png";
import Footer from "../components/footer";
import Modal from "../components/modalToShowProject";

const projects = [
  {
      id: 2,
      articleTitle: "Online Class: a Fullstack SaaS using AI",
      filePath: "onlineClassArticle",
  },
  {id:3, articleTitle: 'Getting started with AI integrations', filePath:'AIGetStartArticle'},
  //{id:4, articleTitle: 'Fake Progress Bar: A Tool for Increasing Video Watch Time', filePath:'progressBarArticle'}
];

function NavBar({text}) {
    return (
        <Grid item md={12} className="title-bar">
            <div className="title-bar-text">{text}</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </Grid>
    );
}
function ProfileInfo() {
  const isSmallScreen = useMediaQuery("(min-width: 700px)");
  return (
    <Grid
      item
      md={3.5}
      xs={12}
      className="window-body"
      sx={{ height: "25vh", pl: isSmallScreen ? "0" : "9%" }}
    >
      <Grid
        item
        md={12}
        xs={5}
        sx={{
          height: isSmallScreen ? "20vh" : "15vh",
          padding: isSmallScreen ? "20px" : "20px 0px 20px 0px",
        }}
      >
        <fieldset className="fieldSet-profilePic">
          <img
            src={profilePic}
            alt="Profile Pic"
            style={{
              width: isSmallScreen ? "100%" : "100%",
              height: isSmallScreen ? "100%" : "100%",
              display: "block",
            }}
          />
        </fieldset>
      </Grid>
      <Grid item md={3} xs={10} sx={{ pl: isSmallScreen ? "20px" : "0px" }}>
          <fieldset>
              <legend className="bold-legend">Backend Developer</legend>
              <p>
                  <strong>Name: </strong> Filipe Raposo
              </p>
              <p>
                  <strong>Contact me: </strong>
              </p>
              <div style={{color: "#010081", marginBottom: "10px"}}>
                  <a
                      href="https://www.linkedin.com/in/filipe-raposo-a28735256/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Linkedln
                  </a>
              </div>
              <div style={{color: "#010081", marginBottom: "10px"}}>
                  <a
                      href="mailto:contact.filipemr@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      contact.filipemr@gmail.com
                  </a>
              </div>
              <p>
                  <strong>Projects: </strong>
              </p>
              <div style={{color: "#010081", marginBottom: "10px"}}>
                  <a
                      href="https://github.com/Filipemrr"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Github
                  </a>
              </div>
          </fieldset>
      </Grid>
    </Grid>
  );
}

function AboutMe() {
    const isSmallScreen = useMediaQuery("(min-width: 700px)");
    const lines = aboutMeEn.split("\n").map((line, index) => (
        <p
            key={index}
            style={{
                fontWeight: "light",
                fontFamily: "'MS Sans Serif', 'Arial', sans-serif",
            }}
        >
            {line}
        </p>
    ));
    return (
    <Grid
      item
      md={7}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: isSmallScreen ? "25px" : "55%",
        paddingBottom: "20px",
      }}
    >
      <fieldset
        className="aboutMe-fieldSet"
        style={{
          fontSize: "18px",
          overflowY: "scroll",
          maxHeight: "500px",
          maxWidth: isSmallScreen ? "100%" : "75%",
          textAlign: "left",
          margin: "0 auto",
          padding: "2px 15px",
        }}
      >
        <legend className="bold-legend">About Me</legend>
        {lines}
      </fieldset>
    </Grid>
  );
}





function AboutMeView() {
  const isSmallScreen = useMediaQuery("(min-width: 700px)");
  return (
    <Grid
      item
      md={7}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "100%", height: "70vh", pt: isSmallScreen ? '5%' : '50%', pb:'3%' }}
    >
      <Grid
        item
        className="window"
        sx={{
          width: isSmallScreen ? "100%" : "75%",
          height: isSmallScreen ? "67vh" : '50vh',
          overflowX: "scroll",
        }}
      >
        <Grid
          item
          md={12}
          className="title-bar"
          sx={{
            position: "sticky",
            top: -3,
            zIndex: 0,
          }}
        >
          <NavBar text={'Filipe Raposo - Profile'} />
        </Grid>
        <Grid container className={"content"}>
          <ProfileInfo />
          <AboutMe />
        </Grid>
      </Grid>
    </Grid>
  );
}
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
        height: "60vh",
          mt: isSmallScreen ? "0%" : "40%", pt:'5%', pb:'3%'
      }}
    >
      <Grid
        item
        className="window"
        sx={{ width: "100%", height: "100%", overflowY: "scroll" }}
      >
        <NavBar text={'Filipe Raposo - Profile'}/>
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
function LatestBlogPosts({ setView }) {
    return (
        <Grid item md={7} className="window-body" onClick={() => setView("ProjectsView")}>
            <Grid item md={5} sx={{ height: "25vh", pl: "20px" }}>

                <div className={'window'}>
                    <Grid
                        item
                        md={12}
                        className="title-bar"
                        sx={{
                            position: "sticky",
                            top: -3,
                            zIndex: 0,
                        }}
                    >
                        <NavBar text={'Latest Articles'}/>
                    </Grid>

                    {projects.map((project) => (
                        <Grid item key={project.id} sx={{ width: "100%", height: "70%" , padding: '5px'}}>

                            <div style={{color: "#010081", marginBottom: "10px"}}>
                                <a href="" onClick={(e) => e.preventDefault()} target="_blank"
                                   rel="noopener noreferrer">
                                    {project.articleTitle}
                                </a>
                            </div>
                        </Grid>
                    ))}
                </div>
            </Grid>
        </Grid>
    );
}


function FakeDesktopBg({viewPreference: boolean}) {

  const [view, setView] = useState("AboutMe");

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
            onClick={() => setView("Projects")}
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
            onClick={() => setView("AboutMe")}
          />
          <subtitle style={{ color: "#fdffff", cursor: "pointer" }}>
            About Me
          </subtitle>
        </div>
          {view === "AboutMe" ? <AboutMeView /> : <ProjectsView />}
          <LatestBlogPosts setView={setView} />
      </Grid>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <FakeDesktopBg>
      <Footer />
    </FakeDesktopBg>
  );
}

export default Home;
