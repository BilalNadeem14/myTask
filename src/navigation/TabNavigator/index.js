import React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import { getOptions } from './navigationOptions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MenuStackNavigator from './MenuNavigator';
// import ChatStackNavigator from './ChatNavigator';
// import PackageStackNavigator from './PackageNavigator';
import HomeStackNavigator from '../HomeNavigator';
// import AddFood from '../../screens/AddFood';
import TabBarButton from '../../components/TabBarButton';
import styles from '../styles'
import { getOptions } from '../navigationOptions';
import AuthStackNavigator from '../AuthStack';
import AddFoodNavigator from '../AddFoodNavigator';
import ProgressStackNavigator from '../ProgressStack';


const HomeTabs = createBottomTabNavigator();


const HomeTabNavigator = (props) => {

    return (

        <HomeTabs.Navigator
            tabBarPosition='bottom'
            lazy={true}
            tabBarOptions={{
                style: styles.tabStyle,
                tabStyle: styles.homeTab,
                iconStyle: styles.tabIcon,
                showIcon: true,
                activeTintColor: theme.colors.fontWhite,
                inactiveTintColor: theme.colors.fontWhite,
                showLabel: false,

                indicatorStyle: styles.indicatorStyle,
                indicatorContainerStyle: styles.indicatorContainerStyle,
            }}
            initialRouteName={'HomeStackNavigator'}
            // screenOptions={{
            //     headerShown: false
            // }}
        >

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Home' />
                        )
                    },
                }}

                name="HomeStackNavigator"
                component={HomeStackNavigator}

            />

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='AddFood' />
                        )
                    },
                }}

                name="AddFood"
                component={AddFoodNavigator} //AddFood

            />

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Chat' />
                        )
                    },
                }}

                name="Profile"
                component={ProgressStackNavigator}

            />
        </HomeTabs.Navigator>

    );
}
export default HomeTabNavigator;
