import React from "react";
import { View } from "react-native";

const Wrapper = ({ children, ...props }) => {
  return (
    <View style={{ paddingHorizontal: "5%", ...props.style }}>{children}</View>
  );
};

export default Wrapper;
