import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { CommonWrapper, CommonText } from "../../../../../common/components";
import material from "../../../../../native-base-theme/variables/material";
import DeviceInfo from "./DeviceInfo";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const Heading = () => {
  return (
    <View style={styles.heading}>
      <CommonText
        color={material.mainTextColor}
        size={18}
        style={{ marginBottom: "8%", marginTop: "8%" }}
      >
        Power Usage
      </CommonText>
    </View>
  );
};

const DeviceList = props => {
  return (
    <Animatable.View
    useNativeDriver={true}
      animation="fadeInUp"
      style={{ flex: 0.5, paddingHorizontal: "5%" }}
      delay={500}
      {...props}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading />

        <SafeAreaView style={{ flex: 1 }}>
          <DeviceInfo />
          <DeviceInfo />
          <DeviceInfo />
          <DeviceInfo />
        </SafeAreaView>
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default DeviceList;
