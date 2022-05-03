import React from "react";
import { TextListProps } from "./textList.interface";

const TextList: React.FC<TextListProps> = ({ text, isBoldFirst = true }) => {
  const isEvenRemainder = isBoldFirst ? 0 : 1;
  return (
    <>
      {text?.map((item, index) => (
        <span
          key={index}
          className={
            index % 2 === isEvenRemainder
              ? "mainSubtitleSemibold"
              : "mainSubtitleBlack"
          }
        >
          {item}
        </span>
      ))}
    </>
  );
};

export default TextList;
