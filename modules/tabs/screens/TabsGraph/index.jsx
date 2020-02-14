import React, { useState, useEffect } from "react";
import { Text, View } from "native-base";
import withHeader from "../../withHeader";
import material from "../../../../native-base-theme/variables/material";
import { CommonWrapper } from "../../../../common/components";
import { GraphDeviceList, GraphHeading, GraphBarChart } from "./components";

const TabsGraph = props => {
  const [data, setData] = useState([0.5, 1.2, 1.5, 0.5, 1.2]);

  return (
    <View style={{ flex: 1 }}>
      <CommonWrapper
        style={{
          flex: 0.5,
          backgroundColor: material.fourthBgColor
        }}
      >
        <GraphHeading />

        <GraphBarChart data={data} />
      </CommonWrapper>

      <GraphDeviceList />
    </View>
  );
};

export default withHeader(TabsGraph, material.fourthBgColor);
