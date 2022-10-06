import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import AddFood from '../screens/AddFood';

const AddFoodNav = createStackNavigator()

const AddFoodNavigator = () => {
    return(
        <AddFoodNav.Navigator
            screenOptions={getOptions}
            initialRouteName="AddFood"
        >
            <AddFoodNav.Screen
                options={getOptions}
                name='AddFood'
                component={AddFood}
            />
        </AddFoodNav.Navigator>
    )
}

export default AddFoodNavigator