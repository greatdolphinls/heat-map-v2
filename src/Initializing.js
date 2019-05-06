import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { goToAuth, goHome } from './navigation'

import { USER_KEY } from './config'

export default class Initializing extends Component {

    // this is called after render()
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log('user: ', user) 
            if (user) {
                goHome()
            } else {
               goToAuth()
            }
        } catch (err) {
            console.log('error: ', err) 
            goToAuth()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading....</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 28
    }
})

