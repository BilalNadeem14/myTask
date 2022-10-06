import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import Progress from '../screens/Progress';

const AuthStack = createStackNavigator()

const ProgressStackNavigator = () => {
    return(
        <AuthStack.Navigator
            // screenOptions={getOptions}
            initialRouteName="Progress"
        >
            <AuthStack.Screen
                options={getOptions}
                name='Progress'
                component={Progress}
            />
        </AuthStack.Navigator>
    )
}

export default ProgressStackNavigator