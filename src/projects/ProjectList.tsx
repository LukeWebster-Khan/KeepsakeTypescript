import { Project } from './Project';
import ProjectCard from './ProjectCard';
import Projectform from './ProjectForm';
import {useState} from 'react';
interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList ({ projects, onSave}: ProjectListProps) {
  const [projectBeingEdited, setprojectBeingEdited ] = useState({})
  const cancelEditing = () => {
   setprojectBeingEdited({})
  }
  const handleEdit = (project: Project) => {
    setprojectBeingEdited(project);
    console.log(projectBeingEdited)
  };
    const items = projects.map(project => (
      <div key={project.id} className="cols-sm">
        {project === projectBeingEdited ?
      <Projectform
        onSave={onSave}
        onCancel={cancelEditing}></Projectform>
      :
      <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
        }
      </div>
    ));
    return <div className="row">{items}</div>;

}

export default ProjectList;