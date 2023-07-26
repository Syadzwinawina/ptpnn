


// import React, { useContext, useEffect, useState } from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import axios from 'axios';
// import { LineChart } from 'react-native-chart-kit';
// import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker
// import Header from '../components/Header';
// import NavBar from '../components/NavBar';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from './AuthContext';

// const GrafikH = () => {
//   const { user } = useContext(AuthContext);

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

//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [value]);

//   const [selectedChart, setSelectedChart] = useState('sounding');
//   const [soundingData, setSoundingData] = useState(null);
//   const [rendemenData, setRendemenData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const soundingResponse = await axios.get(`http://10.0.2.2:5000/grafik_sounding`);
//       setSoundingData(soundingResponse.data);
      
//       // Fetch data for rendemenData, adjust the URL accordingly

//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
//   };

//   const handleValueChange = (itemValue) => {
//     setValue(itemValue);
//     setOpen(false);
//   };

//   const renderChart = () => {
//     if (selectedChart === 'sounding') {
//       if (soundingData) {
//         return (
//           <LineChart
//             data={{
//               labels: soundingData.x_values,
//               datasets: [
//                 {
//                   data: soundingData.y_values,
//                 },
//               ],
//             }}
//             width={400}
//             height={400}
//             yAxisLabel=""
//             chartConfig={{
//               backgroundColor: '#FFFFFF',
//               backgroundGradientFrom: '#FFFFFF',
//               backgroundGradientTo: '#FFFFFF',
//               decimalPlaces: 2,
//               color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               style: {
//                 borderRadius: 16,
//               },
//             }}
//           />
//         );
//       } else {
//         return <View style={styles.placeholder} />;
//       }
//     } else if (selectedChart === 'rendemen') {
//       if (rendemenData) {
//         return (
//           <LineChart
//             data={{
//               labels: rendemenData.x_values,
//               datasets: [
//                 {
//                   data: rendemenData.y_values,
//                 },
//               ],
//             }}
//             width={400}
//             height={400}
//             yAxisLabel=""
//             chartConfig={{
//               backgroundColor: '#FFFFFF',
//               backgroundGradientFrom: '#FFFFFF',
//               backgroundGradientTo: '#FFFFFF',
//               decimalPlaces: 2,
//               color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               style: {
//                 borderRadius: 16,
//               },
//             }}
//           />
//         );
//       } else {
//         return <View style={styles.placeholder} />;
//       }
//     }
//   };

//   return (
//     <>
//       <Header name={user?.data[2]} />
//       <View style={styles.wrapper}>
//         <Text style={styles.text}>Grafik Sounding dan Rendemen</Text>
//         <DropDownPicker
//           style={styles.picker}
//           placeholder="Pilih Bulan"
//           open={open}
//           value={value}
//           items={items}
//           setOpen={setOpen}
//           setValue={handleValueChange}
//           setItems={setItems}
//         />
//         <View style={styles.buttonGroup}>
//           <TouchableOpacity
//             style={[styles.button, selectedChart === 'sounding' && styles.selectedButton]}
//             onPress={() => setSelectedChart('sounding')}
//           >
//             <Text style={[styles.buttonText, selectedChart === 'sounding' && styles.selectedButtonText]}>
//               Sounding
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, selectedChart === 'rendemen' && styles.selectedButton]}
//             onPress={() => setSelectedChart('rendemen')}
//           >
//             <Text style={[styles.buttonText, selectedChart === 'rendemen' && styles.selectedButtonText]}>
//               Rendemen
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}
//       >
//         {renderChart()}
//       </ScrollView>
//       <View style={styles.buttonGroup}>

//       </View>
//       <NavBar activePage="GrafikH" />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   wrapper: {
//     paddingHorizontal: 15,
//   },
//   placeholder: {
//     width: 500,
//     height: 400,
//     backgroundColor: 'lightgray',
//   },
//   text: {
//     textAlign: 'center',
//     padding: 10,
//     marginTop: 30,
//     fontSize: 24,
//     color: '#000000',
//     fontWeight: 'bold',
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   button: {
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 20,
//     backgroundColor: '#EEEEEE',
//     marginRight: 10,
//   },
//   selectedButton: {
//     backgroundColor: '#006400',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#000000',
//   },
//   selectedButtonText: {
//     color: '#FFFFFF',
//   },
//   picker: {
//     backgroundColor: '#E5E5E5',
//     borderColor: '#E5E5E5',
//     borderRadius: 10,
//   },
// });

// export default GrafikH;





import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const GrafikH = () => {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, [ fetchData]);

  const [selectedChart, setSelectedChart] = useState('sounding');
  const [soundingData, setSoundingData] = useState(null);
  const [rendemenData, setRendemenData] = useState(null);

  // console.log("object:::",rendemenData)

  const fetchData = async () => {
    try {
      const soundingResponse = await axios.get('http://10.0.2.2:105/grafik_sounding');
      setSoundingData(soundingResponse.data);
      
      const rendemenResponse = await axios.get('http://10.0.2.2:105/grafik_rendemen');
      setRendemenData(rendemenResponse.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const renderChart = () => {
    if (selectedChart === 'sounding') {
      if (soundingData) {
        return (
          <LineChart
            data={{
              labels: soundingData.x_values,
              datasets: [
                {
                  data: soundingData.y_values,
                },
              ],
            }}
            width={400}
            height={400}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        );
      } else {
        return <View style={styles.placeholder} />;
      }
    } else if (selectedChart === 'rendemen') {
      if (rendemenData) {
        return (
          <LineChart
            data={{
              labels: rendemenData.x_values,
              datasets: [
                {
                  data: rendemenData.y_values,
                },
              ],
            }}
            width={400}
            height={400}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        );
      } else {
        return <View style={styles.placeholder} />;
      }
    }
  };

  return (
    <>
      <Header name={user?.data[2]} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Grafik Sounding dan Rendemen</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, selectedChart === 'sounding' && styles.selectedButton]}
            onPress={() => setSelectedChart('sounding')}
          >
            <Text style={[styles.buttonText, selectedChart === 'sounding' && styles.selectedButtonText]}>
              Sounding
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedChart === 'rendemen' && styles.selectedButton]}
            onPress={() => setSelectedChart('rendemen')}
          >
            <Text style={[styles.buttonText, selectedChart === 'rendemen' && styles.selectedButtonText]}>
              Rendemen
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {renderChart()}
      </ScrollView>
      <NavBar activePage="GrafikH" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  placeholder: {
    width: 500,
    height: 400,
    backgroundColor: 'lightgray',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#006400',
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
  },
  selectedButtonText: {
    color: '#FFFFFF',
  },
});

export default GrafikH;
