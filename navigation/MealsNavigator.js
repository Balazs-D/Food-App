import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.accentColor : "white",
  },
  headerTintColor: Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeals: {
      screen: CategoriesMealsScreen,
      // navigationOptions: { headerTitle: "Meals" },
    },
    MealDetail: MealDetailsScreen,
  },
  { defaultNavigationOptions: defaultStackNavOption }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen,
  },
  { defaultNavigationOptions: defaultStackNavOption }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
