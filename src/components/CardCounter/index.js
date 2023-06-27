import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gap from '../Gap';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';

const CardCounter = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.username}>419336 Kg</Text>
        <View style={styles.wrapContent}>
          <View>
            <Text style={styles.innerCard}>Tinggi</Text>
            <Gap height={5} />
            <Text style={styles.innerCard}>5000 Cm</Text>
          </View>
          <View>
            <Text style={styles.innerCard}>Suhu</Text>
            <Gap height={5} />
            <Text style={styles.innerCard}>32 °C</Text>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <Button label="Simpan" width={136} onPress={() => navigation.push('Riwayat')}/>
        <Button label="Cancel" width={136} onPress={() => navigation.push('MenuSatu')} />
      </View>
      <View>
        <Button label="Keluar" onPress={() => navigation.push('MenuSatu')} />
      </View>
    </>
  );
};

export default CardCounter;

const styles = StyleSheet.create({
  username: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '700',
    fontSize: 20,
  },
  wrapper: {
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
    marginBottom: 29,
  },
  wrapContent: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerCard: {
    fontSize: 11,
    fontWeight: '700',
    color: 'black',
  },
  btn: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
