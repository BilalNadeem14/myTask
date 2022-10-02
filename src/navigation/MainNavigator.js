import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/LoginScreen'
// import Home from '../screens/general/Home'

const RootStack = createStackNavigator()

const RootStackNavigator = (props) => {
    const { loggedIn } = props
    return !loggedIn ? (
        <RootStack.Navigator
            headerMode="none"
            initialRouteName={'LoginScreen'}
        >
            <RootStack.Screen
                name="LoginScreen"
                component={Login}
            />
        </RootStack.Navigator>
    ) : (
        null
        // <RootStack.Navigator
        //     headerMode="none"
        //     initialRouteName={'HomeScreen'}
        // >
        //     <RootStack.Screen
        //         name='HomeScreen'
        //         component={Home}
        //     />
        // </RootStack.Navigator>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.loggedIn
    }
}


export default connect(mapStateToProps, null)(RootStackNavigator)