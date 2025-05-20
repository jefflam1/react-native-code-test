import { useContext } from "react";
import { View, Text, useColorScheme } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeButton from "../../components/ThemeButton";

export default function SettingScreen() {
  const { currentTheme, toggleTheme, useSystemTheme, isSystemTheme } =
    useContext(ThemeContext);

  const colorScheme = useColorScheme();

  return (
    <View
      className={`p-6 gap-4 h-full ${
        currentTheme === "dark" ? "bg-[#121212]" : "bg-[#E0E0E0]"
      }`}
    >
      <View>
        <Text
          className={`${
            currentTheme === "dark" ? "text-[#00C493]" : "text-black"
          } text-2xl font-bold`}
        >
          Theme Setting {colorScheme}
        </Text>
      </View>
      <ThemeButton
        title="Light"
        icon="weather-sunny"
        isActive={!isSystemTheme && currentTheme === "light"}
        onPress={() => {
          toggleTheme("light");
        }}
      />
      <ThemeButton
        title="Dark"
        icon="weather-night"
        isActive={!isSystemTheme && currentTheme === "dark"}
        onPress={() => {
          toggleTheme("dark");
        }}
      />
      <ThemeButton
        title="System"
        icon="theme-light-dark"
        isActive={isSystemTheme}
        onPress={() => {
          useSystemTheme();
        }}
      />
    </View>
  );
}
