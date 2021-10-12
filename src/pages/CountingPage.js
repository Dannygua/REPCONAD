
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import PrimaryContentInfo from "../components/PrimaryContentInfo"
import Content from "../components/ContentHome"
import UtilityList from "../components/UtilityList"
import Portada from '../images/Portada5.png'

const CountingPage = () => (
    <div>
        <PrimaryContentInfo
            StyleContentOne="PrimaryContent"
            StyleContentTwo="TextContentOne"
            TitleOne="CONTABILIDAD"
        ></PrimaryContentInfo>
        <Content
            ContentOne="conteinerGroupOneW"
            ContentTwo="conteinerGroupTwoW"
            ContentThree="SecondTitleW"
            ContentTitleOne="CONTABILIDAD"
            ContentTitleTwo="PAPELEO Y TRAMITES"
            ContentTitleThree="FACTURA TUS COMPRAS Y VENTAS"
            ContentTitleFour=" La computadora1​2​ (del inglés: computer y este del latín: computare,3​ ‘calcular’), también denominada computador4​1​ u ordenador5​ (del francés: ordinateur; y este del latín: ordinator), "
            ContentImage={Portada}></Content>
        <UtilityList
            StyleContentOne="PrimaryContent"

        ></UtilityList>
    </div>


)

export default CountingPage
