import { Stack } from "expo-router";
import { useContext } from "react";

import { ThemeContext } from "../../../context/ThemeContext";
import { StatusBar } from "expo-status-bar";

const PostsLayout = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Posts",
            headerStyle: {
              backgroundColor: currentTheme === "dark" ? "#121212" : "white",
            },
            headerTintColor: currentTheme === "dark" ? "white" : "black",
          }}
        />
      </Stack>
    </>
  );
};

export default PostsLayout;
