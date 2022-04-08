import { StyleSheet, Image, useWindowDimensions } from "react-native";

import { Layout, Text, Button, Modal, Card } from "@ui-kitten/components";
import React, { useState } from "react";
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

  // ui kitten modal
  const [visible, setVisible] = useState(false);

  if (isLoading) return <Text>Loading</Text>;
  if (error?.status) return <Text>error</Text>;

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

      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>Modal content </Text>
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </Modal>
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
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
