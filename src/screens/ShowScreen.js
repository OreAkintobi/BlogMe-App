import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Context } from "../context/BlogContext";
import { Surface, Button, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <ScrollView>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          icon={() => <AntDesign name="edit" size={15} color="#fff" />}
          onPress={() =>
            navigation.navigate("Edit", { id: navigation.getParam("id") })
          }
        >
          Edit Post
        </Button>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  content: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonStyle: { height: 50, justifyContent: "center" },
});

export default ShowScreen;
