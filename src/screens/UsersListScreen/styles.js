import { StyleSheet } from 'react-native'
import {vw, vh} from '../../units'

export default StyleSheet.create({
    mainContianer: {
        flex: 1,
        paddingVertical: 2 * vh,
        // height: 100 * vh,
        // width: 100 * vw
    },
    header_container: {
        justifyContent: 'space-between',
        paddingVertical: 3 * vh,
        paddingHorizontal: 5 * vw,
        alignItems: 'center'
    },
    headerTitleStyles: {
        fontSize: 3 * vh,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000000'

    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 0.5 * vh,
        justifyContent: 'space-between',
        // paddingHorizontal: 1 * vw
    },
    headerEndtContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 3 * vw,
        width: 30 * vw,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatarContainer: {
        padding: 0.3 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 7 * vh, width: 7 * vh, 
        borderRadius: (7 * vh) / 2, 
        borderColor: 'yellow', 
        borderWidth: 0.2 * vh

    },
    avatarWrapperContainer: {
        padding: 0.3 * vh,
        borderRadius: (12.5 * vh) / 2,
        borderColor: 'white',
        borderWidth: 0.4 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 9 * vh, 
        width: 9 * vh
    },

    avatarImage: {
        height: 6 * vh, 
        width: 6 * vh, 
        borderRadius: (6 * vh) / 2
    },
    listStyles: {
        // alignItems:'center'
        // paddingVertical: 1 * vh,
        // paddingHorizontal: 3 * vw
        paddingBottom: 3 * vh
    },
    listSeperator: {
        // marginVertical: 1 * vh,
        // marginTop: 20 * vh,
        height: 0.1 * vh,
        width: 90 * vw,
        backgroundColor: 'lightgray',
        alignSelf: 'center'
    },
    postImage: {
        height: 20 * vh,
        width: 90 * vw,
        borderRadius: 2 * vh
    },
    listItemStyles: {
        paddingVertical: 1 * vh,
        justifyContent: 'space-between',
        // height: 15 * vh,
        width: 100 * vw,
        alignItems: 'center',
        // backgroundColor:'red'
        // flexDirection:'row'

    },
    listItemTitleContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%'
    }
})