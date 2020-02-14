import React from "react";
import { View, Text, StyleSheet } from "react-native";
import material from "../../../../../native-base-theme/variables/material";
import { Icon } from "native-base";
import { CommonText } from "../../../../../common/components";
import * as Animatable from "react-native-animatable";
import { BoxShadow } from "react-native-shadow";

const Heading = () => {
  const shadowOpt = {
    width: 60,
    height: 60,
    color: "#23273e",
    border: 35,
    radius: 15,
    opacity: 2,
    x: 0,
    y: 0,
    style: {
      marginRight: 25
    }
  };

  return (
    <Animatable.View style={styles.heading} animation="fadeInDown" useNativeDriver={true}>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.iconBox}>
          <Icon
            type="Feather"
            name="zap"
            style={{ color: "#fff", fontSize: 25 }}
          />
        </View>
      </BoxShadow>

      <View style={styles.text}>
        <CommonText color={material.secondTextColor} size={14}>
          Today power consumed
        </CommonText>

        <CommonText color={material.mainTextColor} size={22} weight="700">
          4.5 kWh
        </CommonText>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconBox: {
    backgroundColor: material.secondBgColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    paddingVertical: 18
  },
  text: {}
});

export default Heading;
