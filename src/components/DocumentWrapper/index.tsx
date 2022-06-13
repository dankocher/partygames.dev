import styles from "./index.module.scss";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

import mainLogo from "../../assets/svg/mainLogoDark.svg";

import { SCREENS } from "../../navigation/constants";

const DocumentWrapper = ({ children }) => {
  const altMainLogo = "PARTY GAMES Logo";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={SCREENS.HOME}>
          <img src={mainLogo} alt={altMainLogo} className={styles.logo} />
        </Link>
      </div>
      {children}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default DocumentWrapper;
