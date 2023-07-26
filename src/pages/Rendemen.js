import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export default function Rendemen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pengiriman, setPengiriman] = useState('');
  const [stokawal, setStokAwal] = useState('');
  const [rebusan, setRebusan] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Add this line
  const { user } = useContext(AuthContext);


  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };


 
  const formatDateString = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleCount = useCallback(async () => {

    try {
      const res = await axios.post('http://10.0.2.2:105/rendemen', {
        nama: user?.data[2].toString(),
        pengiriman: pengiriman,
        stok_awal: stokawal,
        jumlah_rebusan: rebusan,
        tanggal: formatDateString(selectedDate),
      });

      console.log('hasil', res?.data);
      if (res?.data?.error === 'false') {
        navigation.navigate('Output_R', { data: res?.data });
      }
    else {
      setErrorMessage('Rendemen Telah Dilakukan Sebelumnya');
    }
    } catch (error) {
      console.log(error);
    }
  }, [user, pengiriman, stokawal, rebusan, selectedDate, navigation]);

  return (
    <>
      <Header name={user?.data[2]} />
      <Text style={styles.text}>Pengukuran Nilai Rendemen</Text>
      {errorMessage !== '' && ( // Add this block to display the error message
        <ScrollView style={styles.errorWrapper}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </ScrollView>
      )}
      <View style={styles.wrapper}>
        <Input
          label="Pengiriman :"
          height={30}
          labelOn
          onChangeText={(text) => setPengiriman(text)}
        />
        <Gap height={15} />
        <Input
          label="Stok Awal :"
          height={30}
          labelOn
          onChangeText={(text) => setStokAwal(text)}
        />
        <Gap height={15} />
        <Input
          label="Jumlah Rebusan :"
          height={30}
          labelOn
          onChangeText={(text) => setRebusan(text)}
        />
        <Gap height={15} />
        <View style={styles.datePickerWrapper}>
          <Text style={styles.label}>Tanggal Sounding :</Text>
      
          <Button label={formatDateString(selectedDate)} onPress={showDatePickerModal} />
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <Gap height={15} />
        <Button label="Hitung" onPress={handleCount} />
        <NavBar activePage={'Rendemen'} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  errorWrapper: {
    backgroundColor: 'yellow',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  errorMessage: {
    color: 'black',
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 30,
    flex: 1,
  },
  text: {
    padding: 30,
    marginTop: 23,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  datePickerWrapper: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});


