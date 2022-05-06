import React, { useRef } from 'react';

import { Image, Text, StyleSheet, View, } from "react-native";
import AppBar from '../components/AppBar';

import Screen from '../components/Screen';
import colors from '../config/colors';

const StatisticsCard = () => {
  return (
    <View style={styles.card}>
      <Text style={{ textAlign: 'center', color: colors.white, fontSize: 18, fontWeight: 'bold' }}>Today's Sales</Text>
      <Text style={{ color: colors.white }}>Inam's Shop</Text>
      <Text style={{ color: colors.white }}>Amount: Rs 2000</Text>

      <View style={{ flexDirection: 'row', marginTop: '3%', }}>

        <Text style={{ color: colors.white, fontSize: 20, }}>2.1%</Text>
        <Image source={require("../assets/statistics.png")} style={{ marginLeft: '5%' }} />

      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {

  return (
    <>
      <Screen>
        <AppBar />

        <StatisticsCard />
      </Screen>

    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  card: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    margin: 12,
    padding: 10,
    shadowColor: "black"
  },
});

export default HomeScreen;