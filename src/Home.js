import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native'
import { goToAuth } from './navigation'
import { Navigation } from 'react-native-navigation'

import { USER_KEY } from './config'

export default class Home extends Component {
    /*

    Notice a static get options() class function. You can add this
    to your screen React component definition to add styling & 
    properties to your navigator appearance. In ours, we’ve just 
    given the topBar a title property.

    */
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
            }
        };
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY)
            goToAuth()
        } catch (err) {
            console.log('error signing out...:', err)
        }
    }

    /*
        NOTE: 
        We are calling navigation methods here. Instead of 
        using props like in the old version (this.props.navigator.push), 
        we’re importing the Navigation API and calling Navigation.push.
    */
    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <Text> Hello from Home screen.</Text>
    //             <Button onPress={this.logout} title="Sign Out" />
    //             <Button onPress={ () => {
    //                 Navigation.push(this.props.componentId, {
    //                     component: {
    //                         name: 'Screen2',
    //                     }
    //                 })    
    //             }} 
    //             title="View next screen"
    //             />
    //         </View>
    //     )
    // }

    render() {
        return (
             <View style={styles.container}>
                <Text> Hello from Home screen.</Text>
                <Button onPress={this.logout} title="Sign Out" />
                <Button onPress={ () => {
                    Navigation.push(this.props.componentId, {
                        component: {
                            name: 'Screen2',
                        }
                    })    
                }} 
                title="View next screen"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})