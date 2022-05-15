import styles from "./index.module.scss";

import { FC } from "react";

import { LeapFrog } from "@uiball/loaders";

const Loader: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className={styles.container} aria-live="polite" aria-busy={isLoading}>
      {isLoading && <LeapFrog color="white" />}
    </div>
  );
};

export default Loader;
