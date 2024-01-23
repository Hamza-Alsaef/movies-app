import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useScreen } from "../../hooks";
import { theme } from "../../constants";
const move = ({ urlImage, title, Data, onPress }) => {
  const screen = useScreen();

  const styles = StyleSheet.create({
    Container: {
      width: screen.getDeviceWidth() / 3,
      flex: 1,
      height: screen.getDeviceHeight() / 4,
      borderRadius: 40,
      margin: 5,
    },
    Image: {
      flex: 1,
    },
    title: {
      textAlign: "center",
      backgroundColor: theme.colors.secondryDark,
      fontWeight: "bold",
      color: "white",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <Image
        style={styles.Image}
        resizeMode="contain"
        data={Data}
        source={{ uri: urlImage }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default move;
