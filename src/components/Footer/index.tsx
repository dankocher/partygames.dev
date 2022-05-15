import styles from "./styles.module.scss";

import { mail, company } from "./constants";

const Footer = () => {
  const year: number = new Date().getFullYear();

  const constText = {
    termOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={`${styles.info__links} footerMainFont`}>
          <a>{constText.termOfUse}</a>
          <a>{constText.privacyPolicy}</a>
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
