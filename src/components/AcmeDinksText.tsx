import React from "react";

interface Props {
  hrWidth?: string;
}
export const AcmeDinksText: React.FC<Props> = (props) => {
  return (
    <>
      <span
        style={{
          color: "white",
          fontSize: "2.5vw",
          letterSpacing: "0.2vw",
          fontWeight: "bold",
        }}
      >
        ACME Drinks
      </span>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 2,
            color: "white",
            fontSize: "1.2rem",
            letterSpacing: "0.1vw",
          }}
        >
          <p>
            asfjl asfjkasf jaksl;f <br /> asf akjfka asfjal;asf aal;
            <br /> fajsf jaskfj kasfjslakfja <br /> ksfjlas afjksf asfjk f
          </p>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <hr
        style={{
          color: "white",
          width: props?.hrWidth ? props.hrWidth : "100%",
          marginLeft: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "1.2rem",
          letterSpacing: "0.1vw",
        }}
      >
        <p>Brand, Strategy, Event, Social</p>
      </div>
    </>
  );
};
