import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Layout from './components/layout/Layout.tsx'
import WeHike from './pages/Wehike.tsx'
import MyCelium from './pages/MyCelium.tsx'
import Home from './pages/Home.tsx'
import Resume from './pages/Resume.tsx'
import SuncoastPatios from './pages/SuncoastPatios.tsx'

export const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='suncoastpatios' element={<SuncoastPatios />} />
    <Route path='wehike' element={<WeHike />} />
    <Route path='mycelium' element={<MyCelium />} />
    <Route path='contact' element={<Contact />} />
    <Route path='resume' element={<Resume />} />
  </Route>,
)
export const router = createBrowserRouter(routes)