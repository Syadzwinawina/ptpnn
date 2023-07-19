import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const MenuSatu = () => {

  const {user} = useContext(AuthContext); 
  // const [isBarChartVisible, setIsBarChartVisible] = useState(true);

  // const toggleChartType = () => {
  //   setIsBarChartVisible(!isBarChartVisible);
  // };

  return (
    <>
      <Header name={user?.data[2]}
      />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Dashboard </Text>
        <Image
          source={require('../../src/assets/images/cpo.jpg')}
          style={styles.image}
        />
        <NavBar activePage="MenuSatu" />
      </View>
    </>
  );
};

export default MenuSatu;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 27,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    padding: 30,
    marginTop: 23,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
});
