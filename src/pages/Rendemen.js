import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Rendemen({navigation}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Header />
      <Text style={styles.text}>Pengukuran Nilai Rendemen</Text>
      <View style={styles.wrapper}>
        <Input label="Pengiriman :" height={30} labelOn />
        <Gap height={15} />
        <Input label="Stok Awal :" height={30} labelOn />
        <Gap height={15} />
        <Input label="Jumlah Rebusan :" height={30} labelOn />
        <Gap height={15} />
        <View style={styles.datePickerWrapper}>
          <Text style={styles.label}>Tanggal Sounding :</Text>
          <Button
            label={formatDate(selectedDate)}
            onPress={showDatePickerModal}
          />
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
        <Button label="Hitung" onPress={() => navigation.navigate('Output_R')} />
        <NavBar activePage={"Rendemen"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
    flex:1,
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
