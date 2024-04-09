import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function HeaderPage() {
  const { setLanguage } = useContext(LanguageContext);
  function switchLanguage(languageSelected) {
    setLanguage(languageSelected.toLowerCase());
  }
  return (
    <>
      <header>
        <h1>Language Switcher Example</h1>
        <button type="button" onClick={() => switchLanguage("en")}>
          EN
        </button>
        <button type="button" onClick={() => switchLanguage("id")}>
          ID
        </button>
      </header>
    </>
  );
}
