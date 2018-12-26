import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import { Button } from "native-base";

const backgroundImage = require("./assets/landing.jpg");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.imageStyle}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              style={styles.buttonStyle}
              block={true}
              onPress={() => alert("started")}
            >
              <Text style={styles.buttonText}>Start Searching...</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 16,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 32,
    color: "#2c387e",
    textAlign: "center",
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
});
