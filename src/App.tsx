import ProjectsPage from './projects/ProjectsPage';
import Greeter from './projects/Greeter';

function App() {

  return (
    <div className='container'>
    <ProjectsPage />
    <Greeter first='John' />
    </div>
  );
}

export default App;