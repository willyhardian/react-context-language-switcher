import { useState } from "react";
import "./App.css";
import HeaderPage from "./components/HeaderPage";
import MainContent from "./components/MainContent";
import LanguageContext from "./contexts/LanguageContext";

function App() {
  const [language, setLanguage] = useState();
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <HeaderPage />
        <MainContent />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
