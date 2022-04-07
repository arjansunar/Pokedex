import { StyleSheet, Image, useWindowDimensions } from "react-native";

import { Layout, Text, Button } from "@ui-kitten/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { useGetPokemonByNameQuery } from "../api/slice/pokemon.slice";

const Pokemon = () => {
  const dispatch = useDispatch();
  // const { count } = useSelector((state) => state?.counter);
  const { height, width } = useWindowDimensions();
  const route = useRoute();
  const { search } = route.params;

  // rtk
  const { data, error, isLoading } = useGetPokemonByNameQuery(`${search}`);

  if (isLoading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  return (
    <Layout style={styles.container}>
      <Text>{data.name}</Text>
      <Image
        style={[
          styles.pokemonImage,
          { height: height * 0.5, width: width * 0.5 },
        ]}
        source={{
          uri: data.sprites.front_default,
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

  pokemonImage: {
    resizeMode: "contain",
  },
});
