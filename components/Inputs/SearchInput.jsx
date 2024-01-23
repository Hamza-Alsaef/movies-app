import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

const SearchInput = ({ onChange, value, onBlur }) => {
  return (
    <View style={styles.Container}>
      <TextInput
        onBlur={onBlur}
        value={value}
        style={styles.TextInput}
        onChange={onChange}
      />
      {/* <TouchableOpacity style={styles.SearchIcon}>
        <FontAwesome
          name="search"
          size={24}
          color={theme.colors.primaryColor}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.colors.secondryDark,
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  TextInput: {
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    flexBasis: "90%",
    borderColor: theme.colors.primaryColor,
    borderWidth: 2,
  },
  SearchIcon: {
    flexBasis: "20%",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.primaryColor,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.primaryColor,
    padding: 4,
  },
});
