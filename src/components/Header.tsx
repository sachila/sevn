import React from "react";

interface Props {
  showRedContainers: boolean;
}

export const Header: React.FC<Props> = ({ showRedContainers }) => {
  return (
    <>
      <div style={{ height: "8vw", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <img
            src="/assets/logo.PNG"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div
          style={{ flex: 4, background: showRedContainers ? "red" : "black" }}
        ></div>

        <div style={{ flex: 1 }}>
          <img
            src="/assets/plus.PNG"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            color: "white",
            fontSize: "7.8vw",
            letterSpacing: "1.5vw",
            fontWeight: "bold",
            paddingLeft: "0.5vw",
          }}
        >
          NORTH LION
        </span>
      </div>
      <div style={{ display: "flex", marginBottom: -5 }}>
        <div style={{ height: "100%", width: "100%" }}>
          {!showRedContainers && (
            <img
              src="/assets/img1.PNG"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          )}
          {showRedContainers && (
            <img
              src="/assets/img1_1.PNG"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </div>
      </div>
      <div style={{ height: "8vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>
    </>
  );
};
