
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
const HomePage = () => (
  <div className="PrincipalMenu">



    <ReactBootStrap.Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">

      <ReactBootStrap.Navbar.Brand ><Link className="TextMenu" to="/home" >REPCONAD</Link></ReactBootStrap.Navbar.Brand>

      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

        <ReactBootStrap.Nav >


          <ReactBootStrap.Nav.Link className="Menu" ><Link className="TextMenu" to="/principal" >HOME</Link></ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link className="Menu" ><Link className="TextMenu" to="/team" >EQUIPO</Link></ReactBootStrap.Nav.Link>

        </ReactBootStrap.Nav>

      </ReactBootStrap.Navbar.Collapse>


    </ReactBootStrap.Navbar>


  </div>

)

export default HomePage
