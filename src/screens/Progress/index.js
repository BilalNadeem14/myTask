import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, processColor } from 'react-native';
import renderListItem from '../../components/renderListItem';
import TextRegular from '../../components/TextWrappers/CircularStdBook'
import TextBold from '../../components/TextWrappers/CircularStdBold'
import styles from './styles';
import { vh, vw } from '../../units';
import { sampleImages } from '../../assets/images';
import {
    BarChart,
} from "react-native-chart-kit";
import theme from '../../utils/theme';
import Button from '../../components/buttons/Button';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';

const Home = (props) => {
    const threshold = 2100;

    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 23]
            }
        ]
    };

    const renderListAvatarContent = () => <View style={[styles.avatarContainer]}>
        <Image resizeMode='cover' source={sampleImages.profile_header} style={[styles.avatarImage,]} />
    </View>

    const indicators = [
        {
            color: 'red',
            label: 'Limit exceeded',
        },
        {
            color: 'yellow',
            label: 'Limit reached',
        },
        {
            color: 'blue',
            label: 'Below limit'
        },
    ]

    const renderIndicatorView = () => {
        return <View style={{
            position: 'absolute',
            justifyContent: 'center',
            marginTop: 1 * vh,
            right: 5 * vw
        }}>
            {React.Children.toArray(indicators.map(e => {
                return <View style={styles.indicatorItem}>
                    <Text style={{ color: 'white' }}>
                        {e.label}
                    </Text>
                    <View style={[styles.indicatorDot, { backgroundColor: e.color }]}>
                    </View>
                </View>
            }))}
        </View>
    }

    const getData = () => {
        let data = {
            labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],

            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43, 23],
                    strokeDashArray: [10, 50],
                    strokeWidth: 1,
                    withDots: true,
                    strokeDashOffset: 50,
                }
            ]
        }
        data.datasets[0].colors = data.datasets[0].data.map(e => {
            if (e > threshold){
                return () => "red"
            }else if (e == threshold){
                return () => "yellow"
            }else{
                return () => "blue"
            }
       })

    return data
    }

    const chartWidth = 80 * vw;
    const chartHeight = 35 * vh
    return <View style={styles.container}>
        <View style={styles.header}>
            <TextBold style={styles.textBold}>Stats</TextBold>
            {renderListAvatarContent()}
        </View>
        <View style={styles.chart}>
            <BarChart
                // style={graphStyle}
                data={getData()}
                // data = {{
                //     labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        
                //     datasets: [
                //         {
                //             data: [20, 45, 28, 80, 99, 43, 23],
                //             strokeDashArray: [10, 50],
                //             strokeWidth: 1,
                //             withDots: true,
                //             strokeDashOffset: 50,
                //             colors: [
                //                 () => "blue"
                //             ]
                //         }
                //     ]
                // }}
                width={chartWidth}
                height={chartHeight}
                yAxisLabel=""
                yAxisInterval="1"
                style={{
                    marginTop: 10 * vh

                }}
                xLabelsOffset={3}
                withCustomBarColorFromData={true}
                showValuesOnTopOfBars={true}
                showBarTops={false}
                withInnerLines={false}
                fromZero={true}
                // hidePointsAtIndex={}
                // segments={2}
                getDotProps
                chartConfig={{
                    // useShadowColorFromDataset : true,
                    backgroundColor: theme.colors.primaryColor,
                    backgroundGradientFrom: theme.colors.primaryColor,
                    backgroundGradientTo: theme.colors.primaryColor,
                    // backgroundGradientFrom: "#fb8c00",
                    // backgroundGradientTo: "#ffa726",
                    barPercentage: 0.5,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                        width: 5,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "`",
                        stroke: "#ffa726"
                    },
                    // stackedBar: false

                }}
            // verticalLabelRotation={30}
            />
            {renderIndicatorView()}
        </View>
        <Button 
            title="Logout"
            onPress={() => {
                props.logout()
            }}
        />
    </View>
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Home)