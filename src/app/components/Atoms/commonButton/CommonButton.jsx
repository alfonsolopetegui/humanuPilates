import styles from "./commonButton.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowDown
} from "@fortawesome/free-solid-svg-icons";

const CommonButton = (props) => {

    const btnStyles = {
        width: props.width || "200px",
    }

  return (
    <div style={btnStyles} className={styles.commonButtonContainer}>
        <h3>{props.text || "Botón"}</h3>
        {props.downIcon && <FontAwesomeIcon icon={faArrowDown} className="fa-fw" />}
    </div>
  )
}

export default CommonButton