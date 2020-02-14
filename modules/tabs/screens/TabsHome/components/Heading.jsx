import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import material from "../../../../../native-base-theme/variables/material";
import { Text, Icon } from "native-base";
import * as Animatable from "react-native-animatable";
import { BoxShadow } from "react-native-shadow";

const HeadingLeft = () => {
  return (
    <View style={styles.headingLeft}>
      <Text
        style={{
          fontSize: 18,
          color: material.secondTextColor,
          lineHeight: 17
        }}
      >
        Good afternoon
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: material.mainTextColor,
          fontFamily: "Roboto_black",
          fontWeight: "900"
        }}
      >
        Gery Nissin
      </Text>
      <Text style={{ fontSize: 14, color: material.secondTextColor }}>
        19 devices available
      </Text>
    </View>
  );
};

const HeadingRight = () => {
  const shadowOpt = {
    width: 85,
    height: 90,
    color: "#21253b",
    border: 50,
    radius: 15,
    opacity: 0.4,
    x: 0,
    y: 0,
    style: {
      borderRadius: 15
    }
  };

  return (
    <View style={styles.headingRight}>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.headingWeatherBox}>
          <View>
            <Text style={{ textAlign: "center" }}>clear</Text>
          </View>

          <View style={{ position: "relative" }}>
            <Text style={styles.headingRightBigText}>18</Text>
            <View style={{ position: "absolute", top: 5, right: 12 }}>
              <Icon name="circle" type="Feather" style={styles.celciumIcon} />
            </View>
          </View>
        </View>
      </BoxShadow>
    </View>
  );
};

const Heading = props => {
  return (
    <Animatable.View
      animation="fadeInDown"
      style={styles.heading}
      useNativeDriver={true}
      {...props}
    >
      <HeadingLeft />
      <HeadingRight />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center"
  },
  headingLeft: {
    flex: 1
  },
  headingRight: {
    flex: 1,
    alignItems: "center"
  },
  headingWeatherBox: {
    backgroundColor: material.secondBgColor,
    paddingVertical: 7,
    color: material.mainTextColor,
    borderRadius: 15
  },
  celciumIcon: {
    color: material.mainTextColor,
    fontSize: 10
  },
  headingRightBigText: {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Roboto_black",
    fontWeight: "900",
    lineHeight: 50
  }
});

export default Heading;
