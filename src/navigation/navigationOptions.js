import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { vw, vh } from '../units';
import fonts from '../assets/fonts'
import { TransitionPresets } from '@react-navigation/stack';
import styles from './styles';
import { icons } from '../assets/images';
import ExtendedHeader from '../components/ExtendedHeader';
import IconButton from '../components/IconButton';
import theme from '../utils/theme';
import { connect, useDispatch } from 'react-redux';
import { store } from '../redux/index'
import { StackActions } from '@react-navigation/native';
import { actions } from '../redux/actions';

export const defaultOptions = (activeRouteName, props, removeuser) => {
    return {
        headerStyle: {
            height: 10 * vh,
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: "#F7F7F7"

        },
        // headerRightContainerStyle: {
        //     paddingRight: 5 * vw,
        //     paddingBottom: 6 * vh
        // },
        // headerLeftContainerStyle: {
        //     paddingLeft: 5 * vw,
        //     paddingBottom: 6 * vh
        // },
        headerRight: () => showRightButton(activeRouteName, props),
        headerLeft: () => showLeftButton(activeRouteName, props, removeuser),

        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: 'center',
        headerTitleStyle: {
            // fontFamily: fonts.Fonts.GB,
            color: '#fff',
            fontSize: 2.8 * vh,
            // paddingBottom: 6 * vh

        },

        headerBackground: () => (
            <View style={styles.headerBgContainer}>
                <View style={styles.headerStyle}
                />
                {/* <Image style={styles.headerImg}
                    source={icons.headerBg} /> */}
            </View>
        ),
    };
};



export const showRightButton = (activeRouteName, { navigation, route }) => {
    // console.log('state from store: ', store.getState().authReducer.loggedIn);
    if (!store.getState()?.authReducer?.loggedIn) {
        return null
    }

    switch (activeRouteName) {
        case 'PasswordRecovery':
        case 'Login':
        case 'Signup':
        case 'Faqs':
        case 'Contact':
        // case 'Menu' :
        case 'Notification': //&& !store.getState().authReducer.loggedIn
            // case !store.getState().authReducer.loggedIn:
            //remove notification from homeScreen as well
            //remove from serviceDeatils screen 
            return null

        default:
            return <IconButton onPress={() => navigation.navigate("Notification")} style={[styles.headerButtons]} icon={icons.notification} />

    }
};
export const showLeftButton = (activeRouteName, props, removeUser) => { //{ navigation, route }
    // console.log('activeRouteName, navigation', activeRouteName, navigation, route);
    console.log('props showLeftButton', props);
    // const dispatch = useDispatch()
    switch (activeRouteName) {
        case 'UsersListing':
        case 'Login':
        case 'Progress':
            return null;


    }
    return (
        <IconButton onPress={() => {
            removeUser()
            // dispatch(actions.removeUserId)
            // navigation.dispatch(
            // StackActions.replace('UsersListing'))
            }}
            style={[styles.headerButtons]} icon={icons.backArrowWhite} />

    );
};

export const shouldHeaderBeShown = (activeRouteName) => {
    switch (activeRouteName) {
        case 'Login':
            return true
        case 'Home':
            return true;
        case 'MyProfile':
            return true
        case 'EditProfile':
            return true
        default:
            return true;
    }
};


export const getTitle = (activeRouteName, props) => {
    switch (activeRouteName) {
        case 'AddFood':
            return 'Add Item';
        case 'LoginUser':
            return 'Login';
        case 'Home':
            return 'Home'
        case 'UsersListing':
            return 'Users'
        case 'Progress':
            return 'Progress'
        default:
            return 'TITLE';
    }
};

export const getOptions = (props, removeUser) => {
    console.log("getOptions props", removeUser);
    var activeRouteName = props.route.state
        ? props.route.state.routes[props.route.state.index].name
        : props.route.name;
    // console.log('active routename', activeRouteName);
    return {
        ...defaultOptions(activeRouteName, props, removeUser),
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: shouldHeaderBeShown(activeRouteName),
        title: getTitle(activeRouteName, props),
        ...(activeRouteName == 'Services' || activeRouteName == 'Signup' || activeRouteName == 'Menu'
            || activeRouteName == "MyProfile" || activeRouteName == 'EditProfile' || activeRouteName == "ServiceDetail"
            ? { header: (props) => <ExtendedHeader {...props} /> }
            : null),
        gestureEnabled: false,
    };
};

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = () => {
    return {
      };
}

// export const getOptions = connect(mapStateToProps, mapDispatchToProps)(getOptions2)
