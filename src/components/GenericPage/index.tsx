import styles from "./index.module.scss";

import React from "react";

import LinkButtons from "../LinkButtons";
import TextList from "../TextList";

import { GenericPageProps } from "./genericPage.interface";

const GenericPage: React.FC<GenericPageProps> = ({
  logo,
  title,
  description,
  link,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.content__logo}
          src={logo}
          alt={`${title} logo`}
        />

        <h1 className="mainBigTitle">{title}</h1>
        <div className={styles.content__description}>
          <TextList {...description} />
        </div>

        <LinkButtons {...link} />
      </div>
    </div>
  );
};

export default GenericPage;
