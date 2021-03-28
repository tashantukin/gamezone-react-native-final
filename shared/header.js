
import React from 'react'
import { View, Text, StyleSheet,Image,ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native';


export default function header({navigation, title}) {


    const openMenu = () =>{
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>

        {/* icons */}

            <MaterialIcons name ='menu' size={28} onPress={ openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
            <Image source = {require('../assets/rating-1.png')} style={styles.headerIcon}  />
                          <Text style={styles.headerText}>GameZone</Text>
            </View>
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    header: {
        
       flex: 1,
       // width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    headerText: {

        fontWeight: 'bold',

        fontSize: 20,

        color: '#333',

        letterSpacing: 1,

    },
    icon: {
        position: 'absolute',
        left: 16
    },

    headerIcon: {
        width: 26,
        height: 26
    },
    headerTitle: {
        flexDirection: 'row',
        marginHorizontal: 10
    }

})