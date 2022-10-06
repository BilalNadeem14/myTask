import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import LoginUser from '../screens/LoginUser';

const AuthStack = createStackNavigator()

const AuthStackNavigator = () => {
    return(
        <AuthStack.Navigator
            // screenOptions={getOptions}
            initialRouteName="Login"
        >
            <AuthStack.Screen
                options={getOptions}
                name='LoginUser'
                component={LoginUser}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator