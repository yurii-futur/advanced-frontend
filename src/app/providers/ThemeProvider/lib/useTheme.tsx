import { useContext } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";


interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  const toggleTheme = () => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { toggleTheme, theme };
};
