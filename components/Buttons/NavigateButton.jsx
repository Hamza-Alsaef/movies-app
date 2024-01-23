import { StyleSheet, Pressable, Text, View } from "react-native";
import React from "react";
import { theme } from "../../constants";

const NavigateButton = ({ onPress, title }) => {
  return (
    <Pressable style={styles.Button} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default NavigateButton;

const styles = StyleSheet.create({
  Button: {
    color: "white",
    backgroundColor: theme.colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderRadius: 4,
    margin: "30%",
    padding: 10,
    fontWeight: "bold",
  },
});
