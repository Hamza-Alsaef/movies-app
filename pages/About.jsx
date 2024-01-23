import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { BackButton } from "../components";
import { theme } from "../constants";

const About = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: theme.colors.mainDark, height: "100%" }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});
