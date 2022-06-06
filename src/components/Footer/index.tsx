import styles from "./styles.module.scss";

import { mail, company } from "./constants";
import { SCREENS } from "../../navigation/constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const year: number = new Date().getFullYear();

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(SCREENS.PRIVACY);
  };

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
          <div className={styles.noSelect} role="button" onClick={navigateTo}>
            {constText.privacyPolicy}
          </div>
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
