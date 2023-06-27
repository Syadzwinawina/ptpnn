import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';

const CardCounterR = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <Text style={styles.label}>CPO</Text>
                    <View style={styles.valueWrapper}>
                        <Text style={styles.value}>         90698 Kg</Text>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.row}>
                    <Text style={styles.label}>TBS Olah</Text>
                    <View style={styles.valueWrapper}>
                        <Text style={styles.value}>500000 Kg</Text>
                    </View>
                </View>
                <View style={styles.wrapContent} />
            </View>
            <Text style={styles.percentText}>x 100%</Text>

            <Text style={styles.label}>Hasil</Text>
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <Text style={styles.value}>18.20%</Text>
                </View>
                <View style={styles.wrapContent} />
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

export default CardCounterR;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginRight: 8,
        textAlign: 'left',
        color: '#000000',
        fontWeight: '700',
        fontSize: 20,
    },
    value: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '700',
        fontSize: 20,
    },
    wrapper: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        marginBottom: 10,
    },
    line: {
        borderBottomWidth: 3,
        borderColor: 'black',
        marginVertical: 2,
    },
    percentText: {
        textAlign: 'right',
        color: '#000000',
        fontSize: 20,
    },
    wrapContent: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valueWrapper: {
        flex: 1,
    },
    btn: {
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
