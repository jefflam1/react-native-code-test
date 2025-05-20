import { View, Text } from "react-native";
import React, { useContext } from "react";
import { PostPros } from "../types";
import { ThemeContext } from "../context/ThemeContext";
import { Stack } from "expo-router";

const PostDetail = ({ id, userId, title, body }: PostPros) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View
      accessible
      accessibilityLabel="Detail for each post"
      className={`p-6 h-full ${
        currentTheme === "dark" ? "bg-[#121212]" : "bg-white"
      }`}
    >
      <Stack.Screen options={{ title: title }} />
      <View className="rounded-lg w-full overflow-hidden">
        <View
          className={`w-full p-4 ${
            currentTheme === "dark" ? "bg-[#00C493]" : "bg-[#B0B0B0]"
          } flex flex-row justify-between`}
        >
          <Text className="text-lg">ID: {id}</Text>
          <Text className="text-lg">User ID: {userId}</Text>
        </View>
        <View
          className={`${
            currentTheme === "dark" ? "bg-white" : "bg-[#E0E0E0]"
          } p-4 gap-4`}
        >
          <Text className="font-bold text-xl">{title}</Text>

          <Text>{body}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostDetail;
