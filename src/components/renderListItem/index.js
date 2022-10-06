import React from 'react';
import { View, Text } from 'react-native';
import TextMedium from '../TextWrappers/CircularStdMedium'
import styles from './styles';


const renderListItem = (item) => {

    return (
        <View style={styles.container}>
           <View style={styles.row}>
            <View>
                <TextMedium>Lunch</TextMedium>
                <TextMedium>{item.item} calories</TextMedium>
            </View>
                <TextMedium>Image</TextMedium>
           </View>
            <View style={styles.line}/>
        </View>
    )
}

export default renderListItem