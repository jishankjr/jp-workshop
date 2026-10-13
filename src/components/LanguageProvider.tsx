
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "np";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("jp-workshop-language");

      if (savedLanguage === "en" || savedLanguage === "np") {
        setLanguageState(savedLanguage);
      }
    } catch {
      // Use English if browser storage is unavailable.
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.lang = language === "np" ? "ne" : "en";

    try {
      localStorage.setItem("jp-workshop-language", language);
    } catch {
      // Language selection still works for this session.
    }
  }, [language, ready]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
