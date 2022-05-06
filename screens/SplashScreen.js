import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

function SplashScreen({navigation}) {
    return (
        <Screen style={{justifyContent:'center',flex:1}}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <Image style={styles.circles} source={require("../assets/circles.png")}/>
             <View style={styles.button}>

             <AppButton title="Login" onPress={() => {
                 navigation.navigate('Login');
                }}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    button:{
        paddingRight:50,
        paddingLeft:50,
    },
    circles:{
        position:"absolute",
        top:0,
        right:0,
        // width:"40%",
        // height:"25%",
    
    },
    logo:{
        height:150,
        alignSelf:'center',
    }
});

export default SplashScreen;