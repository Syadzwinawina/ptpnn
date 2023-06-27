import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import CardRiwayat from '../components/CardRiwayat';
import { useNavigation } from '@react-navigation/native';

const Riwayat = () => {
  const navigation = useNavigation();
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isBarChartVisible, setIsBarChartVisible] = useState(true); // Define isBarChartVisible state

  const toggleChartType = () => {
    setIsBarChartVisible(!isBarChartVisible); // Toggle the value of isBarChartVisible
  };

  return (
    <>
      <MainHeader label="Riwayat" onPress={() => navigation.goBack()} />
      <View style={styles.wrapper}>
        <Text style={styles.label}>Riwayat :</Text>
        <Button
          title={isBarChartVisible ? 'Grafik Sounding' : 'Grafik Rendemen'}
          onPress={toggleChartType}
          color="green"
        />

        <CardRiwayat
          detail="Senin, 4 Juli 2022"
          name="419336 Kg - Rahmat Dany Rizki"
          time="08.00 WIB"
        />
        <CardRiwayat
          detail="Senin, 4 Juli 2022"
          name="419336 Kg - Hafidh Asyi"
          time="08.00 WIB"
        />
        <CardRiwayat
          detail="Senin, 4 Juli 2022"
          name="419336 Kg - Maulida Syadzwina"
          time="08.00 WIB"
        />
      </View>
    </>
  );
};

export default Riwayat;

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
  },
  text: {
    padding: 30,
    marginTop: 23,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});
