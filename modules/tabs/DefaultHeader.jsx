import React from "react";
import { Header, Left, Body, Right } from "native-base";
import { TouchableOpacity, View } from "react-native";
import material from "../../native-base-theme/variables/material";
import { CommonWrapper } from "../../common/components";

function MenuIcon({ clicked, ...props }) {
  return (
    <TouchableOpacity
      style={{
        height: 20,
        width: 30,
        justifyContent: "space-between",
        ...props.style
      }}
      onPress={clicked}
    >
      <View
        style={{
          backgroundColor: material.toolbarBtnColor,
          height: 2.5,
          borderRadius: 25
        }}
      ></View>
      <View
        style={{
          backgroundColor: material.toolbarBtnColor,
          height: 2.5,
          borderRadius: 25,
          width: "60%"
        }}
      ></View>
      <View
        style={{
          backgroundColor: material.toolbarBtnColor,
          height: 2.5,
          borderRadius: 25
        }}
      ></View>
    </TouchableOpacity>
  );
}

function DefaultHeader({ navigation, bgColor = material.mainBgColor }) {
  return (
    <Header
      style={{
        height: material.toolbarHeight,
        paddingHorizontal: 0,
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
      noShadow
      backgroundColor={bgColor}
    >
      <Left>
        <MenuIcon clicked={() => navigation.openDrawer()} />
      </Left>
      <Body></Body>
      <Right></Right>
    </Header>
  );
}

export default DefaultHeader;
