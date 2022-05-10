import styles from "./app.module.scss";

import { useState } from "react";

import Footer from "./components/Footer";
import GenericPage from "./components/GenericPage";
import Loader from "./components/Loader";

import { GenericPageProps } from "./components/GenericPage/genericPage.interface";

import mainLogo from "./assets/svg/mainLogo.svg";
import { data } from "./data/data";

function App() {
  const altMainLogo = "PARTY GAMES Logo";
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  window.addEventListener("load", (event) => {
    setIsPageLoaded(true);
  });

  return (
    <>
      {!isPageLoaded && <Loader isLoading={!isPageLoaded} />}

      <div
        className={styles.bgContainer}
        style={{ display: isPageLoaded ? "block" : "none" }}
      >
        {(data as GenericPageProps[]).map((item, index) => (
          <div key={`background-${index}`} className={styles.content}>
            <img src={item.background} className={styles.background} />
          </div>
        ))}
        <Footer />
      </div>

      <div
        style={{ display: isPageLoaded ? "block" : "none" }}
        className={styles.contentContainer}
      >
        {(data as GenericPageProps[]).map((item, index) => (
          <GenericPage key={`content-${index}`} {...item} />
        ))}
      </div>
      <img
        style={{ display: isPageLoaded ? "block" : "none" }}
        src={mainLogo}
        alt={altMainLogo}
        className={styles.logo}
      />
    </>
  );
}

export default App;
