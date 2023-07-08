import React, {useCallback, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Gap from '../components/Gap';
import axios from 'axios';

export default function Login({navigation}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const login = useCallback(async () => {
    try {
      const response = await axios.post('http://10.0.2.2:105/login', {
        user_id: userId,
        password: password,
      });
      console.log('data', response?.data);

      // cek jika login berhasil
      if (response?.data?.message === 'Login berhasil!') {

        navigation.navigate('Dashboard_A');

      } else {
        setErrorMessage('User_id atau Password salah'); // Set error message for incorrect password
      }
    } catch (error) {
      console.error(error);
    }
  }, [userId, password]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../src/assets/images/logo.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Input
          placeholder="Masukkan user ID"
          height={40}
          value={userId}
          onChangeText={text => setUserId(text)}
        />
        <Gap height={27} />
        <Input
          placeholder="Password"
          height={40}
          password
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
      </View>
      <Gap height={34} />
      <Button label="Masuk" onPress={login} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          *Apabila ada kesalahan saat proses login,{' '}
        </Text>
        <Text style={styles.text}>harap menghubungi Admin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'center',
  },
  image: {
    width: 149,
    height: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 37,
  },
  textWrapper: {
    marginTop: 103,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
});
