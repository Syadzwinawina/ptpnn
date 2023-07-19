// import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import MainHeader from '../components/MainHeader';
// import CardRiwayat from '../components/CardRiwayat';
// import CustomButton from '../components/Button';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import dw from '../assets/images/index'

// const Riwayat_R = ({onPress}) => {
//   const navigation = useNavigation();
//   const [tableData, setTableData] = useState([]);

//   console.log(tableData);

//   const fetchData = () => {
//     axios
//       .get('http://10.0.2.2:105/tampilkan_data_rendemen')
//       .then((response) => {
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
//       <MainHeader label="Riwayat Rendemen" onPress={() => navigation.goBack()} />
//       <ScrollView style={styles.wrapper}>
//         <Text style={styles.label}>Riwayat :</Text>
//         <View style={styles.btn}>
//           <CustomButton label="Sounding" width={136} onPress={() => navigation.push('Riwayat')} />
//           <CustomButton label="Rendemen" width={136} onPress={() => navigation.push('Riwayat_R')} />
//         </View>
//         <TouchableOpacity onPress={() => navigation.push('Download_S')}>
//         <Image source={dw} style={styles.dw} />
//       </TouchableOpacity>

//         {tableData.map((item, index) => {
//           return (
//             <CardRiwayat
//               key={item.id}
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
//   dw: {
//     marginRight: 15,
//     width: 24,
//     height: 24,
//   },
//   btn: {
//     marginBottom: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
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

const Riwayat_R = ({ onPress }) => {
  const {user} = useContext(AuthContext);


  console.log(user)

  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);

  console.log("TABLE DATA::::",tableData);

  const fetchData = () => {
    axios
      .get('http://10.0.2.2:105/tampilkan_data_rendemen')
      .then((response) => {
        setTableData(response.data.data_rendemen);
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
          {
            user?.data[5] !== "Petugas Tangki" && (
              <CustomButton label="Rendemen" width={136} onPress={() => navigation.push('Riwayat_R')} />
            )
          }
        </View>
        {
          user?.data[5] !== "Petugas Tangki" && (
            <TouchableOpacity onPress={() => navigation.push('DW_R')} style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Image source={dw} style={styles.dw} />
          </View>
        </TouchableOpacity>
          )
        }

        {tableData.map((item, index) => {
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
