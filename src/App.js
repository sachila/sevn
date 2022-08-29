import "./App.css";
import { MainPage } from "./pages/mainPage.tsx";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}> </div>
      <div style={{ flex: 4 }}>
        <MainPage />
      </div>
      <div style={{ flex: 1 }}> </div>
    </div>
  );
}

export default App;
