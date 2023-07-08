import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import { PP } from '../assets';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import {useNavigation} from '@react-navigation/native';


const Edit_CPO = () => {
  const navigate = useNavigation();
  return (
    <>
      <MainHeader label="Edit CPO" onPress={() => navigate.goBack()} />
      <View style={styles.pp}>
        <Image source={PP} style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <Input label="No" height={50} labelOn />
        <Gap height={17} />
        <Input label="Tinggi" height={50} labelOn />
        <Gap height={17} />
        <Input label="Volume" height={50} labelOn />
        <Gap height={17} />
        <Input label="Beda" height={50} labelOn />
        <Gap height={17} />
        <Input label="Keterangan" height={50} labelOn />
        <Gap height={55} />
        <Button label="Simpan Perubahan" onPress={() => navigate.push('CPO_A')} />
      </View>
    </>
  );
};

export default Edit_CPO;

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
