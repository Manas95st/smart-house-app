import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import material from "../../../../../native-base-theme/variables/material";
import * as Animatable from "react-native-animatable";

const RoomsList = () => {
  return (
    <Animatable.View animation="fadeInLeft" delay={500} useNativeDriver={true}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={{ position: "relative", marginRight: 40, marginBottom: 15 }}
        >
          <Text style={{ ...styles.roomButton, ...styles.roomButtonActive }}>
            Living Room
          </Text>

          <View style={styles.roomButtonActiveIndicatorBox}>
            <View style={styles.roomButtonActiveIndicator}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginRight: 40 }}>
          <Text style={{ ...styles.roomButton }}>Backyard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginRight: 40 }}>
          <Text style={{ ...styles.roomButton }}>Kitchen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginRight: 40 }}>
          <Text style={{ ...styles.roomButton }}>Dinning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginRight: 40 }}>
          <Text style={{ ...styles.roomButton }}>Backyard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginRight: 40 }}>
          <Text style={{ ...styles.roomButton }}>Kitchen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: "relative", marginRight: 40 }}>
          <Text style={{ ...styles.roomButton }}>Dinning</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  roomsList: {
    flexDirection: "row"
  },
  roomButton: {
    color: material.secondTextColor,
    fontSize: 16,
    paddingVertical: 10
  },
  roomButtonActive: {
    color: material.mainTextColor,
    fontFamily: "Roboto_medium"
  },
  roomButtonActiveIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  roomButtonActiveIndicatorBox: {
    borderRadius: 50,
    height: 9,
    width: 9,
    backgroundColor: material.secondActiveColor,
    alignSelf: "center",
    position: "relative"
  }
});

export default RoomsList;
