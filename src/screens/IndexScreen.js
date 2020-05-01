import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Surface, Button, Text } from "react-native-paper";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        icon="plus"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Create")}
      >
        Add a Post
      </Button>
      <FlatList
        scrollEnabled
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <Surface style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <AntDesign name="delete" size={20} color="#6200ee" />
              </TouchableOpacity>
            </Surface>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// IndexScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: (
//       <TouchableOpacity onPress={() => navigation.navigate("Create")}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.3,
    borderColor: "gray",
    elevation: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
