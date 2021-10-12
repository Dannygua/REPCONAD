
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import '../styles/TeamStyles.css'
import Logo from '../images/Portada4.png'

const PrimaryContentInfo= (props) => (
    <div>
    <ReactBootStrap.Row className={props.StyleContentOne}>

    <ReactBootStrap.Col  xs={12} md={12}>
        <h1 className={props.StyleContentTwo} >{props.TitleOne}</h1>
       
    </ReactBootStrap.Col>
    <ReactBootStrap.Col  xs={3} md={3}>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col className={props.StyleContentOne} xs={6} md={6}>
        <ReactBootStrap.Image fluid  src={props.Portada} />
       
</ReactBootStrap.Col>
<ReactBootStrap.Col  xs={3} md={3}>


    </ReactBootStrap.Col>

  </ReactBootStrap.Row>


    </div>


)

export default PrimaryContentInfo
