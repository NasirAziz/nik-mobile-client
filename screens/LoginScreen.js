import React from 'react';
import { StyleSheet, Image } from "react-native";
import { StackActions } from '@react-navigation/native';
import  AppTextInput  from '../components/AppTextInput';
import  Screen  from '../components/Screen';
import AppButton  from '../components/AppButton';

function LoginScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <Image style={styles.circles} source={require("../assets/circles.png")}/>

            <AppTextInput placeholder="Email" icon="email" onChangeText={text=>setUsername(text)} autoCapatalize="none" autoCorrent={false} keyboardType="email-address"/>
            <AppTextInput placeholder="Password" icon="lock" onChangeText={text=>setPassword(text)} autoCapatalize="none" autoCorrent={false} secureTextEntry textContentType="password"/>
            <AppButton title="Login" onPress={() => {
                console.log(username,password)
                }}/>
      
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    circles:{
        position:"absolute",
        // flexDirection:"row",
        alignSelf:"flex-end",
        width:"40%",
        height:"25%",
    
    },
    logo:{
        width:"100%",
        height:150,
        marginTop:100,
        marginBottom:40
    }
})
export default LoginScreen;