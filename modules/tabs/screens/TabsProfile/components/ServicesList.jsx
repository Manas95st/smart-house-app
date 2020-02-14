import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import ServiceCard from "./ServiceCard";
import { ScrollView, FlatList } from "react-native-gesture-handler";

const { width, hight } = Dimensions.get("window");

const ServicesList = () => {
  const scrollRef = useRef(null)

  const [activeCardId, setActiveCardId] = useState(0);

  const cardsInfo = [
    {
      icon: "zap",
      color: "#f05669",
      heading: "Electrical bill"
    },
    {
      icon: "shield",
      color: "#828ff3",
      heading: "Home security"
    },
    {
      icon: "feather",
      color: "#00c58e",
      heading: "Garden Service"
    }
  ];
  const cardBetweenWidth = Math.ceil(width * 0.17);
  const cardWidth = Math.ceil(width * 0.65);
  const snapInterval = cardWidth;

  const scrollHandler = event => {
    const posX = Math.round(event.nativeEvent.contentOffset.x);
    setActiveCardId(-1);

    if (posX >= 0 && posX < cardBetweenWidth) {
      setActiveCardId(0);
    } else if (
      posX >= cardBetweenWidth &&
      posX < snapInterval + cardBetweenWidth
    ) {
      setActiveCardId(1);
    } else if (posX > snapInterval && posX > snapInterval * 2) {
      setActiveCardId(2);
    }
  };

  useEffect(() => {
    scrollRef.current.scrollToOffset({ offset: snapInterval + cardBetweenWidth / 2 })
  }, [])

  return (
    <>
      <SafeAreaView style={{ alignItems: 'center' }}>
        <FlatList
          ref={scrollRef}
          data={cardsInfo}
          renderItem={({ item, index }) => <ServiceCard
            hide={activeCardId !== index}
            data={item}
            style={{
              marginHorizontal: index === 1 ? cardBetweenWidth / 2 : 0
            }}
          />}
          keyExtractor={(item) => item.color}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: cardBetweenWidth,
            marginBottom: 25,
            textAlign: 'center'
          }}
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
          bouncesZoom={false}
          centerContent
          decelerationRate={0}
          snapToInterval={snapInterval + cardBetweenWidth / 2}
          alwaysBounceHorizontal={false}
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </SafeAreaView>
    </>
  );
};

export default ServicesList;
