import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoriesMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Categories Meals Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
