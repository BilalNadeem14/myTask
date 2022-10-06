import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import Home from '../screens/Home';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
// import Users from '../screens/Users';
// import Friends from '../screens/FriendListScreen';
// import TabBarButton from '../components/TabBarButton';
const HomeStack = createStackNavigator();

const HomeStackNavigator = (parentProps) => {
    return (
        <HomeStack.Navigator 
            screenOptions={(props) => getOptions(props, parentProps.removeUser)} //screenOptions
            // headerMode="screen"
            // screenOptions={{
            //     headerShown: false
            // }}
        >
            {/* <HomeStack.Screen
                name="Users"
                component={Friends}
            /> */}
            <HomeStack.Screen
                name="Home"
                component={Home}
            />
           
        </HomeStack.Navigator>
    );
};

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: data => dispatch(actions.saveUserId(data)),
      };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator);
