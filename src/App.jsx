import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Images from "./pages/Images"
import Social from "./pages/Social"
import Template from "./pages/Template"
import Design from './pages/Design'
import Apps from "./pages/Apps"
import Organization from './pages/Organization'
import Campaigns from './pages/Campaigns'
import Domain from './pages/Domain Settings/Domain'
import Employees from './pages/Domain Settings/Employees'
import InviteEmail from './pages/Domain Settings/InviteEmail'
import Analytics from './pages/Domain Settings/Analytics'
import Campaign from './pages/Domain Settings/Campaign'
import CompanyDetails from './pages/Domain Settings/CompanyDetails'
import { GlobalProvider } from './context/globalContext'
import { DomainSettingsProvider } from './context/DomainSettingscontext'
import { FromProvider } from "./context/CampaignFormContext"
import Login from './pages/Login'
import LoadingScreen from './components/LoadingScreen'

// CUSTOM HOOK "CONTEXTS"
import { OrganizationContextProvider } from './context/OrganizationContext'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <DomainSettingsProvider>
          <FromProvider>
            <OrganizationContextProvider>
              
              <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/load" element={<LoadingScreen/>} />

                <Route path="/signatures">
                  <Route path='details' element={<Details/>} />
                  <Route path='images' element={<Images/>} />
                  <Route path="social" element={<Social/>} />
                  <Route path='template' element={<Template/>} />
                  <Route path='design' element={<Design/>} />
                  <Route path='apps' element={<Apps/>} />
                </Route>

                <Route path='/organization' element={<Organization/>} />
                <Route path="/Campaigns" element={<Campaigns/>} />

                <Route path='/domain'>
                  <Route path="settings" element={<Domain/>} />
                  <Route path="employees" element={<Employees/>} />
                  <Route path="email" element={<InviteEmail/>} />
                  <Route path="analytics" element={<Analytics/>} />
                  <Route path="campaign" element={<Campaign/>} />
                  <Route path="company" element={<CompanyDetails/>} />
                </Route>

              </Routes>
              
            </OrganizationContextProvider>
          </FromProvider>
        </DomainSettingsProvider>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
