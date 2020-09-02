import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavouritesScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeals: {
      screen: CategoriesMealsScreen,
      // navigationOptions: { headerTitle: "Meals" },
    },
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : "white",
      },
      headerTintColor: Colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);
