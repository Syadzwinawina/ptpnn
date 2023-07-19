// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Button from '../components/Button';
// import Gap from '../components/Gap';
// import MainHeader  from '../components/MainHeader';
// import { useNavigation } from '@react-navigation/native';

// const DW_S = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const navigation = useNavigation();

//   const handleDateSelection = () => {
//     setShowDatePicker(true);
//   };

//   const formatDateString = (dateString) => {
//     const dateObj = new Date(dateString);
//     const year = dateObj.getFullYear();
//     const month = String(dateObj.getMonth() + 1).padStart(2, '0');
//     const day = String(dateObj.getDate()).padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;
//     return formattedDate;
//   };

//   const handleDateChange = (event, date) => {
//     if (date !== undefined) {
//       setSelectedDate(date);
//     }
//     setShowDatePicker(false);
//   };

//   const handleDownload = async () => {
//     if (selectedDate) {
//       const formattedDate = selectedDate.toISOString().split('T')[0];
//       Alert.alert('Download', `Anda akan mendownload hasil sounding untuk tanggal ${formattedDate}`, [
//         { text: 'Batal' },
//         { text: 'Download', onPress: () => downloadHasilSounding(formattedDate) },
//       ]);
//     } else {
//       Alert.alert('Error', 'Silakan pilih tanggal terlebih dahulu');
//     }
//   };

//   const downloadHasilSounding = async (tanggal) => {
//     try {
//       const response = await fetch('http://10.0.2.2:105/download_hasil_sounding', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ tanggal }),
//       });

//       const data = await response.json();
//       console.log("object:::",data)

//       if (response.ok) {
//         Alert.alert('Berhasil', `File PDF '${data.message}' berhasil dihasilkan dan didownload`);
     
//       } else {
//         Alert.alert('Error', `Gagal mengunduh hasil sounding: ${data.error}`);
//       }
//     } catch (error) {
//       console.log('Error downloading hasil sounding:', error.message);
//       Alert.alert('Error', 'Terjadi kesalahan saat mengunduh hasil sounding');
//     }
//   };

//   return (
//     <>
//      <MainHeader label="Download Sounding" onPress={() => navigation.goBack()} />
//     <View style={styles.container}>
//       <Text style={styles.title}>Download Hasil Sounding</Text>
//       <Gap height={15} />
//       <View style={styles.datePickerWrapper}>
//         <Text style={styles.label}>Pilih Tanggal:</Text>
//         <Button label={formatDateString(selectedDate)} onPress={handleDateSelection} />
//       </View>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//       <Gap height={15} />
//       <Button label="Download" onPress={handleDownload} />
//     </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   datePickerWrapper: {
//     marginBottom: 15,
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 18,
//     lineHeight: 18,
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });

// export default DW_S;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';
import Gap from '../components/Gap';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const DW_S = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null); // State untuk menyimpan URL file PDF

  const navigation = useNavigation();

  const handleDateSelection = () => {
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

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const handleDownload = async () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      Alert.alert('Download', `Anda akan mendownload hasil sounding untuk tanggal ${formattedDate}`, [
        { text: 'Batal' },
        { text: 'Download', onPress: () => downloadHasilSounding(formattedDate) },
      ]);
    } else {
      Alert.alert('Error', 'Silakan pilih tanggal terlebih dahulu');
    }
  };

  const downloadHasilSounding = async (tanggal) => {
    try {
      const response = await fetch('http://10.0.2.2:105/download_hasil_sounding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tanggal }),
      });

      const data = await response.json();

      if (response.ok) {
        setPdfUrl(data.pdf_base64); // Simpan URL file PDF ke state pdfUrl
      } else {
        Alert.alert('Error', `Gagal mengunduh hasil sounding: ${data.error}`);
      }
    } catch (error) {
      console.log('Error downloading hasil sounding:', error.message);
      Alert.alert('Error', 'Terjadi kesalahan saat mengunduh hasil sounding');
    }
  };

  return (
    <>
      <MainHeader label="Download Sounding" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.title}>Download Hasil Sounding</Text>
        <Gap height={15} />
        <View style={styles.datePickerWrapper}>
          <Text style={styles.label}>Pilih Tanggal:</Text>
          <Button label={formatDateString(selectedDate)} onPress={handleDateSelection} />
        </View>
        {showDatePicker && (
          <DateTimePicker value={selectedDate} mode="date" display="default" onChange={handleDateChange} />
        )}
        <Gap height={15} />
        <Button label="Download" onPress={handleDownload} />
      </View>

      {/* Tampilkan PDF jika pdfUrl tidak null */}
      {pdfUrl && (
          <View style={styles.pdfContainer}>
            <PDFView
              style={styles.pdf}
              source={{ uri: `data:application/pdf;base64,${pdfUrl}` }} // Set sumber PDF menggunakan data base64
              onLoad={() => setPdfUrl(null)} // Reset pdfUrl setelah PDF berhasil dimuat
            />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datePickerWrapper: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 18,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  pdfContainer: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default DW_S;
