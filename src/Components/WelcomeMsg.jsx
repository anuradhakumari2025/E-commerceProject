import styles from "./WelcomeMsg.module.css"
import { CgSmileMouthOpen } from "react-icons/cg";

function WelcomeMsg() {
  return <>
  <p className={styles.welcome}>You can enjoy your day <CgSmileMouthOpen /></p>
  
  </>
}
export default WelcomeMsg;
