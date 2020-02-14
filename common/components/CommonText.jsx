import React from "react";
import { View, Text } from "react-native";

const CommonText = ({ children, color, size, weight, ...props }) => {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        ...props.style,
        fontWeight: weight || "400"
      }}
    >
      {children}
    </Text>
  );
};

export default CommonText;
