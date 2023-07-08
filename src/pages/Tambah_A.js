import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';
import { PP } from '../assets';

const Tambah_A = () => {
  const navigation = useNavigation();
  const [user_id, setUser_id] = useState('');
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [password, setPassword] = useState('');
  const [jabatan, setJabatan] = useState('');

  const handleTambah = () => {
    const data = {
      user_id: user_id,
      nama: nama,
      nik: nik,
      password: password,
      jabatan: jabatan
    };

    axios.post('http://10.0.2.2:105/tambah_akun', data)
      .then((response) => {
        console.log(response.data.message);
        navigation.push('Akun_A');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <MainHeader label="Tambah Akun" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.pp}>
          <Image source={PP} style={styles.img} />
        </View>
        <View style={styles.wrapper}>
          <Input
            label="Nama Akun"
            height={50}
            labelOn
            value={nama}
            onChangeText={(text) => setNama(text)}
          />
          <Gap height={17} />
          <Input
            label="User.id"
            height={50}
            labelOn
            value={user_id}
            onChangeText={(text) => setUser_id(text)}
          />
          <Gap height={17} />
          <Input
            label="NIK"
            height={50}
            labelOn
            value={nik}
            onChangeText={(text) => setNik(text)}
          />
          <Gap height={17} />
          <Input
            label="Password"
            height={50}
            labelOn
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Gap height={17} />
          <Input
            label="Jabatan"
            height={50}
            labelOn
            value={jabatan}
            onChangeText={(text) => setJabatan(text)}
          />
          <Gap height={55} />
          <Button label="Tambah" onPress={handleTambah} />
        </View>
      </ScrollView>
    </>
  );
};

export default Tambah_A;

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
  },
  pp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 30,
    width: 72,
    height: 67,
  },
});
