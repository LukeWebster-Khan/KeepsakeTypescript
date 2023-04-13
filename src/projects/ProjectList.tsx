import propTypes from "prop-types";
// import Project from './MockProjects'

const ProjectList = ({ projects }: any) => {
  return (
    <>
    <div className="row">
     {projects.map((project: any) => (
        <div key={project.id} className="cols-sm">
          <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{project.description}</p>
              <p>Budget : £{project.budget.toLocaleString()}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

ProjectList.propTypes = {
  projects: propTypes.array,
};
export default ProjectList;
