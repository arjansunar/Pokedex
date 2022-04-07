import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";

const PokeDex = () => {
  const navigation = useNavigation();
  const [pokeName, setPokeName] = useState("");
  const changeScreenWithData = ({ data }) => {};
  return (
    <Layout style={styles.container}>
      <Text category={"h2"} style={styles.header}>
        PokemonList
      </Text>

      <Input
        style={styles.input}
        placeholder="Search for a Pokemon"
        value={pokeName}
        onChangeText={(nextValue) => setPokeName(nextValue)}
        accessoryRight={SearchButton({
          onPress: () => navigation.navigate("Pokemon", { search: pokeName }),
        })}
      />

      <Text>{pokeName}</Text>
    </Layout>
  );
};

const SearchIcon = () => (
  <Icon style={styles.icon} fill="#000000e0" name="search-outline" />
);
const SearchButton = ({ onPress }) => (
  <Button
    style={styles.searchButton}
    accessoryLeft={SearchIcon}
    appearance={"ghost"}
    onPress={onPress}
  ></Button>
);

export default PokeDex;

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
    // backgroundColor: "red",
    flex: 1,
  },

  icon: {
    width: 32,
    height: 32,
  },
  searchButton: {
    padding: 0,
  },
});
