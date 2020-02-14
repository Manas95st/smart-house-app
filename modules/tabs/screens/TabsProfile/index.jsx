import React, { useState } from "react";
import withHeader from "../../withHeader";
import { UserInfo, ServicesList, Card, PaymentMethod, MemberCard } from "./components";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsProfile = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0)
  const family = [
    {
      id: '0',
      image: 'avatar.jpg'
    },
    {
      id: '1',
      image: 'avatar.jpg'
    },
    {
      id: '2',
      image: 'avatar.jpg'
    },
    {
      id: '3',
      image: 'avatar.jpg'
    },
    {
      id: '4',
      image: 'avatar.jpg'
    }
  ]

  const paymentMethods = [
    {
      id: '0'
    },
    {
      id: '1'
    }
  ]

  const scrollHandler = (e) => {
    console.log(e.nativeEvent.contentOffset.y);
  }

  return (
    <Animatable.View animation="fadeInDown" style={{ flex: 1 }} useNativeDriver={true}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} onScroll={scrollHandler} >
          <UserInfo />

          <ServicesList />

          <Card footerTitle="Family access">
            <FlatList
              data={family}
              contentContainerStyle={{ padding: 20, }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={() => <MemberCard />}
              keyExtractor={(item) => item.id}
            />
          </Card>

          <Card footerTitle="Payment methods">
            <FlatList data={paymentMethods} keyExtractor={(item) => item.id} renderItem={({ item, index }) => (
              <PaymentMethod bordered={index === 0} />
            )} />
          </Card>
        </ScrollView>
      </SafeAreaView>
    </Animatable.View>
  );
};

export default withHeader(TabsProfile);
