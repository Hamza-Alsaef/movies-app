import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, Move } from "../components";
import { useScreen } from "../hooks";
import { theme } from "../constants";

const AllMovies = ({ route, navigation }) => {
  const screen = useScreen();
  const { movies, title } = route.params;
  const styles = StyleSheet.create({
    Contaienr: {
      backgroundColor: theme.colors.secondryDark,
      height: screen.getDeviceHeight(),
    },
    MoviesContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    Title: {
      fontSize: theme.fontSizes.title,
      color: theme.colors.primaryColor,
    },
    LableContainer: {
      flexDirection: "row",
      alignContent: "flex-start",
      alignItems: "center",
    },
  });

  const handlePress = (data) => {
    navigation.navigate("MoveDetalis", { ...data });
  };
  return (
    <SafeAreaView style={styles.Contaienr}>
      <View style={styles.LableContainer}>
        <BackButton onPress={navigation.goBack} />
        <Text style={styles.Title}>{title}</Text>
      </View>
      <View style={styles.MoviesContainer}>
        {movies.map((item, index) => (
          <Move
            title={item.title}
            key={index}
            onPress={() => handlePress(item)}
            urlImage={item.url}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default AllMovies;
