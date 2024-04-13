import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import NavBar from './components/custom/NavBar'
import Home from './components/routes/home/Home'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
