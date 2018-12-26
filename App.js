import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import Landing from "./src/Landing";
import Search from "./src/Search";

export default class App extends React.Component {
  state = {
    currentScreen: "search",
  };
  switchScreen = currentScreen => {
    this.setState({ currentScreen });
  };
  renderScreen = () => {
    const { currentScreen } = this.state;
    switch (currentScreen) {
      case "landing":
        return <Landing switchScreen={this.switchScreen} />;
      case "search":
        return <Search />;
      default:
        break;
    }
  };
  render() {
    return <View style={styles.container}>{this.renderScreen()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 16,
  },
});
