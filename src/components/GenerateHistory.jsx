import React from "react";
import { GENERATE_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  console.log(data);
  return (
    <div>
      {data.map((text) => (
        <p key={text}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
};

export default GenerateHistory;
