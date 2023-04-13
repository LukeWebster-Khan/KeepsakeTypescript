import { Project } from './Project';
import ProjectCard from './ProjectCard';
import Projectform from './ProjectForm';
import {useState} from 'react';
interface ProjectListProps {
  projects: Project[];
}

function ProjectList ({ projects }: ProjectListProps) {
  const [projectBeingEdited, setprojectBeingEdited ] = useState({})
  const handleEdit = (project: Project) => {
    setprojectBeingEdited(project);
    console.log(projectBeingEdited)
  };
    const items = projects.map(project => (
      <div key={project.id} className="cols-sm">
        {project === projectBeingEdited ?
      <Projectform></Projectform>
      :
      <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
        }
      </div>
    ));
    return <div className="row">{items}</div>;

}

export default ProjectList;