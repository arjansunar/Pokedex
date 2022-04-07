import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { Pokemon, PokeDex } from "./src/screens";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const Stack = createNativeStackNavigator();

export default () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={PokeDex} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </Provider>
);
