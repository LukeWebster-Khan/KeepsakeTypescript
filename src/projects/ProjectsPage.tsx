import {MOCK_PROJECTS} from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

const ProjectsPage = () => {
    return(
        <>
        <h1>Projects</h1>
        {/* {JSON.stringify(MOCK_PROJECTS, null, '\t')} */}
        <ProjectList projects={MOCK_PROJECTS} />
        </>
    )
}

export default ProjectsPage;