import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
