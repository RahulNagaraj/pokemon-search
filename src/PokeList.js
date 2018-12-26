import React from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { ListItem, List } from "native-base";

const { height, width } = Dimensions.get("window");
const backgroundImageURI =
  "http://pokemongolive.com/img/posts/raids_loading.png";

class PokeList extends React.Component {
  render() {
    var pokemon = this.props.pokeDetails;
    if (!pokemon.id) {
      return <View />;
    }
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: backgroundImageURI }}
      >
        <ScrollView style={{ flexDirection: "column" }}>
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>
            <ListItem>
              <Text>Weight - {pokemon.weight}</Text>
            </ListItem>
            <ListItem>
              <Text>Height - {pokemon.height}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>
            <List
              dataArray={pokemon.abilities}
              renderRow={item => (
                <ListItem>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              )}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  img: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  backgroundImage: {
    flexDirection: "column",
    resizeMode: "cover",
    width: width,
    height: height,
    opacity: 0.9,
  },
  info: {
    flexDirection: "column",
    backgroundColor: "white",
    opacity: 0.8,
  },
};

export default PokeList;
