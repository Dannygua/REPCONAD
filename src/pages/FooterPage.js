
import '../styles/default.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'
import Portada from '../images/LOGO.jpg'
import * as ReactBootStrap from "react-bootstrap"

const Footer = () => (

  <div >
    <footer class="text-center text-lg-start bg-dark text-muted">

      <ReactBootStrap.Row >

        <ReactBootStrap.Col xs={6} md={6}>
          <div className="TextFooter">

            COMUNICATE CON NUESTRAS REDE SOCIALES

          </div>
          <div >
          <ReactBootStrap.Row >
          <ReactBootStrap.Col xs={4} md={4}>
            <FontAwesomeIcon icon={faFacebook} />
            <a className="TextFooter" href={"https://www.facebook.com/profile.php?id=100070290135046"}>Facebook   </a>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col xs={4} md={4}>
            <FontAwesomeIcon icon={faInstagram} />
            <a className="TextFooter" href={"https://www.google.es/"}>Twitter   </a>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col xs={4} md={4}>
            <FontAwesomeIcon icon={faTwitter} />
            <a className="TextFooter" href={"https://www.google.es/"}>Instagram   </a>
            </ReactBootStrap.Col>
            </ReactBootStrap.Row>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={6} md={6}>
          <div>
            <p className="TextFooter" >CELULAR: 0984745347</p>
            <p className="TextFooter" >LOCAL FISICO: Quito, Pomasqui Las Tolas calle la Independencia</p>
            <p className="TextFooter" >EMAIL: maryajila75@hotmail.com</p>
          </div>
        </ReactBootStrap.Col>
      </ReactBootStrap.Row>



    </footer>
  </div>


)

export default Footer
