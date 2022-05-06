import styles from "./index.module.scss";

import { LeapFrog } from "@uiball/loaders";

const Loader = ({ isLoading }) => {
  return (
    <div className={styles.container} aria-live="polite" aria-busy={isLoading}>
      {isLoading && <LeapFrog color="white" />}
    </div>
  );
};

export default Loader;
