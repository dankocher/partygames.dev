import styles from "./app.module.scss";

import Footer from "./components/Footer";
import GenericPage from "./components/GenericPage";

import { GenericPageProps } from "./components/GenericPage/genericPage.interface";

import mainLogo from "./assets/svg/mainLogo.svg";
import { data } from "./data/data";

function App() {
  const altMainLogo = "PARTY GAMES Logo";

  return (
    <>
      <div className={styles.bgContainer}>
        {(data as GenericPageProps[]).map((item, index) => (
          <div key={`background-${index}`} className={styles.content}>
            <img src={item.background} className={styles.background} />
          </div>
        ))}
        <Footer />
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
