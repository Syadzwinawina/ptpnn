import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CardCounterR from '../components/CardCounterR';

const Output_R = () => {
  return (
    <>
      <Header />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hasil Rendemen</Text>
        <CardCounterR />
      </View>
    </>
  );
};

export default Output_R;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 27,
  },
  text: {
    textAlign: 'center',
    padding: 30,
    marginTop: 23,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
});
