import propTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import {Project} from "./Project";
import Projectform from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
    <div className="row">
      <ProjectCard project={projects} />
      <Projectform />
    </div>
    </>
  );
};

ProjectList.propTypes = {
  projects: propTypes.array,
};
export default ProjectList;
