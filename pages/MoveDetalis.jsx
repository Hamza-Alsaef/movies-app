import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useScreen } from "../hooks";
import StarRating from "react-native-star-rating";
import { theme } from "../constants";
import { BackButton } from "../components";

const MoveDetalis = ({ navigation, route }) => {
  const { id, url: urlImage, title, descreption } = route.params;
  //   status
  const screen = useScreen();

  const styles = StyleSheet.create({
    Container: {
      backgroundColor: theme.colors.secondryDark,
      width: "100%",
    },
    Image: {
      width: screen.getDeviceWidth(),
      height: screen.getDeviceHeight() / 2,
    },
    Title: {
      fontWeight: "bold",
      marginVertical: 10,
      color: theme.colors.primaryColor,
      fontSize: theme.fontSizes.title,
      textAlign: "center",
    },
    Descreption: {
      color: theme.colors.light,
      textAlign: "center",
      marginVertical: 10,
      height: screen.getDeviceHeight() / 4,
      marginHorizontal: 20,
    },
    StarContainer: {
      marginHorizontal: screen.getDeviceWidth() / 3,
      marginVertical: 10,
    },
  });

  return (
    <SafeAreaView>
      <Image
        resizeMode="cover"
        style={styles.Image}
        source={{ uri: urlImage }}
      />
      <View style={{ position: "absolute", top: 40 }}>
        <BackButton onPress={navigation.goBack} />
      </View>
      <ScrollView style={styles.Container}>
        <View>
          <Text style={styles.Title}>{title}</Text>
          <View style={styles.StarContainer}>
            <StarRating
              starSize={16}
              maxStars={5}
              selectedStar={4}
              rating={4}
              disabled={true}
              starStyle={{ color: "yellow" }}
            />
          </View>
          <Text style={styles.Descreption}>{descreption}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoveDetalis;
