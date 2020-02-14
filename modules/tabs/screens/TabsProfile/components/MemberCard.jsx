import React from 'react'
import { View, Image, Text } from 'react-native'
import material from "../../../../../native-base-theme/variables/material";

const MemberCard = () => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20, }}>
      <View style={{
        width: 55,
        height: 55,
        borderRadius: 55,
        backgroundColor: material.mainBgColor,
        overflow: 'hidden',
        marginBottom: 5
      }}>
        <Image
          source={require("../../../../../common/assets/img/avatar.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <Text style={{ color: material.mainTextColor }}>Name</Text>
    </View>
  )
}

export default MemberCard
