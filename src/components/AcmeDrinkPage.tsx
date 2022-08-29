import React from "react";
import { AcmeDinksText } from "./AcmeDinksText.tsx";

interface Props {
  showRedContainers: boolean;
}

export const AcmeDinksPage: React.FC<Props> = ({ showRedContainers }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "10px",
          paddingTop: 10,
        }}
      >
        <div>
          <AcmeDinksText hrWidth="75%"></AcmeDinksText>
          {showRedContainers && (
            <div style={{ display: "flex", height: "8vw" }}>
              <div
                style={{ flex: 4, background: "red", marginLeft: "2vw" }}
              ></div>
              <div style={{ flex: 1 }}></div>
            </div>
          )}
          <div style={{ height: "30%", width: "75%" }}>
            <img
              src="/assets/img4.PNG"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <div>
            <AcmeDinksText hrWidth="75%"></AcmeDinksText>
          </div>
        </div>
        <div>
          <img
            src="/assets/img5.PNG"
            alt=""
            style={{ height: "70%", width: "100%" }}
          />

          <AcmeDinksText></AcmeDinksText>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "10px",
          paddingTop: 20,
        }}
      >
        <div>
          <div style={{ height: "65%", width: "100%" }}>
            <img
              src="/assets/img6.PNG"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <div>
            <AcmeDinksText hrWidth="75%"></AcmeDinksText>
          </div>
        </div>
        <div>
          <div style={{ height: "20.5vw" }}></div>
          <img
            src="/assets/img7.PNG"
            alt=""
            style={{ height: "35%", width: "100%" }}
          />

          <AcmeDinksText></AcmeDinksText>
        </div>
      </div>
    </>
  );
};
