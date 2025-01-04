/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './components/layout/Layout'
import WeHike from './pages/Wehike'
import MyCelium from './pages/MyCelium'
import SlothLibrary from './pages/SlothLibrary'
import Dotmap from './pages/Dopmap'
import Home from './pages/Home'
import Resume from './pages/Resume'
import SuncoastPatios from './pages/SuncoastPatios'

export const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='suncoastpatios' element={<SuncoastPatios />} />
    <Route path='wehike' element={<WeHike />} />
    <Route path='mycelium' element={<MyCelium />} />
    <Route path='slothlibrary' element={<SlothLibrary />} />
    <Route path='dotmap' element={<Dotmap />} />
    <Route path='contact' element={<Contact />} />
    <Route path='resume' element={<Resume />} />
  </Route>,
)
export const router = createBrowserRouter(routes)