import React, { useEffect, useRef } from "react";
import { Container, View } from "native-base";
import DefaultHeader from "./DefaultHeader";
import material from "../../native-base-theme/variables/material";
import * as Animatable from 'react-native-animatable'
const withHeader = (Screen, headerbgColor = material.mainBgColor) => {


  return ({ navigation, ...props }) => {
    const screenRef = useRef(null);

    useEffect(() => {
      const unsubscribe = navigation.addListener('tabPress', e => {
        screenRef.current.fadeInRight()
      });

      return unsubscribe;
    }, [navigation]);

    return (
      <View style={{ flex: 1, backgroundColor: material.mainBgColor }} >
        <Animatable.View
          useNativeDriver={true}
          style={{
            flex: 1,
            position: "relative"
          }}
          ref={screenRef}
        >
          <DefaultHeader navigation={navigation} bgColor={headerbgColor} />

          <Screen {...props} />

          <View style={{ height: material.tabBarHeight }}></View>
        </Animatable.View>
      </View>
    );
  };
};

export default withHeader;
