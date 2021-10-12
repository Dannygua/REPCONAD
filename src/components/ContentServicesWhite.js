
import '../styles/default.css'
import '../styles/Services.css'
import * as ReactBootStrap from "react-bootstrap"
import UtilityList from "../components/UtilityList"

const ContentHome = (props) => (
    <div  >

        <div className={props.ContentOne}>


            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={6} md={6}>
                    <div className={props.ContentTwo}>
                        <h1 className={props.ContentThree}>
                            {props.ContentTitleOne}
                        </h1>
                        <h2 className={props.ContentThree}>
                            {props.ContentTitleTwo}
                        </h2>
                        <h2 className={props.ContentThree}>
                            {props.ContentTitleThree}
                        </h2>
                        <p className="NormalText">
                            {props.ContentTitleFour}
                        </p>
                        <UtilityList
                            StyleContentOne="PrimaryContent"

                        ></UtilityList>
                    </div>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col xs={6} md={6}>

                    <ReactBootStrap.Image fluid src={props.ContentImage} />

                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>

    </div>

)

export default ContentHome
