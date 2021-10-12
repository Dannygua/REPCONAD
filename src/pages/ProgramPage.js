
import '../styles/default.css'
import '../styles/Services.css'
import PrimaryContentInfo from "../components/PrimaryContentInfo"
import Content from "../components/ContentServicesWhite"
import Portada from '../images/Portada3.png'

const ProgramPage = () => (
    <div className="color" >
        <PrimaryContentInfo
            StyleContentOne="PrimaryContent"
            StyleContentTwo="TextContentOne"
            TitleOne="PROGRAMACION"
        ></PrimaryContentInfo>
        <Content
            ContentOne="conteinerGroupOneWServices"
            ContentTwo="conteinerGroupTwoW"
            ContentThree="SecondTitleW"
            ContentTitleOne="PROGRAMACION"
            ContentTitleTwo="PAGINAS Y SITIOS WEB "
            ContentTitleThree="LECCIONES DE PROGRAMACION"

            ContentImage={Portada}></Content>

    </div>



)

export default ProgramPage
