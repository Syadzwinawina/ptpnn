import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';
import { PP } from '../assets';

const Tambah_CPO_A = () => {
  const navigate = useNavigation();
  const [id, setId] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [volume, setVolume] = useState('');
  const [beda, setBeda] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleTambahCPO = () => {
    const data = {
      id: id,
      tinggi: tinggi,
      volume: volume,
      beda: beda,
      keterangan: keterangan,
    };

    axios
      .post('http://10.0.2.2:105/tambah_cpo', data)
      .then((response) => {
        console.log(response.data.message);
        navigate.push('CPO_A');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <MainHeader label="Tambah" onPress={() => navigate.goBack()} />
      <ScrollView>
        <View style={styles.pp}>
          <Image source={PP} style={styles.img} />
        </View>
        <View style={styles.wrapper}>
          <Input
            label="No"
            height={50}
            labelOn
            value={id}
            onChangeText={(text) => setId(text)}
          />
          <Gap height={17} />
          <Input
            label="Tinggi"
            height={50}
            labelOn
            value={tinggi}
            onChangeText={(text) => setTinggi(text)}
          />
          <Gap height={17} />
          <Input
            label="Volume"
            height={50}
            labelOn
            value={volume}
            onChangeText={(text) => setVolume(text)}
          />
          <Gap height={17} />
          <Input
            label="Beda"
            height={50}
            labelOn
            value={beda}
            onChangeText={(text) => setBeda(text)}
          />
          <Gap height={17} />
          <Input
            label="Keterangan"
            height={50}
            labelOn
            value={keterangan}
            onChangeText={(text) => setKeterangan(text)}
          />
          <Gap height={55} />
          <Button label="Tambah" onPress={handleTambahCPO} />
        </View>
      </ScrollView>
    </>
  );
};

export default Tambah_CPO_A;

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
