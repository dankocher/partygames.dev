import styles from "./index.module.scss";

import { FC } from "react";

import LinkButtons from "../LinkButtons";
import TextList from "../TextList";
import Image from "../Image";

import { GenericPageProps } from "./genericPage.interface";

const GenericPage: FC<GenericPageProps> = ({
  logo,
  title,
  description,
  link,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          className={styles.content__logo}
          src={logo.x1}
          images={logo}
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
