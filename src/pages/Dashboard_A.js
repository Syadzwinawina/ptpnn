// import React, { useContext, useEffect, useState } from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import axios from 'axios';
// import { LineChart } from 'react-native-chart-kit';
// import Header from '../components/Header';
// import NavBarA from '../components/NavBarA';
// import { AuthContext } from './AuthContext';

// const Dashboard_A = () => {
//   const {user} = useContext(AuthContext);

//   useEffect(() => {
//     fetchData();
//   }, [ fetchData]);

//   const [selectedChart, setSelectedChart] = useState('sounding');
//   const [soundingData, setSoundingData] = useState(null);
//   const [rendemenData, setRendemenData] = useState(null);

//   // console.log("object:::",rendemenData)

//   const fetchData = async () => {
//     try {
//       const soundingResponse = await axios.get('http://10.0.2.2:105/grafik_sounding');
//       setSoundingData(soundingResponse.data);
      
//       const rendemenResponse = await axios.get('http://10.0.2.2:105/grafik_rendemen');
//       setRendemenData(rendemenResponse.data);
//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
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
//         <Text style={styles.text}>Dashboard Admin</Text>
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
//       <NavBarA activePage="Dashboard_A" />
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
// });

// export default Dashboard_A;



import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';
import Header from '../components/Header';
import NavBarA from '../components/NavBarA';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const Dashboard_A = () => {
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
        <Text style={styles.text}>Dashboard Admin</Text>
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
      <NavBarA activePage="Dashboard_A" />
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

export default Dashboard_A;
