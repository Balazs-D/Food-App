import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoriesMeals: CategoriesMealsScreen,
  MealDetail: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);
