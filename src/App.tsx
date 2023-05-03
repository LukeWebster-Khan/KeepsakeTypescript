import ProjectsPage from './projects/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';

const App = () => {
  return (
    <Router>
      <header className='sticky'>
        <span className='logo'>
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99"  />
        </span>
        <NavLink className='button rounded' to="/">
        <span className="icon-home"></span>Home</NavLink>
        <NavLink className='button rounded' to="/projects">
        <span className="icon-briefcase"></span>Projects</NavLink>
        
      </header>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;