import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../../../context/ThemeContext";
import { Stack, useRouter } from "expo-router";
import { PostPros } from "../../../types";

const PostsScreen = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [posts, setPosts] = useState<PostPros[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const resJson = await res.json();
        setPosts(resJson);
      } catch (error) {
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <View
      className={`p-6 ${
        currentTheme === "dark" ? "bg-[#121212]" : "bg-[#E0E0E0]"
      }`}
    >
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        className="flex gap-5 h-full"
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`${
              currentTheme === "dark" ? "bg-[#E0E0E0]" : "bg-white"
            } rounded-lg p-5 mb-4`}
            onPress={() =>
              router.push({
                pathname: `/posts/${item.id}`,
                params: {
                  id: item.id.toString(),
                  userId: item.userId.toString(),
                  title: item.title,
                  body: item.body,
                },
              })
            }
            accessibilityRole="button"
            accessible={true}
            accessibilityLabel={`Open details for ${item.title}`}
          >
            <Text
              className={`text-xl ${
                currentTheme === "dark" ? "text-[#1d8f72]" : "text-black"
              }`}
              accessible={true}
              accessibilityRole="text"
              accessibilityLabel="Post's title"
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PostsScreen;
