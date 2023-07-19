import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import NavBarA from '../components/NavBarA';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const Sounding_A = () => {
  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);
  const {user} = useContext(AuthContext)


  useEffect(() => {
    fetchData();

  }, [fetchData]);

  const fetchData = () => {
    axios
      .get('http://10.0.2.2:105/tampilkan_data_sounding')
      .then((response) => {
        setTableData(response.data.data_sounding);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header name={user?.data[2]} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hasil Sounding</Text>
        <View style={styles.btn}>
          <Button label="Hapus" width={136} onPress={() => navigation.push('Hapus_A')} />
          <Button label="Download" width={136} onPress={() => navigation.push('Download_A')} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Waktu</Text>
              <Text style={styles.tableHeader}>Nama</Text>
              <Text style={styles.tableHeader}>Tangki</Text>
              <Text style={styles.tableHeader}>Suhu</Text>
              <Text style={styles.tableHeader}>Tinggi</Text>
              <Text style={styles.tableHeader}>Volume</Text>
              <Text style={styles.tableHeader}>Hasil Sounding</Text>
            </View>
            {tableData.map((data, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{data.Waktu}</Text>
                <Text style={styles.tableCell}>{data.Nama}</Text>
                <Text style={styles.tableCell}>{data.Tangki}</Text>
                <Text style={styles.tableCell}>{data.Suhu}</Text>
                <Text style={styles.tableCell}>{data.Tinggi}</Text>
                <Text style={styles.tableCell}>{data.Volume}</Text>
                <Text style={styles.tableCell}>{data['Hasil Sounding']}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <NavBarA activePage="Sounding_A" />
      </View>
    </>
  );
};

export default Sounding_A;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 27,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    padding: 30,
    marginTop: 23,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  btn: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 8,
    alignItems: 'center',
  },
  tableHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
});
