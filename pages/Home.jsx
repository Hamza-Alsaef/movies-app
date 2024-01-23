import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListMovies, SearchButton, SearchInput } from "../components";
import { theme } from "../constants";
import { useRef, useState } from "react";

const data = [
  {
    id: 0,
    title: "black of lagend",
    url: "https://random.imagecdn.app/400/500",
    descreption:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

    data: { name: "hamza", id: 123 },
  },
  {
    id: 1,
    title: "rise of lagend",
    url: "https://random.imagecdn.app/400/500",
    descreption:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

    data: { name: "hamza", id: 123 },
  },
  {
    id: 2,
    title: "rise of lagend",
    url: "https://random.imagecdn.app/400/500",
    descreption:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    data: { name: "hamza", id: 123 },
  },
  {
    id: 3,
    title: "rise of lagend",
    url: "https://random.imagecdn.app/400/500",
    descreption:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

    data: { name: "hamza", id: 123 },
  },
];

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState(data || null);
  const [searched, setSearched] = useState(false);
  const [argoment, setArgoment] = useState("");

  const handleChane = (e) => {
    setArgoment(e.nativeEvent.text);
  };

  const handleSearchPress = () => {
    if (!searched) {
      return setSearched(true);
    }
    filterMovies();
    setSearched(false);
  };
  const handleBlur = () => {
    setSearched(!searched);
  };
  const filterMovies = (argoment) => {
    if (!argoment) return;
    setMovies(() => {
      return movies.filter(({ title }) => title.startsWith(argoment));
    });
  };
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: theme.colors.mainDark,
          gap: 10,
          height: "100%",
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            alignItems: "center",
            padding: 20,
          }}
        >
          <SearchButton onPress={handleSearchPress} />
          {searched && (
            <SearchInput
              value={argoment}
              onBlur={handleBlur}
              onChange={handleChane}
            />
          )}
        </View>
        {!searched && (
          <ScrollView>
            <ListMovies
              data={movies}
              navigation={navigation}
              title={"most populer"}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
