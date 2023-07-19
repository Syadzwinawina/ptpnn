import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export default function Rendemen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pengiriman, setPengiriman] = useState('');
  const [stokawal, setStokAwal] = useState('');
  const [rebusan, setRebusan] = useState('');
  const {user} = useContext(AuthContext)


  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  // const formatDateString = (dateString) => {
  //   const formattedDate = new Date(dateString).toISOString().replace('T', ' ').replace(/\.\d+Z$/, '');
  //   return formattedDate;
  // };

 
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
    } catch (error) {
      console.log(error);
    }
  }, [user, pengiriman, stokawal, rebusan, selectedDate, navigation]);

  return (
    <>
      <Header name={user?.data[2]} />
      <Text style={styles.text}>Pengukuran Nilai Rendemen</Text>
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




// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState, useCallback, useEffect } from 'react';
// import Header from '../components/Header';
// import Input from '../components/Input';
// import Gap from '../components/Gap';
// import Button from '../components/Button';
// import NavBar from '../components/NavBar';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// export default function Rendemen({ navigation }) {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [pengiriman, setPengiriman] = useState('');
//   const [stokawal, setStokAwal] = useState('');
//   const [rebusan, setRebusan] = useState('');

//   const [user, setUser] = useState(null);

//   const callUser = useCallback(async () => {
//     try {
//       const dataUser = await AsyncStorage.getItem('user');
//       setUser(JSON.parse(dataUser));
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   useEffect(() => {
//     callUser();
//   }, [callUser]);

//   const handleDateChange = useCallback((event, date) => {
//     if (date !== undefined) {
//       setSelectedDate(date);
//     }
//     setShowDatePicker(false);
//   }, []);

//   const showDatePickerModal = useCallback(() => {
//     setShowDatePicker(true);
//   }, []);

//   const formatDate = (date) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   const handleCount = useCallback(async () => {
//     try {
//       const res = await axios.post('http://10.0.2.2:105/rendemen', {
//         nama: user?.data[2].toString(),
//         pengiriman: pengiriman,
//         stok_awal: stokawal,
//         jumlah_rebusan: rebusan,
//         tanggal: selectedDate.toISOString().split('T')[0],
//       });

//       console.log('hasil', res?.data);
//       if (res?.data?.error === 'false') {
//         navigation.navigate('Output_R', { data: res?.data });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }, [navigation, user, pengiriman, stokawal, rebusan, selectedDate]);

//   return (
//     <>
//       <Header name={user?.data[2]} />
//       <Text style={styles.text}>Pengukuran Nilai Rendemen</Text>
//       <View style={styles.wrapper}>
//         <Input
//           label="Pengiriman :"
//           height={30}
//           labelOn
//           onChangeText={(text) => setPengiriman(text)}
//         />
//         <Gap height={15} />
//         <Input
//           label="Stok Awal :"
//           height={30}
//           labelOn
//           onChangeText={(text) => setStokAwal(text)}
//         />
//         <Gap height={15} />
//         <Input
//           label="Jumlah Rebusan :"
//           height={30}
//           labelOn
//           onChangeText={(text) => setRebusan(text)}
//         />
//         <Gap height={15} />
//         <View style={styles.datePickerWrapper}>
//           <Text style={styles.label}>Tanggal Sounding :</Text>
//           <Button
//             label={formatDate(selectedDate)}
//             onPress={showDatePickerModal}
//           />
//           {showDatePicker && (
//             <DateTimePicker
//               value={selectedDate}
//               mode="date"
//               display="default"
//               onChange={handleDateChange}
//             />
//           )}
//         </View>
//         <Gap height={15} />
//         <Button label="Hitung" onPress={handleCount} />
//         <NavBar activePage={'Rendemen'} />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     padding: 30,
//     flex: 1,
//   },
//   text: {
//     padding: 30,
//     marginTop: 23,
//     fontSize: 20,
//     color: '#000000',
//     fontWeight: 'bold',
//   },
//   datePickerWrapper: {
//     marginBottom: 15,
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 12,
//     lineHeight: 18,
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });

