import styles from "./styles.module.scss";
import "./fonts.scss";

import { useEffect } from "react";
import parse from "html-react-parser";

import moment from "moment";

export const Document = ({ title, description, date }) => {
  const dateFormat = moment(date).format("MMMM DD, YYYY");

  useEffect(() => {
    window.document.getElementsByTagName("html")[0].removeAttribute("id");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerBlock}>
          <h2 className="docMain">{title}</h2>
          <p className="docSubtitle">Last modified {dateFormat}</p>
        </div>

        <div className={styles.description}>
          {Object.keys(description).map((keyName) => {
            if (keyName.includes("heading")) {
              return (
                <h2 className={`${styles.heading} docTitle0`}>
                  {description[keyName]}
                </h2>
              );
            }
            if (keyName.includes("title")) {
              return (
                <h3 className={`${styles.title} docTitle`}>
                  {description[keyName]}
                </h3>
              );
            }
            if (keyName.includes("text")) {
              return (
                <div className={`${styles.text} docSubtitle`}>
                  {Object.keys(description[keyName]).map((key) => {
                    if (key.includes("sections")) {
                      return (
                        <>
                          {description[keyName][key].map((item, index) => {
                            //br
                            if (item.includes("\n")) {
                              const strings = item.split("\n");
                              return (
                                <p key={index.toString()}>
                                  {strings[0]}
                                  <br/>
                                  {strings[1]}
                                </p>
                              );
                            }
                            //default
                            return <p key={index.toString()}>{parse(item)}</p>;
                          })}
                        </>
                      );
                    }
                    //Lists
                    if (key.includes("list")) {
                      return (
                        <>
                          <p className={styles.headingList}>
                            {description[keyName][key].title}
                          </p>
                          <ul>
                            {description[keyName][key].items.map(
                              (item, index) => {
                                //br
                                if (item.includes("\n")) {
                                  const strings = item.split("\n");
                                  return (
                                    <li key={index.toString()}>
                                      {strings.map((element) => (
                                        <>
                                          {element}
                                          <br/>
                                        </>
                                      ))}
                                    </li>
                                  );
                                }
                                //default
                                return (
                                  <li key={index.toString()}>{parse(item)}</li>
                                );
                              }
                            )}
                          </ul>
                        </>
                      );
                    }

                    return <p/>
                  })}
                </div>
              );
            }
            return <p/>
          })}
        </div>
      </div>
    </div>
  );
};
