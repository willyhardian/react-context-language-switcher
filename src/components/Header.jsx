export default function Header() {
  function switchLanguage(languageSelected) {}
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
