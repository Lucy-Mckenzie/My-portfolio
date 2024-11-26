/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './components/layout/Layout'
import ProjectWh from './pages/Wehike'

export const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<About />} />
    <Route path='wehike' element={<ProjectWh />} />
    <Route path='contact' element={<Contact />} />
  </Route>,
)
export const router = createBrowserRouter(routes)