import styles from "./styles.module.scss";

import { mail, company } from "./constants";
import { SCREENS } from "../../navigation/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const year: number = new Date().getFullYear();

  const constText = {
    termOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div
          className={`${styles.info__links} ${styles.noSelect} footerMainFont`}
        >
          <Link to={SCREENS.PRIVACY}>{constText.privacyPolicy}</Link>
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <p className={"footerSubtitleFont"}>
          {year} © {company}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
