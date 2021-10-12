
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import '../styles/TeamStyles.css'
import { propTypes } from 'react-bootstrap/esm/Image'


const ListComponent= (props) => (
    <div>
        
<ReactBootStrap.Row className={props.StyleContentOne}>
<ReactBootStrap.Col xs={12} md={12}>
    <p className={props.StyleContentTwo}>{props.Name}</p>
</ReactBootStrap.Col>

    <ReactBootStrap.Col className="ListText" xs={12} md={6}>
    <ReactBootStrap.ListGroup.Item  variant="dark">PERFIL</ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.SkillOne}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.SkillTwo}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.SkillThree}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.SkillFour}</ReactBootStrap.ListGroup.Item>
</ReactBootStrap.ListGroup>
    </ReactBootStrap.Col>
    <ReactBootStrap.Col className="ListText" xs={12} md={6}>
    <ReactBootStrap.ListGroup.Item className="ListText" variant="dark">DESTREZAS</ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup>
  <ReactBootStrap.ListGroup.Item variant="secondary">{props.GoodForOne}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.GoodForTwo}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.GoodForThree}</ReactBootStrap.ListGroup.Item>
  <ReactBootStrap.ListGroup.Item  variant="secondary">{props.GoodForFour}</ReactBootStrap.ListGroup.Item>
</ReactBootStrap.ListGroup>
    </ReactBootStrap.Col>

</ReactBootStrap.Row>
    </div>


)

export default ListComponent
