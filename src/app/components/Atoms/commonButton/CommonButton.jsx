import styles from "./commonButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CommonButton = (props) => {
  const btnStyles = {
    width: props.width || "200px",
  };

  const btnType = props.type || "button";

  return (
    <button style={btnStyles} className={styles.commonButtonContainer} type={btnType}>
      <h3>{props.text || "Botón"}</h3>
      {props.downIcon && (
        <FontAwesomeIcon icon={faArrowDown} className="fa-fw" />
      )}
    </button>
  );
};

export default CommonButton;
