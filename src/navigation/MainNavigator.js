import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'
import AuthStackNavigator from './AuthStack'
import {createStackNavigator} from '@react-navigation/stack'

import HomeTabNavigator from './TabNavigator';
import UsersListing from '../screens/UsersListScreen'
import { getOptions } from './navigationOptions'

const RootStack = createStackNavigator()

const RootStackNavigator = (props) => {
    const {loggedIn , user } = props
    console.log("IUSERLOGGEDIN: ", props);
    // const loggedIn = true
    const Admin = user?.role == 'ADMIN'
    const userSelected = props.userId != null
    return !loggedIn?(
        <RootStack.Navigator
            headerMode="none"
            // screenOptions={{
            //     headerShown: false
            // }}
            initialRouteName={'AuthStackNavigator'}
        >
            <RootStack.Screen
                name="AuthStackNavigator"
                component={AuthStackNavigator}
            />
        </RootStack.Navigator>
    ): Admin && !userSelected?(
        <RootStack.Navigator
            // screenOptions={getOptions}
            // headerMode="none"
            screenOptions={{
                headerShown: false
            }}
        >
            <RootStack.Screen 
                options={getOptions}
                name='UsersListing'
                component={UsersListing}
            />
        </RootStack.Navigator>
    ): Admin && userSelected?(
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <RootStack.Screen 
                name='HomeTabNavigator'
                component={HomeTabNavigator}
            />
        </RootStack.Navigator>
    ): ( //User Flow
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'UsersListing'}
        >
            <RootStack.Screen 
                name='HomeTabNavigator'
                component={HomeTabNavigator}
            />
        </RootStack.Navigator>
    )
}

const mapStateToProps = (state) =>{
    console.log('state: ', state);
    return {
        loggedIn: state.authReducer.token,
        user : state.authReducer?.user,
        userId : state.authReducer?.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(RootStackNavigator)