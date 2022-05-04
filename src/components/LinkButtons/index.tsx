import styles from "./index.module.scss";

import React from "react";

import appStoreIcon from "./svg/app-store.svg";
import googlePlayIcon from "./svg/google-play.svg";

import { LinkButtonsProps } from "./linkButtons.interface";

const LinkButtons: React.FC<LinkButtonsProps> = ({ googlePlay, appStore }) => {
  const linkStore = [
    {
      title: "Google Play",
      href: googlePlay,
      icon: googlePlayIcon,
    },
    {
      title: "App Store",
      href: appStore,
      icon: appStoreIcon,
    },
  ];

  const constText = {
    downloadText: "Download on the",
    comingSoonText: "Soon",
  };

  return (
    <div className={styles.storeLink}>
      {linkStore.map(({ title, href, icon }) => (
        <a
          key={title}
          className={styles.link}
          href={href ? href : null}
          target={href ? "_blank" : undefined}
          rel={href ? "noreferrer" : undefined}
        >
          <div className={styles.icon}>
            <img src={icon} alt={`${title} icon`} />
          </div>
          <div className={styles.text}>
            {href ? (
              <>
                <p className="downFont">{constText.downloadText}</p>
                <p className="smallFont">{title}</p>
              </>
            ) : (
              <p className={`smallFont`}>{constText.comingSoonText}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinkButtons;
