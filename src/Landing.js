import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "native-base";

const backgroundImage = require("../assets/landing.jpg");

class Landing extends Component {
  render() {
    const { switchScreen } = this.props;
    return (
      <View>
        <ImageBackground source={backgroundImage} style={styles.imageStyle}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              style={styles.buttonStyle}
              block={true}
              onPress={() => switchScreen("search")}
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
    backgroundColor: "#2979ff",
  },
  buttonText: {
    color: "white",
  },
});

export default Landing;
