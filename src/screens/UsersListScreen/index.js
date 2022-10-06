import React from 'react'
import { FlatList, Image, LayoutAnimation, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import {vh, vw} from '../../units'
import {sampleImages} from '../../assets/images'
import {icons} from '../../assets/images'
import { StackActions } from '@react-navigation/native';
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'

const UsersListing = (props) => {

    renderListItemSeperator = () => <View style={styles.listSeperator} />

    const selectUser = () => {
            props.saveUserId(123)
        //     props.navigation.dispatch(
        //     StackActions.replace('HomeTabNavigator')
        //   )
    }

    renderListItems = ({ item, index }) => <View style={styles.listItemStyles}>
        <TouchableOpacity 
            onPress={selectUser}
            style={styles.listItemTitleContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {renderListAvatarContent()}
                <View>
                    <Text style={[styles.headerTitleStyles, { color: 'black', fontSize: 1.8 * vh }]}>
                        Bella Thorne
                    </Text>
                    <Text style={[styles.headerTitleStyles, { color: 'gray', fontSize: 1.5 * vh, fontWeight: '100' }]}>
                        My Name is my name
                    </Text>
                </View>

            </View>

        </TouchableOpacity>

        {renderListItemSeperator()}

    </View>

    renderListAvatarContent = () => <View style={[styles.avatarWrapperContainer]}>
        <View style={[styles.avatarContainer]}>
            <Image resizeMode='cover' source={sampleImages.profile_header} style={[styles.avatarImage, ]} />
        </View>

    </View>

        return (
            <View style={styles.mainContianer}>
                <FlatList 
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} 
                    contentContainerStyle={styles.listStyles}
                    renderItem={renderListItems} />
            </View>
        )
}


const mapProps = dispatch => {
    return {
      saveUserId: data => dispatch(actions.saveUserId(data)),
    };
  };
  
  export default connect(null, mapProps)(UsersListing);