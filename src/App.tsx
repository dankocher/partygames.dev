import styles from "./app.module.scss";

import { useRef } from "react";
import { useOnLoadImages } from "./hooks/useOnLoadImages";

import Footer from "./components/Footer";
import GenericPage from "./components/GenericPage";
import Loader from "./components/Loader";

import { GenericPageProps } from "./components/GenericPage/genericPage.interface";

import mainLogo from "./assets/svg/mainLogo.svg";
import { data } from "./data/data";

function App() {
  const altMainLogo = "PARTY GAMES Logo";

  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  return (
    <>
      {!imagesLoaded && <Loader isLoading={!imagesLoaded} />}

      <div
        ref={wrapperRef}
        className={styles.bgContainer}
        style={{ display: imagesLoaded ? "block" : "none" }}
      >
        {(data as GenericPageProps[]).map((item, index) => (
          <div key={`background-${index}`} className={styles.content}>
            <img src={item.background} className={styles.background} />
          </div>
        ))}
        <Footer />
      </div>

      <div
        style={{ display: imagesLoaded ? "block" : "none" }}
        className={styles.contentContainer}
      >
        {(data as GenericPageProps[]).map((item, index) => (
          <GenericPage key={`content-${index}`} {...item} />
        ))}
      </div>
      <img
        style={{ display: imagesLoaded ? "block" : "none" }}
        src={mainLogo}
        alt={altMainLogo}
        className={styles.logo}
      />
    </>
  );
}

export default App;
