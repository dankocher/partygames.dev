import styles from "./app.module.scss";

import GenericPage from "./components/GenericPage";

import { GenericPageProps } from "./components/GenericPage/genericPage.interface";

import mainLogo from "./assets/svg/mainLogo.svg";
import { data } from "./data/data";

function App() {
  const altMainLogo = "PARTY GAMES Logo";

  return (
    <>
      <div
        className={styles.bgContainer}
        style={{ maxHeight: `calc(100vh * ${data.length})` }}
      >
        {(data as GenericPageProps[]).map((item, index) => (
          <div key={`background-${index}`} className={styles.content}>
            <img src={item.background} className={styles.background} />
          </div>
        ))}
      </div>
      <div className={styles.contentContainer}>
        {(data as GenericPageProps[]).map((item, index) => (
          <GenericPage key={`content-${index}`} {...item} />
        ))}
      </div>
      <img src={mainLogo} alt={altMainLogo} className={styles.logo} />
    </>
  );
}

export default App;
