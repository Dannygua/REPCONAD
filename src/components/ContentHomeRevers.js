
import '../styles/default.css'
import * as ReactBootStrap from "react-bootstrap"
import UtilityList from "../components/UtilityList"

const ContentHome = (props) => (

                    <div className={props.ContentTwo}>
                        <h1 className={props.ContentThree}>
                            {props.ContentTitleOne}
                        </h1>
                        <br />
                        <br />
                        <h2 className={props.ContentThree}>
                            {props.ContentTitleTwo}
                        </h2>
                        <h2 className={props.ContentThree}>
                            {props.ContentTitleThree}
                        </h2>

                    </div>


)

export default ContentHome
