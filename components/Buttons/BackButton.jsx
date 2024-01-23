import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../constants";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} styles={styles.Container}>
      <AntDesign
        name="arrowleft"
        size={24}
        style={styles.Container}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  Container: {
    width: 45,
    padding: 6,
    margin: 10,
    borderRadius: 60,
    backgroundColor: theme.colors.primaryColor,
  },
});
