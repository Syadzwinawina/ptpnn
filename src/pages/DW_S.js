// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Button from '../components/Button';
// import Gap from '../components/Gap';
// import MainHeader from '../components/MainHeader';
// import { useNavigation } from '@react-navigation/native';
// // import PDFView from 'react-native-view-pdf';
// import Pdf from 'react-native-pdf';
// import RNFetchBlob from 'rn-fetch-blob';

// const DW_S = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [pdfUrl, setPdfUrl] = useState(null); // State untuk menyimpan URL file PDF

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

//       if (response.ok) {
//        // Mendownload file PDF sebagai base64
//        const { dirs } = RNFetchBlob.fs;
//        const docPath = `${dirs.DownloadDir}/hasil_sounding_${tanggal}.pdf`;
//        await RNFetchBlob.fs.writeFile(docPath, data.pdf_base64, 'base64');

//        // Menampilkan file PDF setelah berhasil didownload
//        setPdfUrl(docPath);
//      } else {
//        Alert.alert('Error', `Gagal mengunduh hasil sounding: ${data.error}`);
//      }
//    } catch (error) {
//      console.log('Error downloading hasil sounding:', error.message);
//      Alert.alert('Error', 'Terjadi kesalahan saat mengunduh hasil sounding');
//    }
//  };

//   return (
//     <>
//       <MainHeader label="Download Sounding" onPress={() => navigation.goBack()} />
//       <View style={styles.container}>
//         <Text style={styles.title}>Download Hasil Sounding</Text>
//         <Gap height={15} />
//         <View style={styles.datePickerWrapper}>
//           <Text style={styles.label}>Pilih Tanggal:</Text>
//           <Button label={formatDateString(selectedDate)} onPress={handleDateSelection} />
//         </View>
//         {showDatePicker && (
//           <DateTimePicker value={selectedDate} mode="date" display="default" onChange={handleDateChange} />
//         )}
//         <Gap height={15} />
//         <Button label="Download" onPress={handleDownload} />
//       </View>

//       {/* Tampilkan PDF jika pdfUrl tidak null */}
//       {pdfUrl && (
//         <View style={styles.pdfContainer}>
//           <Pdf
//             source={{ uri: pdfUrl }}
//             onLoadComplete={(numberOfPages, filePath) => {
//               console.log(`Number of pages: ${numberOfPages}`);
//             }}
//             onPageChanged={(page, numberOfPages) => {
//               console.log(`Current page: ${page}`);
//             }}
//             onError={(error) => {
//               console.log(error);
//             }}
//             onPressLink={(uri) => {
//               console.log(`Link presse: ${uri}`);
//             }}
//             style={styles.pdf}
//           />
//         </View>
//   )}
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
//   pdfContainer: {
//     flex: 1,
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

// export default DW_S;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';
import Gap from '../components/Gap';
import MainHeader from '../components/MainHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking, Platform } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import axios from 'axios';

const DW_S = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

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
            Alert.alert('Berhasil', `File PDF '${data.message}' berhasil dihasilkan dan didownload`);
          } else {
            Alert.alert('Error', `Gagal mengunduh hasil sounding: ${data.error}`);
          }
        } catch (error) {
          console.log('Error downloading hasil sounding:', error.message);
          Alert.alert('Error', 'Terjadi kesalahan saat mengunduh hasil sounding');
        }
      };
    

  const downloadPDF = async (tanggal) => {
    try {
      const response = await axios.get(`http://10.0.2.2:105/get_data_by_date_s?tanggal=${tanggal}`);
      const data = response.data.data; 
      console.log("DATA TO LOAD::11111111", response?.data); // Mengakses data dari respons menggunakan response.data
      

    if (response?.data?.error === "false") {
     
      const results = data;
      console.log("RESULT::",results)

      // Konversi data hasil sounding ke format HTML untuk tabel
      const htmlContent = `<!DOCTYPE html>
        <html>
        <head>
        <style>
          @page {
            size: landscape;
          }
          table {
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
          }
          h1 {
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
          }
        </style>
        </head>
        <body>
          <h1>DATA SOUNDING</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Waktu</th>
                <th>Nama</th>
                <th>Tangki</th>
                <th>Temperatur Suhu</th>
                <th>Tinggi</th>
                <th>Volume</th>
                <th>Beda</th>
                <th>Hasil Sounding</th>
              </tr>
            </thead>
            <tbody>
              <!-- Data Loop -->
              ${results?.map((item, index) => 
                `
                <tr>
                  <td>${index +1 }</td>
                  <td>${item?.waktu}</td>
                  <td>${item?.nama}</td>
                  <td>${item?.tangki?.toString()}</td>
                  <td>${item?.temperatur_suhu?.toString()}</td>
                  <td>${item?.tinggi?.toString()}</td>
                  <td>${item?.volume?.toString()}</td>
                  <td>${item?.beda?.toString()}</td>
                  <td>${item?.hasil_sounding?.toString()}</td>
                </tr>
              `
                )
                .join('')}

            </tbody>
          </table>
        </body>
        </html>`;

  
      // Tentukan options untuk konversi HTML ke PDF
      const options = {
        html: htmlContent,
        fileName: `hasil_sounding_${tanggal}`,
        directory: 'Documents',
      };
  
      // Lakukan konversi HTML ke PDF
      const file = await RNHTMLtoPDF.convert(options);
  
      // Tampilkan pesan sukses
      Alert.alert('Berhasil', `File PDF 'hasil_sounding_${tanggal}.pdf' berhasil dihasilkan.`);
  
      // Bagikan file PDF ke aplikasi lain
      const shareOptions = {
        title: `Hasil Sounding ${tanggal}`,
        url: `file://${file.filePath}`,
        type: 'application/pdf',
      };
      Share.open(shareOptions);
    } else {
      Alert.alert('Error', `Gagal mengunduh hasil sounding: ${data.error}`);
    }
    } catch (error) {
      console.error('Error saat mengonversi dan menyimpan ke PDF:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat mengonversi dan menyimpan ke PDF');
    }
  };
  

  const handleDownloadPDF = async (date) => {
     downloadPDF(date);
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
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        {/* <Gap height={15} />
        <Button label="Download" onPress={handleDownload} /> */}
        <Gap height={15} />
        <Button label="Download PDF" onPress={()=>handleDownloadPDF(formatDateString(selectedDate))} />
      </View>
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
});

export default DW_S;
