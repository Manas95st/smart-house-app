import React from "react";
import { AppLoading } from "expo";
import { StyleProvider } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import RootNavigation from "./navigation/RootNavigation";
import material from "./native-base-theme/variables/material";
import getTheme from "./native-base-theme/components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Roboto_black: require("./common/assets/fonts/Roboto-Black.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <RootNavigation />
      </StyleProvider>
    );
  }
}
