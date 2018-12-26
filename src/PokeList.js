import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class PokeList extends Component {
  render() {
    const { pokeDetails } = this.props;
    return (
      <View>
        <Text>List of Pokemons</Text>
        <Text>{JSON.stringify(pokeDetails)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default PokeList;
