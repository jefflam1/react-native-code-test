import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import PostDetail from "../../../components/PostDetail";

const PostDetailScreen = () => {
  const {
    id: rawId,
    userId: rawUserId,
    title: rawTitle,
    body: rawBody,
  } = useLocalSearchParams();
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const userId = Array.isArray(rawUserId) ? rawUserId[0] : rawUserId;
  const title = Array.isArray(rawTitle) ? rawTitle[0] : rawTitle;
  const body = Array.isArray(rawBody) ? rawBody[0] : rawBody;

  return <PostDetail userId={userId} id={id} title={title} body={body} />;
};

export default PostDetailScreen;
