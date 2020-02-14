import React, { useEffect, useState } from "react";
import withHeader from "../../withHeader";
import {
  HomeHeading,
  RoomsList,
  HomeDeviceList,
  MoonWithCircles
} from "./components";
import { CommonWrapper } from "../../../../common/components";
import { StyleSheet } from "react-native";

const TabsHome = () => {


  return (
    <>
      <MoonWithCircles />

      <CommonWrapper style={{ flex: 1, position: "relative" }}>
        <HomeHeading />
        <RoomsList />
        <HomeDeviceList />
      </CommonWrapper>
    </>
  );
};

const styles = StyleSheet.create({});

export default withHeader(TabsHome);
