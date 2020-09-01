import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImagePropTypes,
} from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },

  container: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    padding: 15,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },

  text: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
  },
});

export default CategoryGridTile;
