
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import Portada from '../images/Portada1.jpg'
import Portada2 from '../images/Portada2.png'
import Portada3 from '../images/Portada3.png'
import Portada4 from '../images/Portada4.png'
import Portada5 from '../images/Portada5.png'
import Portada6 from '../images/Portada6.png'
import ContentHome from '../components/ContentHome'
import ContentHomeRevers from '../components/ContentHomeRevers'
import UtilityList from "../components/UtilityList"


const PrincipalPage = () => (
        <div>
                <ReactBootStrap.Row className="conteinerGroupPrincipal">
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ContentHome
                                        ContentOne="conteinerGroupPrincipal"
                                        ContentTwo="conteinerGroupTwoW"
                                        ContentThree="SecondTitlePrincipal"
                                        ContentTitleOne="REPCONAD"
                                        ContentTitleTwo="TU MEJOR OPCION"
                                        ContentTitleThree="UNICOS E INSUPERABLES"
                                ></ContentHome>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ReactBootStrap.Image fluid src={Portada} />
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                <ReactBootStrap.Row className="conteinerGroupOneB">
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ReactBootStrap.Image fluid src={Portada2} />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ContentHomeRevers
                                        ContentOne="conteinerGroupOneB"
                                        ContentTwo="conteinerGroupTwoB"
                                        ContentThree="SecondTitleB"
                                        ContentTitleOne="REPARACIONES"
                                        ContentTitleTwo="COMPONENTES"
                                        ContentTitleThree="LAPTOP Y PC DE ESCRITORIO"
                                ></ContentHomeRevers >
                                <br />
                                <UtilityList
                                        StyleContentOne="PrimaryContent"
                                        StyleText="ListServicesTextW"
                                        ServiceOne="REPARACIÓN DE PCS Y LAPTOPS"
                                        ServiceTwo="CONFIGURACIÓN DE PCS EN SOFTWARE Y HARDWARE"
                                        ServiceThree="REPARACION DE IMPRESORAS"
                                ></UtilityList>
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                <ReactBootStrap.Row className="conteinerGroupPrincipal">
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ContentHome
                                        ContentOne="conteinerGroupOneW"
                                        ContentTwo="conteinerGroupTwoW"
                                        ContentThree="SecondTitleW"
                                        ContentTitleOne="PROGRAMACION"
                                        ContentTitleTwo="PAGINAS Y SITIOS WEB "
                                        ContentTitleThree="LECCIONES DE PROGRAMACION"
                                ></ContentHome>
                                <br />
                                <UtilityList
                                        StyleContentOne="PrimaryContent"
                                        StyleText="ListServicesText"
                                        ServiceOne="AYUDA EN INFORMÁTICA Y PROGRAMACIÓN"
                                        ServiceTwo="DISEÑO DE SITIOS WEB"
                                        ServiceThree="DISEÑO Y PROGRAMACION"
                                ></UtilityList>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ReactBootStrap.Image fluid src={Portada3} />
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                <ReactBootStrap.Row className="conteinerGroupOneB">
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ReactBootStrap.Image fluid src={Portada4} />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ContentHomeRevers
                                        ContentOne="conteinerGroupOneB"
                                        ContentTwo="conteinerGroupTwoB"
                                        ContentThree="SecondTitleB"
                                        ContentTitleOne="CONTABILIDAD"
                                        ContentTitleTwo="PAPELEO Y TRAMITES"
                                        ContentTitleThree="FACTURA TUS COMPRAS Y VENTAS"
                                ></ContentHomeRevers >
                                <br />
                                <UtilityList
                                        StyleContentOne="PrimaryContent"
                                        StyleText="ListServicesTextW"
                                        ServiceOne="DECLARACIÓN DE IMPUESTOS"
                                        ServiceTwo="ANEXOS DEL SRI PARA  PERSONAS NATURALES NO OBLIGADAS A LLEVAR CONTABILIDAD"
                                        ServiceThree="AYUDA CON CUALQUIER TRÁMITE O PROBLEMA EN EL SRI O CUALQUIER OTRA PLATAFORMA EN LÍNEA"
                                ></UtilityList>
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                <ReactBootStrap.Row className="conteinerGroupPrincipal">
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ContentHome
                                        ContentOne="conteinerGroupOneW"
                                        ContentTwo="conteinerGroupTwoW"
                                        ContentThree="SecondTitleW"
                                        ContentTitleOne="EN LINEA"
                                        ContentTitleTwo="SRI - AMT Y MAS"
                                        ContentTitleThree="TRAMITES Y CONSULTAS"

                                ></ContentHome>
                                <br />
                                <UtilityList
                                        StyleContentOne="PrimaryContent"
                                        StyleText="ListServicesText"
                                        ServiceOne="TRAMITES EN LINEA"
                                        ServiceTwo="TRÁMITES EN LAS PLATAFORMAS DEL IESS, SRI, AMT, MUNICIPIO ETC."
                                        ServiceThree="TRÁMITES EN LÍNEA DE DIVERSAS INSTITUCIONES PRIVADAS Y PÚBLICAS"
                                ></UtilityList>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ReactBootStrap.Image fluid src={Portada5} />
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                <ReactBootStrap.Row className="conteinerGroupOneB">
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ReactBootStrap.Image fluid src={Portada6} />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={6}>
                                <ContentHomeRevers
                                        ContentOne="conteinerGroupOneB"
                                        ContentTwo="conteinerGroupTwoB"
                                        ContentThree="SecondTitleB"
                                        ContentTitleOne="TRABAJOS"
                                        ContentTitleTwo="TAREAS EN WORD Y EXCEL"
                                        ContentTitleThree="DISEÑO DE PRESENTACIONES"
                                ></ContentHomeRevers >
                                <br />
                                <UtilityList
                                        StyleContentOne="PrimaryContent"
                                        StyleText="ListServicesTextW"
                                        ServiceOne="TRABAJOS EN COMPUTADORA WORD, EXCEL, POWER POINT, PUBLISHER, ETC"
                                        ServiceTwo="IMPRESIONES Y COPIAS, PAPELERÍA Y ARTÍCULOS DE OFICINA"
                                        ServiceThree="EDICION DE VIDEO"
                                ></UtilityList>
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>


        </div>


)

export default PrincipalPage
