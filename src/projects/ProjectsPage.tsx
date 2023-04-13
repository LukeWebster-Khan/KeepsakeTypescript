import {MOCK_PROJECTS} from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

const ProjectsPage = () => {
    const saveProject = (project: Project) => {
        console.log('saving Project :', project);
    }
    return(
        <>
        <h1>Projects</h1>
        <ProjectList
        onSave={saveProject}
        projects={MOCK_PROJECTS} />
        </>
    )
}

export default ProjectsPage;