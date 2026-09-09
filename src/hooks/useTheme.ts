import { useCallback, useEffect, useState } from "react";

export const THEMES = [
  { id: "nocny-orzech", name: "Nocny Orzech", swatch: "24 95% 53%" },
  { id: "terakota", name: "Terakota Premium", swatch: "12 52% 56%" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "wp-theme";
const DEFAULT_THEME: ThemeId = "nocny-orzech";

const isThemeId = (value: string | null): value is ThemeId =>
  THEMES.some((theme) => theme.id === value);

const readStoredTheme = (): ThemeId => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isThemeId(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

/** Ustawia motyw na <html data-theme="…">. Wywoływane też z main.tsx przed renderem. */
export const applyTheme = (theme: ThemeId) => {
  document.documentElement.dataset.theme = theme;
};

export const initTheme = () => applyTheme(readStoredTheme());

export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeId>(readStoredTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* prywatny tryb przeglądarki — motyw działa, po prostu się nie zapamięta */
    }
  }, [theme]);

  const setTheme = useCallback((next: ThemeId) => setThemeState(next), []);

  return { theme, setTheme, themes: THEMES };
};
