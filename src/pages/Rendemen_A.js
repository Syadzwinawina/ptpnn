import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import NavBarA from '../components/NavBarA';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const Rendemen_A = () => {
  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);
  const {user} = useContext(AuthContext)


  useEffect(() => {
    fetchData();

  }, [ fetchData]);

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

  return (
    <>
      <Header name={user?.data[2]} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hasil Rendemen</Text>
        <View style={styles.btn}>
          <Button label="Hapus" width={136} onPress={() => navigation.push('Hapus_R_A')} />
          <Button label="Download" width={136} onPress={() => navigation.push('Download_R_A')} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Waktu</Text>
              <Text style={styles.tableHeader}>Nama</Text>
              <Text style={styles.tableHeader}>Pengiriman</Text>
              <Text style={styles.tableHeader}>Stok Awal</Text>
              <Text style={styles.tableHeader}>Jumlah Rebusan</Text>
              <Text style={styles.tableHeader}>TBS Olah</Text>
              <Text style={styles.tableHeader}>Hasil CPO</Text>
              <Text style={styles.tableHeader}>Hasil Rendemen</Text>
            </View>
            {tableData.map((data, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{data.Waktu}</Text>
                <Text style={styles.tableCell}>{data.Nama}</Text>
                <Text style={styles.tableCell}>{data['Pengiriman']}</Text>
                <Text style={styles.tableCell}>{data['Stok Awal']}</Text>
                <Text style={styles.tableCell}>{data['Jumlah Rebusan']}</Text>
                <Text style={styles.tableCell}>{data['TBS Olah']}</Text>
                <Text style={styles.tableCell}>{data['Hasil CPO']}</Text>
                <Text style={styles.tableCell}>{data['hasil']}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <NavBarA activePage="Rendemen_A" />
      </View>
    </>
  );
};

export default Rendemen_A;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 27,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    padding: 30,
    marginTop: 23,
    fontSize: 24,
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
