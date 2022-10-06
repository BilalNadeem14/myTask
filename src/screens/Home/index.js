import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import renderListItem from '../../components/renderListItem';
import TextRegular from '../../components/TextWrappers/CircularStdBook'
import TextBold from '../../components/TextWrappers/CircularStdBold'
import styles from './styles';
import { vh, vw } from '../../units';
import { sampleImages } from '../../assets/images';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import MainInput from '../../components/MainInput';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import Button from '../../components/buttons/Button';


const Home = (props) => {
    let datee = new Date()

    const [state, setState] = useState({
        dob: '',
        date: datee,
        open: false,
        date_key: '',
        fromDate: datee,
        toDate: datee,
    })

    const filterFoodData = async () => {
        const { fromDate, toDate } = state;
        if (!moment(fromDate).isSame(moment(toDate), 'D')) {
            if (!moment(toDate).isAfter(moment(fromDate))) {
                let payload = {
                    from: fromDate, to: toDate,
                }
                console.log("payload: ", state);
                try {
                    const res = await props.filterData(payload)
                    console.log("Filter Data: ", res);
                } catch (error) {
                    console.log("Filter data Erro Catch: ", error);

                }

            } else {
                alert("To date must be a day ahead of from date atleast")
            }
        }
        else {
            alert("To date must no be equel to from date")
        }
    }

    const renderListAvatarContent = () => <View style={[styles.avatarContainer]}>
        <Image resizeMode='cover' source={sampleImages.profile_header} style={[styles.avatarImage,]} />
    </View>

    const listHeader = () => {
        return (
            <View style={styles.listHeader}>
                <TextRegular style={styles.redText}>
                    Food Items
                </TextRegular>
            </View>
        )
    }

    const dates = [
        {
            "id": 1,
            "key": "fromDate",
            "type": "date",
            "label": "Start Date",
            "required": false,
            "placeholder": "Select"
        },
        {
            "id": 2,
            "key": "toDate",
            "type": "date",
            "label": "End Date",
            "required": false,
            "placeholder": "Select"
        }
    ]

    const renderDateItem = (item, index) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 2 * vw }}>
            {/* <TextRegular style={styles.filterText}>{item.label}</TextRegular> */}
            <TouchableOpacity
                onPress={() => setState({
                    ...state,
                    open: true,
                    date_key: item.key
                })}
                style={{ justifyContent: 'center' }}
            >
                <MainInput
                    editable={false}
                    label={item.label}
                    placeholder={item.placeholder}
                    style={styles.input}
                    fieldStyle={styles.inputFieldStyle}
                    value={state[item.key]}
                    type={item?.key}
                    // onChangeText={onChangeText}
                    keyboardType="email-address"
                />
            </TouchableOpacity>
        </View>
    );

    const renderFilters = () => {
        return <View style={styles.filter}>
            <View style={styles.row}>
                {React.Children.toArray(dates.map(renderDateItem))}
                <Button onPress={filterFoodData} title={'Go'} style={styles.goButton} />
            </View>
        </View>
    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <TextBold style={styles.textBold}>Today</TextBold>
            {renderListAvatarContent()}
            {/* <Text>Image</Text> */}
        </View>
        {renderFilters()}
        <View style={styles.chart}>
            <TextRegular style={styles.whiteLargeText}>1500</TextRegular>
            <TextRegular style={styles.whiteLargeText3}>out of</TextRegular>
            <TextRegular style={styles.whiteLargeText2}>2100</TextRegular>

            {/* <TextRegular style={styles.whiteText}>2100</TextRegular> */}
        </View>
        <View style={[styles.filter, { marginBottom: 1 * vh }]}>
            <View style={styles.row}>
                <TextRegular style={styles.filterText}>Add Your Meal</TextRegular>
            </View>
            <Text style={styles.filterText}></Text>
        </View>
        <View
            style={{ flex: 1 }}
        >
            <FlatList
                style={styles.flatList}
                // contentContainerStyle={styles.flatLixst}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
                keyExtractor={(item) => { console.log(item); return item }}
                ListHeaderComponent={listHeader}
                renderItem={renderListItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
        <DatePicker
            mode='date'
            modal
            open={state.open}
            date={new Date()}
            // date={state[state.date_key] ?? new Date()}
            onConfirm={(date) => {
                setState({
                    ...state,
                    open: false,
                    [state.date_key]: moment(date).format('DD/MM/YYYY'),
                    dob: moment(date).format('DD/MM/YYYY'),
                })
            }}
            onCancel={() => {
                setState({
                    ...state,
                    open: false,
                })
            }}
        />
    </View>
}

const mapStates = state => {
    // console.log('state login', state)
    return state;
};
const mapProps = dispatch => {
    return {
        filterData: data => dispatch(actions.fetchFoodItems(data)),
    };
};

export default connect(mapStates, mapProps)(Home)