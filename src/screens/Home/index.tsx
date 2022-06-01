import styles from "./index.module.scss";

import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import GenericPage from "../../components/GenericPage";
import Loader from "../../components/Loader";

import { GenericPageProps } from "../../components/GenericPage/genericPage.interface";

import mainLogo from "../../assets/svg/mainLogo.svg";
import { data } from "../../data/data";

const MIN_LOADING_DELAY = 1250;

function Home() {
  const altMainLogo = "PARTY GAMES Logo";
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const setIsPageLoadedHandler = () => setIsPageLoaded(true);

  useEffect(() => {
    setTimeout(() => {
      if (document.readyState === "complete") {
        setIsPageLoadedHandler();
      } else {
        window.addEventListener("load", setIsPageLoadedHandler);
        return () =>
          document.removeEventListener("load", setIsPageLoadedHandler);
      }
    }, MIN_LOADING_DELAY);
  }, []);

  return (
    <>
      {!isPageLoaded && <Loader isLoading={!isPageLoaded} />}

      <div
        className={styles.bgContainer}
        style={{ display: isPageLoaded ? "block" : "none" }}
      >
        {(data as GenericPageProps[]).map((item, index) => (
          <div key={`background-${index}`} className={styles.content}>
            <img
              src={item.background}
              className={styles.background}
              alt={`background-${index}`}
            />
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

export default Home;
