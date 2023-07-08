import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ic from '../../../src/assets/images/pp.png';
import hm from '../../../src/assets/images/humb.png';
import NavButton from '../NavButton';
import pp from '../../assets/images/ic-profile.png';
import cl from '../../assets/images/ic-close.png';
import hs from '../../assets/images/ic-riwayat.png';
import ex from '../../assets/images/ic-exit.png';
import {useNavigation} from '@react-navigation/native';

const Header = () => {

  const navigation = useNavigation();
  const [off, setOff] = useState(true);
  return (
    <View style={styles.wrapper}>
      <View style={styles.profile}>
        <Image source={ic} style={styles.pp} />
        <Text style={styles.name}>User Name</Text>
      </View>
      <TouchableOpacity onPress={() => setOff(!off)}>
        <Image source={hm} style={styles.hm} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.close(off)} onPress={() => setOff(!off)}>
        <Image source={ex} style={styles.ex} />
      </TouchableOpacity>
      <View style={styles.nav(off)}>
        <NavButton
          label="Profil"
          img={pp}
          onPress={() => navigation.navigate('Profile')}
        />
        <NavButton
          label="Riwayat"
          img={hs}
          onPress={() => navigation.navigate('Riwayat')}
        />
        <NavButton
          label="Keluar"
          img={cl}
          onPress={() => navigation.push('Login')}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#18AB00',
    paddingHorizontal: 30,
    height: 90,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  pp: {
    width: 48,
    height: 46,
    marginRight: 10,
  },
  hm: {
    width: 31,
    height: 30,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  nav: off => ({
    position: 'absolute',
    display: off ? 'none' : 'flex',
    width: 180,
    top: 0,
    backgroundColor: 'black',
    right: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }),
  close: off => ({
    display: off ? 'none' : 'flex',
    position: 'absolute',
    top: 5,
    left: '55%',
  }),
  ex: {
    width: 20,
    height: 20,
  },
});
