import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CommonIconBox } from "../../../../../common/components";
import material from "../../../../../native-base-theme/variables/material";

const ProgressBar = ({ indicator = 0 }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarHeading}>
        <Text style={{ color: material.secondTextColor, fontSize: 15 }}>
          Smart Ac
        </Text>
        <Text
          style={{
            color: material.mainTextColor,
            fontFamily: "Roboto_medium",
            fontSize: 15
          }}
        >
          {indicator}
        </Text>
      </View>
      <View style={styles.progressBarBox}>
        <View
          style={{ ...styles.progressBarIndicator, width: indicator }}
        ></View>
      </View>
    </View>
  );
};

const DeviceInfo = () => {
  return (
    <View style={styles.deviceInfo}>
      <CommonIconBox />
      <ProgressBar indicator="70%" />
    </View>
  );
};

const styles = StyleSheet.create({
  deviceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  progressBarContainer: {
    width: "75%"
  },
  progressBarHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  progressBarBox: {
    height: 10,
    width: "100%",
    backgroundColor: material.fourthBgColor,
    borderRadius: 50
  },
  progressBarIndicator: {
    height: 10,
    backgroundColor: material.secondActiveColor,
    borderRadius: 50
  }
});

export default DeviceInfo;
