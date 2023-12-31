import React, { useCallback, useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Gap from '../components/Gap';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {setUser,user} = useContext(AuthContext)

  // useEffect(() => {
  //   checkPreviousLogin();
  // }, []);

  // const checkPreviousLogin = useCallback(async () => {
  //   try {
  //     const savedUser = await AsyncStorage.getItem('user');
  //     console.log("SAVED:::",savedUser)
  //     setUser(savedUser)

   
  //     if (savedUser) {
  //         navigation.navigate('Dashoard_A')
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  const login = useCallback(async () => {
    try {
      const response = await axios.post('http://10.0.2.2:105/login', {
        user_id: userId,
        password: password,
      });
      
      console.log('data:::::', response?.data?.data);
      
      if (response?.data?.error === 'false') {
        await AsyncStorage.setItem('user', JSON.stringify(response?.data));
        //  await AsyncStorage.setItem('user', JSON.stringify(response));
        const dataUser = await AsyncStorage.getItem('user');
        setUser(JSON.parse(dataUser))

        // console.log(dataUser?.data[5] ,"THAT USER:::")
        if(response?.data?.data[5] === "Kerani CPO"){
        navigation.replace('Dashboard_A');
      }else{
        navigation.navigate('MenuSatu');

      }
        // navigation.navigate('MenuSatu');
      } else {
        setErrorMessage('User_id atau Password salah');
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
