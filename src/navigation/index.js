import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MainNavigator from './MainNavigator';
// import MainNavigator from './TabNavigator';
import AuthStack from './AuthStack';


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F7F7F7',
    }
}

export default Navigation = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            {/* <AuthStack/> */}
            <MainNavigator/>
        </NavigationContainer>
    )
}