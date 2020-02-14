import React from "react";
import { View, Text } from "react-native";
import { BarChart, XAxis, YAxis } from "react-native-svg-charts";
import * as Animatable from "react-native-animatable";
import material from "../../../../../native-base-theme/variables/material";

const GraphBarChart = ({ data }) => {
  const fill = material.thirdActiveColor;
  const maxValue = Math.max.apply(null, data);

  return (
    <Animatable.View
      useNativeDriver={true}
      animation="fadeInDown"
      style={{ flexDirection: "row", flex: 1, paddingHorizontal: "3%" }}
    >
      <YAxis
        data={[0, maxValue]}
        contentInset={{ top: 30, bottom: 45 }}
        svg={{
          fill: material.secondTextColor,
          fontSize: 12
        }}
        numberOfTicks={4}
        formatLabel={value => `${value}`}
      />

      <View style={{ flex: 1 }}>
        <BarChart
          style={{ height: "80%", marginBottom: 10 }}
          data={data}
          svg={{ fill }}
          contentInset={{ top: 30, bottom: 48, left: 30 }}
          spacingInner={0.4}
          spacingOuter={0.1}
        ></BarChart>

        <XAxis
          data={data}
          formatLabel={(value, index) => {
            value = value * 6;
            let leftValue = value < 10 ? "0" + value : value;
            return leftValue + ":00";
          }}
          contentInset={{ left: 55, right: 15 }}
          spacingInner={0.8}
          spacingOuter={0.8}
          style={{ width: "97%" }}
          svg={{
            fontSize: 10,
            fill: material.secondTextColor,
            fontWeight: "700"
          }}
        />
      </View>
    </Animatable.View>
  );
};

export default GraphBarChart;
