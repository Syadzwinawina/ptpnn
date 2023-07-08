import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const Download_R = () => {
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Januari', value: 'Januari' },
    { label: 'Februari', value: 'Februari' },
    { label: 'Maret', value: 'Maret' },
    { label: 'April', value: 'April' },
    { label: 'Mei', value: 'Mei' },
    { label: 'Juni', value: 'Juni' },
    { label: 'Juli', value: 'Juli' },
    { label: 'Agustus', value: 'Agustus' },
    { label: 'September', value: 'September' },
    { label: 'Oktober', value: 'Oktober' },
    { label: 'November', value: 'November' },
    { label: 'Desember', value: 'Desember' },
  ]);

  const handleValueChange = (itemValue) => {
    setValue(itemValue);
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
          <Button label="Download" onPress={() => navigation.navigate('Rendemen')} />
        </View>
      </View>
    </>
  );
};

export default Download_R;

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
