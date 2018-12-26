import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Input, Icon, Item } from "native-base";

import Loader from "./Loader";

class Search extends Component {
  state = {
    pokeText: "",
  };
  setPokemonText = val => {
    this.setState({
      pokeText: val,
    });
  };
  searchPoke = () => {};
  renderHeader = () => {
    const { pokeText } = this.state;
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" onPress={this.searchPoke} />
          <Input
            value={pokeText}
            placeholder="Search Pokemon"
            onChangeText={this.setPokemonText}
          />
        </Item>
      </Header>
    );
  };
  renderBody = () => {
    return (
      <View>
        <Loader />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.searchContainer}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
  },
});

export default Search;
