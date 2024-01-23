import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../../constants";
import { useScreen } from "../../hooks";

const SearchButton = ({ onPress }) => {
  const screen = useScreen();
  const styles = StyleSheet.create({
    SearchIcon: {
      width: screen.getDeviceWidth() / 8,
      height: screen.getDeviceWidth() / 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.primaryColor,
      borderRadius: screen.getDeviceWidth(),
      padding: 6,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.SearchIcon}>
      <FontAwesome name="search" size={24} color={theme.colors.light} />
    </TouchableOpacity>
  );
};

export default SearchButton;
