import React, { useState } from "react";
import { AboutUs } from "../components/AboutUs.tsx";
import { BottomSection } from "../components/BottomSection.tsx";
import { Header } from "../components/Header.tsx";

export const MainPage: React.FC = () => {
  const [showRedContainers, setShowRedContainers] = useState(true);
  return (
    <div
      onMouseLeave={() => {
        setShowRedContainers(true);
      }}
    >
      <Header showRedContainers={showRedContainers}></Header>
      <AboutUs
        showRedContainers={showRedContainers}
        setShowRedContainers={setShowRedContainers}
      ></AboutUs>
      <BottomSection showRedContainers={showRedContainers}></BottomSection>
    </div>
  );
};
