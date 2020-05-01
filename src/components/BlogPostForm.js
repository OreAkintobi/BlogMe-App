import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.view}>
        <Button
          icon={() => <AntDesign name="save" size={15} color="#fff" />}
          mode="contained"
          style={styles.button}
          onPress={() => onSubmit(title, content)}
        >
          Save Blog Post
        </Button>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: "black",
    marginHorizontal: 10,
    margin: 5,
    padding: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default BlogPostForm;
