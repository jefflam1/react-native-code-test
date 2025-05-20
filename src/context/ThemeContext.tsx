import { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeContextType, ThemeType } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext<ThemeContextType>({
  isSystemTheme: false,
  currentTheme: "dark",
  toggleTheme: () => {},
  useSystemTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [systemTheme, setSystemTheme] = useState<boolean>(false);
  const colorScheme = useColorScheme();

  const toggleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setSystemTheme(false);
    AsyncStorage.setItem("theme", newTheme);
  };

  const useSystemTheme = () => {
    if (colorScheme) {
      setTheme(colorScheme);
      setSystemTheme(true);
      AsyncStorage.setItem("theme", colorScheme);
    }
  };

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = (await AsyncStorage.getItem("theme")) as ThemeType;
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log("Error in loading theme.", error);
      }
    };

    getTheme();
  }, []);

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme);
      AsyncStorage.setItem("theme", colorScheme);
    }
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggleTheme,
        useSystemTheme,
        isSystemTheme: systemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
