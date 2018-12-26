import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

class PokeList extends Component {
  render() {
    const { pokeDetails } = this.props;
    if (!pokeDetails.id) {
      return (
        <View>
          <Text style={styles.noPokemonStyle}>
            Enter a pokemon to get the details.
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.pokeListContainer}>
        <Text style={styles.pokeListHeader}>
          #{pokeDetails.id} - {pokeDetails.name.toUpperCase()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokeListContainer: {
    flex: 1,
  },
  noPokemonStyle: {
    textAlign: "center",
    fontSize: 24,
    color: "#ff1744",
  },
  pokeListHeader: {
    fontSize: 30,
    textAlign: "center",
    color: "#f50057",
  },
});

export default PokeList;
