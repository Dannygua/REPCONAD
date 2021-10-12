
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import '../styles/TeamStyles.css'
import Logo from '../images/Portada4.png'
import Logo2 from '../images/Portada3.png'
import Logo3 from '../images/Portada2.png'
import ListComponent from '../components/ListComponent'
import PrimaryContentInfo from '../components/PrimaryContentInfo'

const Team = () => (
    <div>


        <PrimaryContentInfo
            StyleContentOne="PrimaryContent"
            StyleContentTwo="TextContentOne"
            TitleOne="CONTABILIDAD"
            Portada={Logo}
        ></PrimaryContentInfo>

        <ListComponent
            StyleContentOne="PrimaryContent"
            StyleContentTwo="NameTextOne"
            Name="MARIA DEL CARMEN AJILA NARVAEZ"
            SkillOne="Buen Trabajador"
            GoodForOne="Contadora Experta"
        ></ListComponent>



        <PrimaryContentInfo
            StyleContentOne="SecondContent"
            StyleContentTwo="TextContentTwo"
            TitleOne="PROGRAMACION"
            Portada={Logo2}
        ></PrimaryContentInfo>

        <ListComponent
            StyleContentOne="SecondContent"
            StyleContentTwo="NameTextTwo"
            Name="DANNY GUAÑUNA AJILA ALEXANDER"
            SkillOne="Buen Trabajador"
            SkillTwo="Respontable"
            SkillThree="Puntual"
            SkillFour="Agradable"
            GoodForOne="Programacion de webs"
            GoodForTwo="Diseñador web y audiovisual"
            GoodForThree="Profesional en Informatica"
            GoodForFour="Profesional en Matematicas y Tecnologia"
        ></ListComponent>



        <PrimaryContentInfo
            StyleContentOne="PrimaryContent"
            StyleContentTwo="TextContentOne"
            TitleOne="REPARACIONES"
            Portada={Logo3}
        ></PrimaryContentInfo>

        <ListComponent
            StyleContentOne="PrimaryContent"
            StyleContentTwo="NameTextOne"
            Name="RODRIGO GUAÑUNA WASHINGTON"
            SkillOne="Buen Trabajador"
            GoodForOne="Tecnico experto en PC y laptops"
        ></ListComponent>
    </div>


)

export default Team
