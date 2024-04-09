import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function MainContent() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div>
        <h1>{language === "en" ? "Welcome" : "Selamat datang"}</h1>
        <p>
          {language === "en"
            ? "This is an example of a language switcher using React context."
            : "Ini adalah contoh penggunaan React context untuk mengubah bahasa."}
        </p>
      </div>
    </>
  );
}
