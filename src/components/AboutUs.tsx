import React from "react";
import { AcmeDinksText } from "./AcmeDinksText.tsx";
import { AcmeDinksPage } from "./AcmeDrinkPage.tsx";

interface Props {
  showRedContainers: boolean;
  setShowRedContainers: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AboutUs: React.FC<Props> = ({
  setShowRedContainers,
  showRedContainers,
}) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <span
          style={{
            color: "white",
            fontSize: "2.5vw",
            letterSpacing: "0.5vw",
            fontWeight: "bold",
          }}
        >
          ABOUT US
        </span>
      </div>

      <div style={{ display: "flex", height: "3vw" }}>
        {showRedContainers && (
          <div style={{ flex: 3, background: "red", marginLeft: "2vw" }}></div>
        )}
        <div style={{ flex: 1 }}></div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5vw",
        }}
      >
        <div
          style={{
            color: showRedContainers ? "white" : "grey",
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              letterSpacing: "0.1vw",
            }}
          >
            ajshfkla ;fjlaiks fasf jiksa jflska jfaskjfkajf asjflsa fajsf
            jahsfjsa hfjksah
            <b
              style={{ color: "white" }}
              onMouseEnter={() => {
                setShowRedContainers(false);
              }}
            >
              {" "}
              Service{" "}
            </b>
            jsah fkjsafkjs jkfhsajkfh jkas hfksahf ajhfkjashf jsa
            fjksahfsahfkajs hfkas
            <b
              style={{ color: "white" }}
              onMouseEnter={() => {
                setShowRedContainers(false);
              }}
            >
              {" "}
              Brand{" "}
            </b>
            hfjsa hfakjs lhfkasf skhfjahf faf hsa fjksa fhskja fsjka fhas fksaj
            fksa flk
          </p>
        </div>

        <div
          style={{
            color: "white",
            fontSize: "25px",
            letterSpacing: "0.5vw",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            paddingBottom: 20,
          }}
          className={!showRedContainers ? "fadeIn" : "fadeOut"}
        >
          <span> COOPERATE BRANDING</span>
          <span> COOPERATE IDENTITY</span>
          <span> LOGOS</span>
          <span> UI/UX</span>
          <span> WEB DEVELOPMENT</span>
        </div>
      </div>

      <div style={{ height: "8vw", display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        {showRedContainers && (
          <div style={{ flex: 4, background: "red" }}></div>
        )}
        <div style={{ flex: 2 }}></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1vw",
        }}
      >
        <div style={{ height: "82%", width: "100%" }}>
          <img
            src="/assets/img2.PNG"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div style={{ height: "52%", width: "100%" }}>
          <img
            src="/assets/img3.PNG"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />

          <AcmeDinksText></AcmeDinksText>
        </div>
      </div>
      <AcmeDinksPage showRedContainers={showRedContainers}></AcmeDinksPage>
    </>
  );
};
