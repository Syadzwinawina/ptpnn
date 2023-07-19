import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Header from '../components/Header';
import NavBarA from '../components/NavBarA';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const Akun_A = () => {
  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);

  const {user} = useContext(AuthContext);


  const fetchData = () => {
    axios
      .get('http://10.0.2.2:105/tampilkan_data_pengguna')
      .then((response) => {
        setTableData(response.data.data_pengguna);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(()=>{
    fetchData()
  },[fetchData])

  const handleDelete = (user_id) => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda ingin menghapus data ini?',
      [
        {
          text: 'Tidak',
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            axios
              .delete(`http://10.0.2.2:105/hapus_pengguna`, { data: { user_id: user_id } })
              .then((response) => {
                console.log(response.data.message);
                fetchData(); // Memperbarui data setelah penghapusan berhasil
              })
              .catch((error) => {
                console.error(error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <Header name={user?.data[2]} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Daftar Akun Pengguna</Text>
        <View style={styles.btn}>
          <Button
            label="Tambah Akun"
            width={150}
            onPress={() => navigation.push('Tambah_A')}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Nama</Text>
              <Text style={styles.tableHeader}>NIK</Text>
              <Text style={styles.tableHeader}>Password</Text>
              <Text style={styles.tableHeader}>Aksi</Text>
            </View>
            {tableData.map((data, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{data.Nama}</Text>
                <Text style={styles.tableCell}>{data.NIK}</Text>
                <Text style={styles.tableCell}>{data.Password}</Text>
                <View style={styles.tableCell}>
                  <TouchableOpacity onPress={() => handleDelete(data.user_id)}>
                    <Text style={styles.actionButton}>Hapus</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <NavBarA activePage="Akun_A" />
      </View>
    </>
  );
};

export default Akun_A;

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
    marginBottom: 20,
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
  actionButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  scrollView: {
    flex: 1,
  },
});
