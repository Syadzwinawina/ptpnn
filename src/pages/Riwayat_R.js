// import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import React, { useContext, useEffect, useState } from 'react';
// import MainHeader from '../components/MainHeader';
// import CardRiwayat from '../components/CardRiwayat';
// import CustomButton from '../components/Button';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import dw from '../assets/images/dw.png';
// import { AuthContext } from './AuthContext';

// const Riwayat_R = ({ onPress }) => {
//   const navigation = useNavigation();
//   const [tableData, setTableData] = useState([]);
//   const {user} = useContext(AuthContext);


//   console.log(tableData);

//   const fetchData = () => {
//     axios
//       .get('http://10.0.2.2:105/tampilkan_data_rendemen')
//       .then((response) => {
//                  // Mengurutkan data dari terbaru ke terlama berdasarkan waktu
//                  const sortedData = response.data.data_sounding.sort((a, b) => {
//                   const timeA = new Date(a.Waktu).getTime();
//                   const timeB = new Date(b.Waktu).getTime();
//                   return timeB - timeA;
//                 });
//         setTableData(response.data.data_rendemen);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <MainHeader label="Riwayat Rendemen" onPress={() => navigation.push('MenuSatu')} />
//       <ScrollView style={styles.wrapper}>
//         <Text style={styles.label}>Riwayat :</Text>
//         <View style={styles.btn}>
//           <CustomButton label="Sounding" width={136} onPress={() => navigation.push('Riwayat')} />
//           {
//             user?.data[5] !== "Petugas Tangki" && (
//               <CustomButton label="Rendemen" width={136} onPress={() => navigation.push('Riwayat_R')} />
//             )
//           }
//         </View>
//         {
//           user?.data[5] !== "Petugas Tangki" && (
//             <TouchableOpacity onPress={() => navigation.push('DW_R')} style={styles.iconContainer}>
//           <View style={styles.iconWrapper}>
//             <Image source={dw} style={styles.dw} />
//           </View>
//         </TouchableOpacity>
//           )
//         }

//         {tableData.map((item, index) => {
//           return (
//             <CardRiwayat
//               key={item.id && item.id.toString()} // Tambahkan key prop di sini dengan nilai yang unik
//               waktu={item.Waktu}
//               nama={item.Nama}
//               hasil={item.hasil}
//             />
//           );
//         })}
//       </ScrollView>
//     </>
//   );
// };

// export default Riwayat_R;

// const styles = StyleSheet.create({
//   wrapper: {
//     padding: 30,
//     marginBottom: 50,
//     paddingBottom: 50,
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 12,
//     lineHeight: 18,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   btn: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   iconContainer: {
//     alignItems: 'flex-end',
//   },
//   iconWrapper: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   dw: {
//     width: 24,
//     height: 24,
//   },
// });



import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MainHeader from '../components/MainHeader';
import CardRiwayat from '../components/CardRiwayat';
import CustomButton from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import dw from '../assets/images/dw.png';
import { AuthContext } from './AuthContext';

const Riwayat_R = () => {
  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchData = () => {
    axios
      .get('http://10.0.2.2:105/tampilkan_data_rendemen')
      .then((response) => {
        // Pastikan data_sounding ada di dalam respons dari server
        if (response.data && response.data.data_rendemen) {
          // Mengurutkan data dari terbaru ke terlama berdasarkan waktu
          const sortedData = response.data.data_rendemen.sort((a, b) => {
            const timeA = new Date(a.Waktu).getTime();
            const timeB = new Date(b.Waktu).getTime();
            return timeB - timeA;
          });
          setTableData(sortedData);
        } else {
          // Tangani jika data tidak ditemukan atau tidak sesuai dengan ekspektasi
          console.error('Data tidak ditemukan atau format data tidak sesuai');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainHeader label="Riwayat Rendemen" onPress={() => navigation.push('MenuSatu')} />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.label}>Riwayat :</Text>
        <View style={styles.btn}>
          <CustomButton label="Sounding" width={136} onPress={() => navigation.push('Riwayat')} />
          {user?.data[5] !== 'Petugas Tangki' && (
            <CustomButton label="Rendemen" width={136} onPress={() => navigation.push('Riwayat_R')} />
          )}
        </View>
        {user?.data[5] !== 'Petugas Tangki' && (
          <TouchableOpacity onPress={() => navigation.push('DW_R')} style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <Image source={dw} style={styles.dw} />
            </View>
          </TouchableOpacity>
        )}

        {tableData.map((item) => {
          return (
            <CardRiwayat
              key={item.id && item.id.toString()} // Tambahkan key prop di sini dengan nilai yang unik
              waktu={item.Waktu}
              nama={item.Nama}
              hasil={item.hasil}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Riwayat_R;

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
    marginBottom: 50,
    paddingBottom: 50,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  btn: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dw: {
    width: 24,
    height: 24,
  },
});
