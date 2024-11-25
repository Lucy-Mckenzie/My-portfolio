import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layout/Footer'

const App = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App


