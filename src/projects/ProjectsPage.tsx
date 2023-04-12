import {MOCK_PROJECTS} from './MockProjects';

const ProjectsPage = () => {
    return(
        <>
        <h1>Projects</h1>
        <pre>

        {JSON.stringify(MOCK_PROJECTS, null, '\t')}
        </pre>
        </>
    )
}

export default ProjectsPage;