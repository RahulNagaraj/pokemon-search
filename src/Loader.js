import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const imageUri =
  "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif";

class Loader extends Component {
  render() {
    return (
      <View style={styles.loaderContainer}>
        <Image source={{ uri: imageUri }} style={styles.imageStyle} />
        <Text style={styles.spinnerText}>Fetching Pokemons</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
  },
  imageStyle: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default Loader;
