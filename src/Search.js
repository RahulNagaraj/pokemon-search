import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Input, Icon, Item } from "native-base";
import axios from "axios";

import Loader from "./Loader";
import PokeList from "./PokeList";

const pokemonAPIURL = "https://pokeapi.co/api/v2/pokemon";

class Search extends Component {
  state = {
    pokeText: "",
    pokeData: {},
    isFetching: false,
  };
  setPokemonText = val => {
    this.setState({
      pokeText: val,
    });
  };
  searchPoke = async () => {
    const { pokeText } = this.state;
    if (pokeText.length > 0) {
      const pokeName = pokeText.toLowerCase();
      this.setState({ isFetching: true });
      try {
        const response = await axios.get(`${pokemonAPIURL}/${pokeName}`);
        this.setState({
          pokeData: response.data,
          isFetching: false,
        });
      } catch (e) {
        console.error("Error fetching pokemon: ", e.message);
      }
    }
  };
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
    const { isFetching, pokeData } = this.state;
    return (
      <View>
        {isFetching ? <Loader /> : <PokeList pokeDetails={pokeData} />}
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
