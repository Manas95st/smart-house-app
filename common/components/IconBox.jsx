import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import material from "../../native-base-theme/variables/material";

const IconBox = () => {
  return (
    <View style={styles.deviceIconBox}>
      <View style={styles.deviceIcon}>
        <Image
          style={{
            width: "100%"
          }}
          overlayColor={material.activeColor}
          resizeMode="contain"
          source={require("../assets/icons/smart-house/025-television.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deviceIconBox: {
    backgroundColor: material.thirdBgColor,
    borderRadius: 7,
    height: 50,
    width: 40,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  deviceIcon: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        translateX: 15
      }
    ]
  }
});

export default IconBox;
