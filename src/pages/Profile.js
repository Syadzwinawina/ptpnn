import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import { PP } from '../assets';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import {useNavigation} from '@react-navigation/native';


const Profile = () => {
  const navigate = useNavigation();
  return (
    <>
      <MainHeader label="Profile" onPress={() => navigate.goBack()} />
      <View style={styles.pp}>
        <Image source={PP} style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <Input label="Nama Akun" height={50} labelOn />
        <Gap height={17} />
        <Input label="User.id" height={50} labelOn />
        <Gap height={17} />
        <Input label="NIK" height={50} labelOn />
        <Gap height={17} />
        <Input label="Jabatan" height={50} labelOn />
        <Gap height={55} />
        <Button label="Keluar" onPress={() => navigate.push('Login')} />
      </View>
    </>
  );
};

export default Profile;

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
