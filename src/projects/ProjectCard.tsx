import {Project} from './Project';

const ProjectCard = ({ project }: any) => {
    return(
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
            </section>
          </div>
        </div>
      ))}
        </>
    )
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
  }

interface ProjectCardProps {
    project: Project;
}
export default ProjectCard