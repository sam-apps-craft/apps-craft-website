import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("fr")}>Français</button>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      {language === "fr" ? (
        <p>Bienvenue sur notre site web en français.</p>
      ) : (
        <p>Welcome to our website in English.</p>
      )}
    </div>
  );
};

export default LanguageSwitcher;
