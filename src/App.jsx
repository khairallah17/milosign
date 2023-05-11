import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Images from "./pages/Images"
import Social from "./pages/Social"
import Template from "./pages/Template"
import Design from './pages/Design'
import Apps from "./pages/Apps"
import Organization from './pages/Organization'
import Home from './pages/Home'
import { GlobalProvider } from './context/globalContext'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>

          <Route path="/signatures">
            <Route path='details' element={<Details/>} />
            <Route path='images' element={<Images/>} />
            <Route path="social" element={<Social/>} />
            <Route path='template' element={<Template/>} />
            <Route path='design' element={<Design/>} />
            <Route path='apps' element={<Apps/>} />
          </Route>

          <Route path='/' element={<Home/>} />
          <Route path='organization' element={<Organization/>} />
        
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
