import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import Landing from "./src/Landing";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 16,
  },
});
