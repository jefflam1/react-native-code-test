import "../../global.css";
import { Slot } from "expo-router";
import ThemeProvider from "../context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
};

export default RootLayout;
