import { Dimensions } from "react-native";

const useScreen = () => {
  const getDeviceWidth = () => {
    return Dimensions.get("window").width;
  };
  const getDeviceHeight = () => {
    return Dimensions.get("window").height;
  };

  return { getDeviceWidth, getDeviceHeight };
};

export default useScreen;
