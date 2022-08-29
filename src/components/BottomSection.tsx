import React from "react";
interface Props {
  showRedContainers: boolean;
}
export const BottomSection: React.FC<Props> = ({ showRedContainers }) => {
  return (
    <>
      <div style={{ height: "8vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ display: "flex", paddingBottom: 10 }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 4, textAlign: "center" }}>
          <span
            style={{
              color: "white",
              fontSize: "2.5vw",
              letterSpacing: "0.2vw",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            SEE MORE WORK
          </span>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ height: "16vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            color: "white",
            fontSize: "6vw",
            letterSpacing: "1.5vw",
            fontWeight: "bold",
            paddingLeft: "0.5vw",
          }}
        >
          WORK WITH US
        </span>
      </div>
      <div style={{ height: "8vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ display: "flex", paddingBottom: 10 }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 4, textAlign: "center" }}>
          <span
            style={{
              color: "#108b91",
              fontSize: "3vw",
              letterSpacing: "0.2vw",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            hello@northliondigital.com
          </span>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 4, textAlign: "center" }}>
          <img
            src="/assets/logo.PNG"
            alt=""
            style={{ height: "100%", width: "10%" }}
          />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ height: "8vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "2.5vw",
          letterSpacing: "0.2vw",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <span style={{ flex: 1 }}> INSTAGRAM</span>
        <span
          style={{
            flex: 1,
          }}
        >
          + 122 222 222
        </span>
        <span style={{ flex: 1 }}>LINKEDIN</span>
      </div>
      <div style={{ height: "2vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>
    </>
  );
};
