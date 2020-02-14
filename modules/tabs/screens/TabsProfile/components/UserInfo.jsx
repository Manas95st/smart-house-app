import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { CommonWrapper } from "../../../../../common/components";
import material from "../../../../../native-base-theme/variables/material";
import { Icon } from "native-base";

const UserInfo = () => {
  return (
    <CommonWrapper style={{ alignItems: "center" }}>
      <View style={styles.avatar}>
        <Image
          source={require("../../../../../common/assets/img/avatar.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      <View style={{ position: "relative", marginBottom: 10 }}>
        <Text style={styles.name}>Bryan Sonnen</Text>
        <TouchableOpacity style={{
          position: 'absolute',
          right: -20,
          top: 0,
        }}>
          <Icon type="Feather" name="more-vertical" style={styles.detailsButton} />
        </TouchableOpacity>
      </View>
      <Text style={styles.address}>Philadelphi, PA</Text>
    </CommonWrapper>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 80,
    height: 80,
    width: 80,
    overflow: "hidden",
    backgroundColor: material.secondBgColor,
    marginBottom: 15
  },
  name: {
    color: material.mainTextColor,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 20,
  },
  address: {
    color: material.thirdActiveColor,
    marginBottom: 25
  },
  detailsButton: {
    color: material.secondTextColor,

    fontSize: 20
  }
});

export default UserInfo;
