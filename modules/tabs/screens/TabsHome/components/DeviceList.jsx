import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Device from "./Device";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const DeviceList = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View
          animation="fadeInRight"
          useNativeDriver={true}
          delay={1000}
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <View style={{ width: "47%", marginBottom: 20 }}>
            <Device />
          </View>
          <View style={{ width: "47%", marginBottom: 20 }}>
            <Device />
          </View>
          <View style={{ width: "47%", marginBottom: 20 }}>
            <Device />
          </View>
          <View style={{ width: "47%", marginBottom: 20 }}>
            <Device />
          </View>
          <View style={{ width: "47%", marginBottom: 20 }}>
            <Device />
          </View>
          <View style={{ width: "47%", marginBottom: 20 }}>
            <Device />
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeviceList;
