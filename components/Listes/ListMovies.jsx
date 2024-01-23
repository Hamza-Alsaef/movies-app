import { Pressable, StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { Move } from "..";
import { theme } from "../../constants";

const ListMovies = ({ title, data, navigation }) => {
  const styles = StyleSheet.create({
    ButtonsContainer: {
      marginHorizontal: 10,
      marginVertical: 0,
      flexDirection: "row",
      color: theme.colors.primaryColor,
      justifyContent: "space-between",
    },
    Title: {
      color: theme.colors.primaryColor,
      fontSize: theme.fontSizes.medium,
      margin: 0,
    },
    ShowMoreButton: {
      alignItems: "center",
      fontSize: theme.fontSizes.small,
      backgroundColor: theme.colors.primaryColor,
      padding: 5,
      borderRadius: 20,
      color: theme.colors.light,
    },
  });

  const showAll = () => {
    navigation.navigate("AllMovies", { movies: data, title });
  };
  const handleMovePress = (data) => {
    navigation.navigate("MoveDetalis", { ...data });
  };
  return (
    <View>
      <View style={styles.ButtonsContainer}>
        <Text style={styles.Title}>{title}</Text>
        <Pressable onTouchEnd={() => showAll(data)}>
          <Text style={styles.ShowMoreButton}>show more</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <Move
            urlImage={item.url}
            onPress={() => handleMovePress(item)}
            title={item.title}
            Data={item.data}
          />
        )}
        key={({ item }) => item.id}
      />
    </View>
  );
};

export default ListMovies;
