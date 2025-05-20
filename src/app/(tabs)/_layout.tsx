import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StatusBar } from "expo-status-bar";
const TabsLayout = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: currentTheme === "dark" ? "#00C493" : "black",
          tabBarStyle: {
            backgroundColor: currentTheme === "dark" ? "#121212" : "white",
          },
          headerStyle: {
            backgroundColor: currentTheme === "dark" ? "#121212" : "white",
          },
          headerTintColor: currentTheme === "dark" ? "white" : "black",
        }}
      >
        <Tabs.Screen
          name="posts"
          options={{
            title: "Posts",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="profile" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="setting"
          options={{
            title: "Settings",
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen name="index" options={{ href: null }} />
      </Tabs>
    </>
  );
};

export default TabsLayout;
