import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, Image,} from 'react-native';

import Screen from '../components/Screen';

function HomeScreen(props) {

    return ( 
        <Screen>
            <Appbar>
                <Appbar.Action
                    icon="menu"
                    onPress={() => console.log('Pressed Menu drawer')}
                />
                <Image source={require("../assets/logo.png")} style={styles.logo}/>
                
                <Appbar.Action
                    icon={require("../assets/Ellipse4.png")}
                    onPress={() => console.log('Profile Icon')}
                    style={styles.profileIcon}
                />
            </Appbar>


        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {width: 50, height: 50, marginLeft: 10},
    profileIcon: {width: 50, height: 50, position:"absolute", right:0, marginEnd:10} ,
})

export default HomeScreen;