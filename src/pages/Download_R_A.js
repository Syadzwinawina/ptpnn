// import { StyleSheet, Text, View, Alert } from 'react-native';
// import React, { useState } from 'react';
// import Gap from '../components/Gap';
// import Button from '../components/Button';
// import MainHeader from '../components/MainHeader';
// import { useNavigation } from '@react-navigation/native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import axios from 'axios';

// const Download_R_A = () => {
//   const navigation = useNavigation();
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: '1', value: '1' },
//     { label: '2', value: '2' },
//     { label: '3', value: '3' },
//     { label: '4', value: '4' },
//     { label: '5', value: '5' },
//     { label: '6', value: '6' },
//     { label: '7', value: '7' },
//     { label: '8', value: '8' },
//     { label: '9', value: '9' },
//     { label: '10', value: '10' },
//     { label: '11', value: '11' },
//     { label: '12', value: '12' },
//   ]);

//   const handleValueChange = (itemValue) => {
//     setValue(itemValue);
//   };

//   const handleDownload = () => {
//     if (value) {
//       const requestData = {
//         bulan: value,
//       };

//       axios
//         .post('http://10.0.2.2:105/hasil_rendemen_admin', requestData)
//         .then((response) => {
//           const { filename_r } = response.data;
//           console.log('Download berhasil:', filename_r);
//           Alert.alert('Download Berhasil', `File PDF ${filename_r} berhasil diunduh.`);
//         })
//         .catch((error) => {
//           console.error('Download gagal:', error);
//           Alert.alert('Download Gagal', 'Terjadi kesalahan saat melakukan download.');
//         });
//     } else {
//       console.warn('Pilih bulan terlebih dahulu');
//       Alert.alert('Pilih Bulan', 'Silakan pilih bulan sebelum melakukan download.');
//     }
//   };

//   return (
//     <>
//       <MainHeader label="Download Data" onPress={() => navigation.goBack()} />
//       <View style={styles.container}>
//         <View style={styles.wrapper}>
//           <Text style={styles.username}>Apakah Anda Ingin Mendownload Data?</Text>
//           <Text style={styles.username}>Silahkan Pilih Bulan yang ingin</Text>
//           <Text style={styles.username}>Anda Download</Text>
//           <DropDownPicker
//             style={styles.picker}
//             placeholder="Pilih Bulan"
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={handleValueChange}
//             setItems={setItems}
//           />
//           <Gap height={200} />
//           <View style={styles.wrapContent}></View>
//           <Button label="Download" onPress={handleDownload} />
//         </View>
//       </View>
//     </>
//   );
// };

// export default Download_R_A;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   username: {
//     textAlign: 'center',
//     color: '#000000',
//     fontWeight: '700',
//     fontSize: 20,
//   },
//   wrapper: {
//     paddingVertical: 12,
//     borderRadius: 10,
//     backgroundColor: '#E5E5E5',
//     marginBottom: 29,
//     textAlign: 'center',
//   },
//   wrapContent: {
//     marginTop: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     textAlign: 'center',
//   },
//   picker: {
//     backgroundColor: '#E5E5E5',
//     borderColor: '#E5E5E5',
//     borderRadius: 10,
//   },
// });





import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

const Download_R_A = () => {
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

  const downloadHasilSounding = async (bulan) => {
    try {
      const response = await fetch('http://10.0.2.2:105/hasil_rendemen_admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bulan }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Berhasil', `File PDF '${data.message}' berhasil dihasilkan dan didownload`);
      } else {
        Alert.alert('Error', `Gagal mengunduh hasil rendemen: ${data.error}`);
      }
    } catch (error) {
      console.log('Error downloading hasil rendemen:', error.message);
      Alert.alert('Error', 'Terjadi kesalahan saat mengunduh hasil rendemen');
    }
  };

  const downloadPDF = async (bulan) => {
    try {
      const response = await axios.get(`http://10.0.2.2:105/get_data_by_bulan_r?bulan=${bulan}`);
      const data = response.data.data;
      console.log('DATA TO LOAD::11111111', response?.data); // Mengakses data dari respons menggunakan response.data

      if (response?.data?.error === 'false') {
        const results = data;
        console.log('RESULT::', results);

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
            <h1>DATA RENDEMEN ADMIN</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Waktu</th>
                  <th>Nama</th>
                  <th>Pengiriman</th>
                  <th>Stok Awal</th>
                  <th>Jumlah Rebusan</th>
                  <th>TBS Olah</th>
                  <th>Hasil CPO</th>
                  <th>Hasil Rendemen</th>
                </tr>
              </thead>
              <tbody>
                <!-- Data Loop -->
                ${results?.map((item, index) => 
                  `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${item?.waktu}</td>
                    <td>${item?.nama}</td>
                    <td>${item?.pengiriman?.toString()}</td>
                    <td>${item?.stok_awal?.toString()}</td>
                    <td>${item?.jumlah_rebusan?.toString()}</td>
                    <td>${item?.TBS_olah?.toString()}</td>
                    <td>${item?.hasil_cpo?.toString()}</td>
                    <td>${item?.hasil_rendemen?.toString()}</td>
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
          fileName: `hasil_rendemen_${bulan}`,
          directory: 'Documents',
        };

        // Lakukan konversi HTML ke PDF
        const file = await RNHTMLtoPDF.convert(options);

        // Tampilkan pesan sukses
        Alert.alert('Berhasil', `File PDF 'hasil_rendemen_${bulan}.pdf' berhasil dihasilkan.`);

        // Bagikan file PDF ke aplikasi lain
        const shareOptions = {
          title: `Hasil Rendemen ${bulan}`,
          url: `file://${file.filePath}`,
          type: 'application/pdf',
        };
        Share.open(shareOptions);
      } else {
        Alert.alert('Error', `Gagal mengunduh hasil rendemen: ${data.error}`);
      }
    } catch (error) {
      console.error('Error saat mengonversi dan menyimpan ke PDF:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat mengonversi dan menyimpan ke PDF');
    }
  };

  const handleDownloadPDF = () => {
    if (value) {
      downloadPDF(value);
    } else {
      Alert.alert('Error', 'Pilih bulan terlebih dahulu sebelum mendownload');
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
          <Button label="Download PDF" onPress={handleDownloadPDF} />
        </View>
      </View>
    </>
  );
};

export default Download_R_A;

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
