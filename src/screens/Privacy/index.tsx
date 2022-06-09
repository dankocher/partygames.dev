import styles from "./index.module.scss";

import { Link } from "react-router-dom";
import { Document } from "../../components/Document";
import Footer from "../../components/Footer";

import mainLogo from "../../assets/svg/mainLogoDark.svg";

import info from "../../data/privacy.json";
import { SCREENS } from "../../navigation/constants";

const Privacy = () => {
  const { description, dateUpdate } = info.main.privacy;

  const altMainLogo = "PARTY GAMES Logo";
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={SCREENS.HOME}>
          <img src={mainLogo} alt={altMainLogo} className={styles.logo} />
        </Link>
      </div>
      <Document
        title="MetaModern LLC. Privacy policy"
        date={dateUpdate}
        description={description}
      />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
