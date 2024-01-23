import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, AboutScreen, MoveDetalis, AllMovies } from "../pages";
import { globalScreenOptions } from "../constants";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={globalScreenOptions}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MoveDetalis" component={MoveDetalis} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="AllMovies" component={AllMovies} />
    </Stack.Navigator>
  );
};

export default Navigation;
