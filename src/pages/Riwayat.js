// import { StyleSheet, View, Text, Button } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import MainHeader from '../components/MainHeader';
// import CardRiwayat from '../components/CardRiwayat';
// import  Button  from '../components/Button';
// import { useNavigation } from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';
// import axios from 'axios';
// import { ScrollView } from 'react-native-gesture-handler';



// const Riwayat = () => {
//   const navigation = useNavigation();
//   const [tableData, setTableData] = useState([]);

//   console.log(tableData)
  
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [isBarChartVisible, setIsBarChartVisible] = useState(true); // Define isBarChartVisible state

//   const toggleChartType = () => {
//     setIsBarChartVisible(!isBarChartVisible); // Toggle the value of isBarChartVisible
//   };
  
//   const fetchData = () => {
//     axios
//       .get('http://10.0.2.2:105/tampilkan_data_sounding')
//       .then((response) => {
//         setTableData(response.data.data_sounding);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(()=>{
//     fetchData()
//   },[])

//   return (
//     <>
//       <MainHeader label="Riwayat" onPress={() => navigation.goBack()} />
//       <ScrollView style={styles.wrapper}>
//         <Text style={styles.label}>Riwayat :</Text>
//         <View style={styles.btn}>
//           <Button label="Sounding" width={136} onPress={() => navigation.push('Riwayat')} />
//           <Button label="Rendemen" width={136} onPress={() => navigation.push('MenuSatu')} />
//         </View>

//        {tableData?.map((item,index)=>{
//         return (
//           <CardRiwayat
//           key={item?.id}
//           waktu={item?.Waktu}
//           nama={item?.Nama}

//           hasil={item?.hasil}

//         />
//         )
//        })}
       
//       </ScrollView>
//     </>
//   );
// };

// export default Riwayat;

// const styles = StyleSheet.create({
//   wrapper: {
//     padding: 30,
//     marginBottom:50,
//     paddingBottom:50,
//   },
//   text: {
//     padding: 30,
//     marginTop: 23,
//     fontSize: 20,
//     color: '#000000',
//     fontWeight: 'bold',
//   },
//   picker: {
//     backgroundColor: '#E5E5E5',
//     borderColor: '#E5E5E5',
//     borderRadius: 10,
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
// });


import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MainHeader from '../components/MainHeader';
import CardRiwayat from '../components/CardRiwayat';
import CustomButton from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import dw from '../assets/images/dw.png';
import { AuthContext } from './AuthContext';

const Riwayat = () => {
  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);
  const {user} = useContext(AuthContext);


  console.log(tableData);

  const fetchData = () => {
    axios
      .get('http://10.0.2.2:105/tampilkan_data_sounding')
      .then((response) => {
         // Mengurutkan data dari terbaru ke terlama berdasarkan waktu
         const sortedData = response.data.data_sounding.sort((a, b) => {
          const timeA = new Date(a.Waktu).getTime();
          const timeB = new Date(b.Waktu).getTime();
          return timeB - timeA;
        });
        setTableData(response.data.data_sounding);
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
      <MainHeader label="Riwayat Sounding" onPress={() => navigation.push('MenuSatu')} />
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
            <TouchableOpacity onPress={() => navigation.push('DW_S')} style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Image source={dw} style={styles.dw} />
          </View>
        </TouchableOpacity>
          )
        }

        {tableData.map((item, index) => {
          return (
            <CardRiwayat
              key={item.id}
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

export default Riwayat;

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
  dw: {
    marginLeft: 15,
    width: 24,
    height: 24,
  },
});
