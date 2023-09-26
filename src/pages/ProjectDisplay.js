import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project_image"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Deployment Link:</b> {project.link?<a href={project.link} rel="noreferrer" target="_blank">{project.link}</a>:project.issue}
      </p>
      <a href={project.source} rel="noreferrer" target="_blank"><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;