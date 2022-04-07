import { StyleSheet, Image, useWindowDimensions } from "react-native";

import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { bulbasaur } from "../store/mockDataStore";

const singlePokemon = bulbasaur;

const Pokemon = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Layout style={styles.container}>
      <Text>{singlePokemon.name}</Text>
      <Image
        style={[
          styles.pokemonImage,
          { height: height * 0.5, width: width * 0.5 },
        ]}
        source={{
          uri: singlePokemon.sprites.front_default,
        }}
      />
    </Layout>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  pokemonImage: {},
});
