import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import NavBar from './components/custom/NavBar'
import Home from './components/routes/home/Home'
import { Routes, Route } from 'react-router-dom';
import Projects from './components/routes/projects/Projects';
import ProjectView from './components/routes/projectview/ProjectView';
import Sidebar from './components/custom/SideBar';


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectView />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
