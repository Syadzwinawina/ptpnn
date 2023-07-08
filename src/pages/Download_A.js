import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const Download_A = () => {
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
  ]);

  const handleValueChange = (itemValue) => {
    setValue(itemValue);
  };

  const handleDownload = () => {
    if (value) {
      const requestData = {
        bulan: value,
      };

      axios
        .post('http://10.0.2.2:105/hasil_sounding_admin', requestData)
        .then((response) => {
          const { filename } = response.data;
          console.log('Download berhasil:', filename);
          Alert.alert('Download Berhasil', `File PDF ${filename} berhasil diunduh.`);
        })
        .catch((error) => {
          console.error('Download gagal:', error);
          Alert.alert('Download Gagal', 'Terjadi kesalahan saat melakukan download.');
        });
    } else {
      console.warn('Pilih bulan terlebih dahulu');
      Alert.alert('Pilih Bulan', 'Silakan pilih bulan sebelum melakukan download.');
    }
  };

  return (
    <>
      <MainHeader label="Download Data" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.username}>Apakah Anda Ingin Mendownload Data?</Text>
          <Text style={styles.username}>Silahkan Pilih Bulan yang ingin</Text>
          <Text style={styles.username}>Anda Download</Text>
          <DropDownPicker
            style={styles.picker}
            placeholder="Pilih Bulan"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={handleValueChange}
            setItems={setItems}
          />
          <Gap height={200} />
          <View style={styles.wrapContent}></View>
          <Button label="Download" onPress={handleDownload} />
        </View>
      </View>
    </>
  );
};

export default Download_A;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  username: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '700',
    fontSize: 20,
  },
  wrapper: {
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
    marginBottom: 29,
    textAlign: 'center',
  },
  wrapContent: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  picker: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
});
