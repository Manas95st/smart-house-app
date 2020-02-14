import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import material from "../../../../../native-base-theme/variables/material";
import { Switch } from "native-base";
import { CommonIconBox } from "../../../../../common/components";

const Device = props => {
  const [deviceOn, setDeviceOn] = useState(false);

  return (
    <View style={styles.device} {...props}>
      <View style={styles.deviceHeader}>
        <CommonIconBox />

        <View
          style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}
        >
          <Switch
            trackColor={{
              true: material.mainBgColor,
              false: material.mainBgColor
            }}
            thumbColor={[
              deviceOn ? material.deviceOnColor : material.deviceOfColor
            ]}
            style={{
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]
            }}
            value={deviceOn}
            onValueChange={() => setDeviceOn(val => !val)}
          />
        </View>
      </View>

      <Text style={styles.deviceTitle}>Smart Ac</Text>

      <Text style={styles.deviceValue}>18</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  device: {
    backgroundColor: material.secondBgColor,
    borderRadius: 15,
    padding: 20
  },
  deviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  deviceIconBox: {
    backgroundColor: material.thirdBgColor,
    borderRadius: 7,
    height: 50,
    width: 30,
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
  },
  deviceTitle: {
    color: material.secondTextColor,
    fontSize: 17
  },
  deviceValue: {
    color: material.mainTextColor,
    fontWeight: "900",
    fontSize: 20
  }
});

export default Device;
