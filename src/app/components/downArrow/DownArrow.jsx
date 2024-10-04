import styles from "./downArrow.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DownArrow = () => {
  return (
    <div className={styles.downArrowContainer}>
      <FontAwesomeIcon icon={faAngleDown} className="fa-fw" />
    </div>
  );
};

export default DownArrow;
