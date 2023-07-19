import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Header, Input, Gap, Button, NavBar } from '../components';
import { AuthContext } from './AuthContext';

export default function Beranda({ navigation }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [suhu, setSuhu] = useState('');
  const [beda, setBeda] = useState('');
  const [meja, setMeja] = useState('');
  const [items, setItems] = useState([
    { label: 'Tangki CPO 1', value: 'cpo1' },
    { label: 'Tangki CPO 2', value: 'cpo2' },
  ]);


  const handleCount = useCallback(async () => {
    try {
      const res = await axios.post('http://10.0.2.2:105/sounding', {
        nama: user?.data[2].toString(),
        tangki: selectedValue, // Gunakan selectedValue untuk mengirim nilai tangki yang dipilih
        tinggi: tinggi,
        suhu: suhu,
        beda: beda,
        meja: meja,
      });

      console.log('hasil', res?.data);
      if (res?.data?.error === 'false') {
        navigation.navigate('Output', { data: res?.data });
      }
    } catch (error) {
      console.log(error);
    }
  }, [beda, items, meja, navigation, suhu, tinggi, user]);

 const {user} = useContext(AuthContext)

  return (
    <>
      <Header name={user?.data[2]} />
      <Text style={styles.text}>Pemasukan Nilai Pengukuran</Text>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Input
            label="Tinggi :"
            height={30}
            labelOn
            onChangeText={(text) => setTinggi(text)}
          />
          <Gap height={15} />
          <Input
            label="Suhu :"
            height={30}
            labelOn
            onChangeText={(text) => setSuhu(text)}
          />
          <Gap height={15} />
          <Input
            label="Beda :"
            height={30}
            labelOn
            onChangeText={(text) => setBeda(text)}
          />
          <Gap height={15} />
          <Input
            label="Meja :"
            height={30}
            labelOn
            onChangeText={(text) => setMeja(text)}
          />
          <Gap height={15} />
          <Text style={styles.label}>Tangki :</Text>
          <DropDownPicker
          style={styles.picker}
          placeholder="Pilih Tangki"
          open={open}
          value={selectedValue}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedValue}
          setItems={setItems}
          onValueChange={(value) => setSelectedValue(value)}
/>
          <Gap height={55} />
          <Button label="Hitung" onPress={handleCount} />
        </View>
      </View>
      <NavBar activePage="Beranda" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
