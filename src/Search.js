import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Header,
  Input,
  Icon,
  Button,
  Item,
  Left,
  Body,
  Title,
} from "native-base";

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
  render() {
    const { pokeText } = this.state;
    return (
      <View>
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
