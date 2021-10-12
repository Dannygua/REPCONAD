
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"

import '../styles/Services.css'
import { propTypes } from 'react-bootstrap/esm/Image'


const UtilityList = (props) => (
    <div>

        <ReactBootStrap.Row className={props.StyleContentOne}>
            <ReactBootStrap.Col className={props.StyleText} xs={12} md={12}>
                <p >OFRECEMOS</p>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col className={props.StyleText} xs={12} md={12}>
                <ul>
                    <li>{props.ServiceOne}</li>
                    <li>{props.ServiceTwo}</li>
                    <li>{props.ServiceThree}</li>

                </ul>
            </ReactBootStrap.Col>


        </ReactBootStrap.Row>
    </div>


)

export default UtilityList
