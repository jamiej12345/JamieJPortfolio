import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Experience from './components/Experience'
import Project from './components/Project'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/experience' element={<Experience />} />
        <Route exact path='/Project' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
