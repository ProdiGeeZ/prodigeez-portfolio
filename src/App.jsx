import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import Home from './components/routes/home/Home'
import { Routes, Route } from 'react-router-dom';
import Projects from './components/routes/projects/Projects';
import ProjectView from './components/routes/projectview/ProjectView';
import Sidebar from './components/custom/SideBar';
import ResumeView from './components/routes/Resume/ResumeView';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import Footer from './components/custom/Footer';
import NotFound from './components/routes/notfound/NotFound';

inject();
injectSpeedInsights();
  
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectView />} />
          <Route path="/resume" element={<ResumeView />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
