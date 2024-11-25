/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Layout from './components/layout/Layout'

export const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<About />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contact />} />
  </Route>,
)
export const router = createBrowserRouter(routes)