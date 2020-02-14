import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import material from "../../../../../native-base-theme/variables/material";
import { CommonText } from "../../../../../common/components";

const PaymentMethod = ({ bordered }) => {
  return (
    <TouchableOpacity>
      <View style={styles.paymentCard}>
        <View style={styles.cardLogo}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../../../../common/assets/img/master-card.png")}
            resizeMode="cover"
          />
        </View>
        <View style={[styles.cardDetail, bordered ? styles.withBorder : null]}>
          <CommonText
            size={13}
            color={material.secondTextColor}
            style={{ marginBottom: 5 }}
          >
            Mastercard Debit
          </CommonText>
          <View style={styles.cardNumbers}>
            <View style={styles.cardNumberRow}>
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
            </View>

            <View style={styles.cardNumberRow}>
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
            </View>

            <View style={styles.cardNumberRow}>
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
              <View style={styles.hidedNumber} />
            </View>

            <CommonText color={material.mainTextColor} size={15}>
              1908
            </CommonText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentCard: {
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  cardLogo: {
    width: "18%",
    marginHorizontal: 15,
    height: 50
  },
  cardDetail: {
    paddingVertical: 20,
    paddingRight: 20
  },
  withBorder: {
    borderBottomColor: material.secondTextColor,
    borderBottomWidth: 1
  },
  cardNumbers: {
    flexDirection: "row",
    alignItems: "center"
  },
  cardNumberRow: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  hidedNumber: {
    width: 6,
    height: 6,
    marginRight: 5,
    backgroundColor: material.mainTextColor,
    borderRadius: 5
  }
});

export default PaymentMethod;
