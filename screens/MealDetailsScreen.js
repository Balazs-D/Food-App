import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMEal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Added to Favs!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
