import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Spinner } from "native-base";

class Loader extends Component {
  render() {
    return (
      <View>
        <Spinner color="#33bfff" />
        <Text style={styles.spinnerText}>Fetching Pokemons</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default Loader;
