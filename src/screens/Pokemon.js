import { StyleSheet, Image, useWindowDimensions } from "react-native";

import { Layout, Text, Button } from "@ui-kitten/components";
import React from "react";
import { bulbasaur } from "../store/mockDataStore";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/CounterSlice";
import { useRoute } from "@react-navigation/native";

const singlePokemon = bulbasaur;

const Pokemon = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state?.counter);
  const { height, width } = useWindowDimensions();
  const route = useRoute();
  const { search } = route.params;
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

      <Text>name {search}</Text>
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
