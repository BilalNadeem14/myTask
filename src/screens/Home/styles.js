import { StyleSheet } from 'react-native'
import fonts from '../../assets/fonts'
import { vh, vw } from '../../units'
import theme from '../../utils/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray2,
        paddingHorizontal: 5 * vw
    },
    inputWidth: {
        width: 43 * vw,
    },
    goButton:{
        height: 5 * vh,
        width: 5 * vh,
        alignSelf:'flex-end',
        borderRadius : (5/2) * vh
    },
    input: {
        height: 4 * vh,
        width: 30 * vw,
        justifyContent: 'center',
        marginBottom: 0
    },
    inputFieldStyle: {
        fontFamily: fonts.Fonts.JR
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3 * vh,
        marginBottom: 2 * vh,
        alignItems: 'center'
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
    avatarImage: {
        height: 6 * vh,
        width: 6 * vh,
        borderRadius: (6 * vh) / 2
    },
    textBold: {
        fontSize: 3 * vh
    },
    filter: {
        // height: 5 * vh,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 4 * vw,
        justifyContent: 'space-between',
        paddingRight: 2 * vw,
        borderRadius: 1.5 * vh,
        width: "100%",
        paddingVertical: 1 * vh

    },
    row: {
        flexDirection: 'row',
        width: "100%",
        // justifyContent: 'space-between',
    },
    filterText: {
        marginRight: 3 * vw,
        fontWeight: 'bold'
    },
    chart: {
        height: 20 * vh,
        backgroundColor: theme.colors.primaryColor,//'green',
        marginVertical: 1 * vh,
        borderRadius: 2 * vh,
        paddingHorizontal: 4 * vw,
        // paddingVertical: 2*vh
    },
    whiteText: {
        color: 'white',
    },
    whiteLargeText: {
        color: 'white',
        fontSize: 7 * vh,
        textAlign: 'center',
        // marginTop: 3*vh,
        // backgroundColor: 'red'
    },
    whiteLargeText2: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 5 * vh,
        marginBottom: 1 * vh
    },
    whiteLargeText3: {
        color: 'white',
        textAlign: 'center',
        fontSize: 2 * vh,
    },

    flatList: {
        borderRadius: 2 * vh,
        backgroundColor: 'white',
        paddingHorizontal: 4 * vw,
        // flex: 1
        // marginBottom: 5*vh
    },
    listHeader: {
        paddingTop: 1 * vh,
    },
    redText: {
        color: theme.colors.orange
    }
})


export default styles