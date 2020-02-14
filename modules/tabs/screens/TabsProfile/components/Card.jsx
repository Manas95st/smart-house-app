import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import material from "../../../../../native-base-theme/variables/material";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonText } from "../../../../../common/components";
import { Icon } from "native-base";
const { width, height } = Dimensions.get("window");

const Card = ({ children, footerTitle = 'Footer title' }) => {
  return (
    <View style={styles.paymentCards}>
      {children}

      <TouchableOpacity style={styles.paymentDetailsButton}>
        <CommonText color={material.mainTextColor} style={{}}>
          {footerTitle}
        </CommonText>

        <Icon
          type="Feather"
          name="chevron-right"
          style={{ color: material.mainTextColor }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentCards: {
    width: width * 0.8,
    marginHorizontal: width * 0.1,
    borderRadius: 7,
    backgroundColor: material.secondBgColor,
    marginBottom: 25
  },
  paymentDetailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopColor: material.secondTextColor,
    borderTopWidth: 1
  }
});

export default Card;
