import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import Home from './components/routes/home/Home'
import { Routes, Route } from 'react-router-dom';
import Projects from './components/routes/projects/Projects';
import ProjectView from './components/routes/projectview/ProjectView';
import Sidebar from './components/custom/SideBar';
import ResumeView from './components/routes/Resume/ResumeView';
import { inject } from '@vercel/analytics';

function App() {
  inject();
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectView />} />
          <Route path="/resume" element={<ResumeView />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
