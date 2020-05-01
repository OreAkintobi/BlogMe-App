import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
import { Provider } from "./src/context/BlogContext";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "BlogMe",
    },
  }
);

const theme = {
  ...DefaultTheme,
  roundness: 2,
};

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};
