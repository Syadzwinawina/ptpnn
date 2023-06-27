import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CardCounter from '../components/CardCounter';

const Output = () => {
  return (
    <>
      <Header />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hasil Nilai Pengukuran</Text>
        <CardCounter />
      </View>
    </>
  );
};

export default Output;

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
