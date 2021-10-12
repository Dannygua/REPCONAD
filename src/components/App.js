
import '../styles/default.css'
import ContactPage from '../pages/ContactPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import HomePage from '../pages/Navigator'
import Footer from '../pages/FooterPage'
import PrincipalPage from '../pages/PrincipalPage'
import RepairPage from '../pages/RepairPage'
import Team from '../pages/Team'
import CountingPage from '../pages/CountingPage'
import FormalitiesPage from '../pages/FormalitiesPage'
import Homeworks from '../pages/Homeworks'
import ProgramPage from '../pages/ProgramPage'
import HomePrincipal from '../pages/Home'




const Home = () => (
  <Router>
  <div>
    <HomePage></HomePage>
   
    
    <Switch>
      <Route path="/home" >
        <PrincipalPage></PrincipalPage>

      </Route>
      <Route path="/contact" >
        <ContactPage></ContactPage>

      </Route>
      <Route  path="/team" >
        <Team></Team>

      </Route>
      <Route path="/repair" >
        <RepairPage></RepairPage>

      </Route>
      <Route path="/program" >
        <ProgramPage></ProgramPage>

      </Route>
      <Route path="/counting" >
        <CountingPage></CountingPage>

      </Route>
      <Route path="/formalities" >
        <FormalitiesPage></FormalitiesPage>

      </Route>
      <Route path="/homeworks" >
        <Homeworks></Homeworks>

      </Route>
      <Route path="/principal" >
        <HomePrincipal></HomePrincipal>

      </Route>
    </Switch>
    <Footer></Footer>
  </div>
</Router>


)

export default Home

