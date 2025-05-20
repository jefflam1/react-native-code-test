import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ThemeButtonProps = {
  title: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress: () => void;
  isActive: boolean;
};

const ThemeButton = ({ title, icon, onPress, isActive }: ThemeButtonProps) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      className={`${
        currentTheme === "dark" ? "bg-[#E0E0E0]" : "bg-white"
      } rounded-lg p-5`}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`It is a button to change ${title} mode`}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={currentTheme === "dark" ? "#1d8f72" : "black"}
          />
          <Text
            className={`${
              currentTheme === "dark" ? "text-[#1d8f72]" : "text-black"
            }`}
          >
            {title}
          </Text>
        </View>
        <MaterialCommunityIcons
          name={
            isActive
              ? "checkbox-marked-circle"
              : "checkbox-blank-circle-outline"
          }
          size={20}
          color={currentTheme === "dark" ? "#1d8f72" : "black"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ThemeButton;
