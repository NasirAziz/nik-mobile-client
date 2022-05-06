import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppBar(props) {
    return (
        <Appbar style={{ backgroundColor: colors.primary }}>
            <Appbar.Action
                icon="menu"
                onPress={() => {
                    console.log('Pressed Menu drawer')
                }}
            />
            <Image source={require("../assets/logo.png")} style={styles.logo} />

            <Appbar.Action
                icon={require("../assets/Ellipse4.png")}
                onPress={() => console.log('Profile Icon')}
                style={styles.profileIcon}
            />
        </Appbar>
    );
}

const styles = StyleSheet.create({
    logo: { width: 70, height: 50, marginLeft: 10 },
    profileIcon: { width: 50, height: 50, position: "absolute", right: 0, marginEnd: 10 },
})

export default AppBar;