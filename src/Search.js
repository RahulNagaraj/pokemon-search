import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Input, Icon, Item } from "native-base";

import Loader from "./Loader";
import PokeList from "./PokeList";

class Search extends Component {
  state = {
    pokeText: "",
    isFetching: true,
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
    const { isFetching } = this.state;
    return <View>{isFetching ? <Loader /> : <PokeList />}</View>;
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
