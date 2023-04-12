import propTypes from 'prop-types';

const ProjectList = ({projects}: any) => {
    return(
        <>
        {/* <pre>
        {JSON.stringify(projects, null, '\t')}
        </pre> */}
        <ul>
            {projects.map((project : any) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
        </>
    );
}

ProjectList.propTypes = {
    projects: propTypes.array
}
export default ProjectList;