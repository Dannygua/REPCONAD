
import * as ReactBootStrap from "react-bootstrap"
import '../styles/HomeStyles.css'
import Logo from '../images/laptop.png'

const Home = () => (
    <div className='conteinerGroup'>
        <ReactBootStrap.Row>
            <ReactBootStrap.Col xs={6} md={6}>


                <h2 className="PrincipalTitleHomeOne" >REPCONAD</h2>
                <br />

                <br />
                <h2 className="PrincipalTitleHome" >NECESITAS AYUDA INFORMATICA</h2>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col xs={6} md={6}>
                <div class="banner_img">
                    <ReactBootStrap.Image fluid src={Logo} />
                </div>


            </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <section class="banner contenedor">



        </section>


        <div class="burbujas">
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
            <div class="burbuja"></div>
        </div>
    </div>


)

export default Home