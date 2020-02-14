import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import material from "../native-base-theme/variables/material";
import { Home, Graph, Profile } from "../modules/tabs/screens";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  inactiveBackgroundColor: material.secondBgColor,
  activeBackgroundColor: material.secondBgColor,
  showLabel: false,
  style: {
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    borderTopWidth: 0,
    height: material.tabBarHeight,
    borderTopWidth: 0
  },
  showIcon: true,
  inactiveTintColor: material.secondTextColor,
  activeTintColor: material.activeColor,
  animationEnabled: true
};

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}  >
      <Tab.Screen
        name="Rooms"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" type="Feather" style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Graph}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="graph"
              type="SimpleLineIcons"
              style={{ color: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" type="Feather" style={{ color: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
