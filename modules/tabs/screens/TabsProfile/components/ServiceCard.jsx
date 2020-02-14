import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated
} from "react-native";
import { Icon } from "native-base";
import material from "../../../../../native-base-theme/variables/material";

const { width, hight } = Dimensions.get("window");

const ServiceCard = ({ data, hide, ...props }) => {
  const scaleYAnimationValue = hide ? 0.8 : 1;
  const opacityAnimationValue = hide ? 0 : 1;
  const [scaleYValue] = useState(new Animated.Value(scaleYAnimationValue));
  const [opacityValue] = useState(new Animated.Value(opacityAnimationValue));

  const textColor = hide ? data.color : material.mainTextColor;
  const borderColor = hide ? data.color : "#ffffff7a";

  useEffect(() => {
    Animated.timing(scaleYValue, {
      toValue: scaleYAnimationValue,
      duration: 500,
      useNativeDriver: true
    }).start();

    Animated.timing(opacityValue, {
      toValue: opacityAnimationValue,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, [hide]);

  const scaleY = scaleYValue.interpolate({
    inputRange: [0.8, 1],
    outputRange: [0.8, 1]
  });

  const opacity = opacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  return (
    <Animated.View
      style={{
        ...styles.card,
        backgroundColor: data.color,
        transform: [
          {
            scaleY: scaleY
          }
        ],
        ...props.style
      }}
    >
      <Animated.View
        style={{
          ...styles.cardHeader,
          paddingVertical: 20,
          paddingHorizontal: 20,
          opacity: opacity,
          borderBottomColor: borderColor
        }}
      >
        <View
          style={{
            ...styles.iconRound,
            borderColor: textColor
          }}
        >
          <Icon
            type="Feather"
            name={data.icon}
            fontSize="25"
            style={{ color: textColor }}
          />
        </View>
        <Text
          style={{
            textTransform: "uppercase",
            color: textColor,
            fontWeight: "700",
            fontSize: 17
          }}
        >
          {data.heading}
        </Text>
      </Animated.View>

      <Animated.View
        style={{
          ...styles.cardDetails,
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderBottomColor: borderColor,
          opacity: opacity
        }}
      >
        <Text
          style={{
            marginBottom: 5,
            color: textColor
          }}
        >
          {data.heading} ends
        </Text>

        <Text
          style={{
            marginBottom: 5,
            color: textColor,
            fontWeight: "700",
            fontSize: 18,
            marginBottom: 10
          }}
        >
          Dec 31. 2020 8:05 PM
        </Text>

        <Text
          style={{
            marginBottom: 5,
            color: textColor,
            opacity: 0.5,
            fontSize: 15
          }}
        >
          Amerlcfan Nome Shfeld Co
        </Text>
      </Animated.View>

      <Animated.View
        style={{
          opacity: opacity
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.cardFooter,
            paddingVertical: 20,
            paddingHorizontal: 20
          }}
        >
          <Text
            style={{
              color: textColor,
              fontSize: 17
            }}
          >
            {data.heading} details
          </Text>
          <Icon
            type="Feather"
            name="chevron-right"
            style={{ color: textColor }}
          />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.65,
    alignItems: "center",
    borderRadius: 5
  },
  cardHeader: {
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  iconRound: {
    borderRadius: 50,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,

    marginBottom: 10
  },
  cardDetails: {
    width: "100%",

    borderBottomWidth: 1
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default ServiceCard;
