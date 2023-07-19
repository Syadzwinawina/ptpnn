import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CardCounter from '../components/CardCounter';
import {useRoute} from '@react-navigation/native';

const Output = () => {
  const route = useRoute();
  const {data} = route.params;
  console.log(data)
  
  return (
    <>
      <Header />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hasil Nilai Pengukuran</Text>
        <CardCounter volume={data?.volume} suhu={data?.suhu} hasil={data?.hasil}data={data} />
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
