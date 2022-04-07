import { StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";

const PokemonList = () => {
  const navigation = useNavigation();
  return (
    <Layout style={styles.container}>
      <Text category={"h2"} style={styles.header}>
        PokemonList
      </Text>

      <Input
        style={styles.input}
        placeholder="Search for a Pokemon"
        // value={value}
        // onChangeText={(nextValue) => setValue(nextValue)}
      />

      <Icon style={{}} fill="#8F9BB3" name="search-outline" />
      <Button onPress={() => navigation.navigate("Pokemon")}>
        <Text>Go to pokemon screen </Text>
      </Button>
    </Layout>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    marginVertical: 10,
  },
  input: {
    width: "70%",
  },
});
