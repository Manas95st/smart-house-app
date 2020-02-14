import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
const { width, height } = Dimensions.get("window");

const MoonWithCircles = () => {
  return (
    <Animatable.View
      animation="fadeIn"
      delay={1500}
      style={styles.backImgContainer}
      useNativeDriver={true}
    >
      <View style={styles.backImg}>
        <View style={styles.moonCircle1}>
          <View style={styles.moonCircle2}>
            <View style={styles.moonCircle3}>
              <View style={styles.moon}>
                <View style={styles.moonBack}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  backImgContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: width / 1.8,
    height: height / 3.5,
    backgroundColor: "#141833",
    borderBottomLeftRadius: height
  },
  backImg: {
    position: "relative"
  },
  moonCircle1: {
    backgroundColor: "#1a1f39",
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderTopRightRadius: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -15,
    right: -15,
    padding: 10
  },
  moonCircle2: {
    backgroundColor: "#20263f",
    width: "90%",
    height: "90%",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  moonCircle3: {
    backgroundColor: "#252c45",
    width: "70%",
    height: "70%",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  moon: {
    backgroundColor: "#fdffeb",
    width: "60%",
    height: "60%",
    borderRadius: 150,
    position: "relative"
  },
  moonBack: {
    backgroundColor: "#252c45",
    position: "absolute",
    width: "70%",
    height: "70%",
    borderRadius: 150,
    bottom: "30%",
    left: "-10%",
    top: "5%"
  }
});

export default MoonWithCircles;
