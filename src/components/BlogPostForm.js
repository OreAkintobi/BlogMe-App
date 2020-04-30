import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ""
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.view}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          style={styles.blogBody}
          multiline={true}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <Button
          title="Save Blog Post"
          onPress={() => onSubmit(title, content)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: { marginVertical: 10 },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    margin: 5,
    padding: 5,
    marginBottom: 15,
  },
  blogBody: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    margin: 5,
    padding: 5,
    marginBottom: 15,
    height: 200,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 10,
  },
});

export default BlogPostForm;
