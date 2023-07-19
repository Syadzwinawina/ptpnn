import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const NavPetugasTangki = ({activePage}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.navbar}>

<TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'MenuSatu' && styles.activeNavbarItem,
        ]}
        onPress={() => {
  
          navigation.navigate('MenuSatu');
        }}
      >
        <Image
          source={require('../../assets/images/rumahAktif.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>Home</Text>
      </TouchableOpacity>
     
<TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'Beranda' && styles.activeNavbarItem,
        ]}
        onPress={() => {
                  navigation.navigate('Beranda');
        }}
      >
        <Image
          source={require('../../assets/images/minyakAktif.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>Sounding</Text>
      </TouchableOpacity>

    
    </View>
  )
}

export default NavPetugasTangki

const styles = StyleSheet.create({

    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      // Styling untuk konten lain di atas NavBar
    },
    navbar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around', 
      alignItems: 'center',
      height: 60,
      borderTopWidth: 1,
      borderTopColor: '#000000',
    },
    navbarItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
    },
    activeNavbarItem: {
      backgroundColor: '#9acd32',
    },
    navbarItemText: {
      fontSize: 14,
      marginTop: 2,
      color: '#000000',
    },
    navbarIcon: {
      width: 25,
      height: 25,
      marginBottom: 2,
    },
    });
    