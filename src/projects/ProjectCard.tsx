import { Project } from "./Project";

const ProjectCard = ({ project }: any) => {
  const handleEditClick = (projectBeingEdited: Project) => {
    console.log("Edit clicked", projectBeingEdited);
  };
  return (
    <>
      {project.map((project: any) => (
        <div key={project.id} className="cols-sm">
          <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{formatDescription(project.description)}</p>
              <p>Budget : £{project.budget.toLocaleString()}</p>
              <button onClick={()=>handleEditClick(project)} className="bordered">
                <span className="icon-edit "></span>
                Edit
              </button>
            </section>
          </div>
        </div>
      ))}
    </>
  );
};

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + "...";
};

interface ProjectCardProps {
  project: Project;
}
export default ProjectCard;
