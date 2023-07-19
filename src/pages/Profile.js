// import {Image, StyleSheet, View} from 'react-native';
// import React, {useContext} from 'react';
// import {PP} from '../assets';
// import Input from '../components/Input';
// import Gap from '../components/Gap';
// import Button from '../components/Button';
// import MainHeader from '../components/MainHeader';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {AuthContext} from './AuthContext';

// const Profile = ({name, user_id, nik, jabatan}) => {
 
//   const navigate = useNavigation();
//   const [user,setUser] = useState(true);
//   console.log(user)


//   const callUser = async()=>{
//     try {
//       const dataUser = await AsyncStorage.getItem('user');
//       setUser(JSON.parse(dataUser)) 
//     } catch (error) {
//       console.log(error)
//     }

//   }

// useEffect(()=>{
//   callUser();
// },[])  
//   return (
//     <>
//       <MainHeader label="Profile" onPress={() => navigate.goBack()} />
//       <View style={styles.pp}>
//         <Image source={PP} style={styles.img} />
//       </View>
//       <View style={styles.wrapper}>
//         <Input label="Nama Akun" height={50} labelOn value={name=user?.data[2]} />
//         <Gap height={17} />
//         <Input label="User.id" height={50} labelOn value={user_id=user?.data[0]} />
//         <Gap height={17} />
//         <Input label="NIK" height={50} labelOn value={nik=user?.data[3]} />
//         <Gap height={17} />
//         <Input label="Jabatan" height={50} labelOn value={jabatan=user?.data[5]} />
//         <Gap height={55} />
//         <Button label="Keluar" onPress={() => navigate.push('Login')} />
//       </View>
//     </>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   wrapper: {
//     padding: 30,
//   },
//   pp: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   img: {
//     marginTop: 30,
//     width: 72,
//     height: 67,
//   },
// });

import {Image, StyleSheet, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {PP} from '../assets';
import Input from '../components/Input';
import Gap from '../components/Gap';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

const Profile = () => {
  const navigate = useNavigation();
  const {user} = useContext(AuthContext)

  return (
    <>
      <MainHeader label="Profile" onPress={() => navigate.goBack()} />
      <View style={styles.pp}>
        <Image source={PP} style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <Input
          label="Nama Akun"
          height={50}
          labelOn
          value={user ? user.data[2] : ''}
        />
        <Gap height={17} />
        <Input
          label="User.id"
          height={50}
          labelOn
          value={user ? user.data[0] : ''}
        />
        <Gap height={17} />
        <Input
          label="NIK"
          height={50}
          labelOn
          value={user ? user?.data[3]?.toString() : ''}
        />
        <Gap height={17} />
        <Input
          label="Jabatan"
          height={50}
          labelOn
          value={user ? user.data[5] : ''}
        />
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
