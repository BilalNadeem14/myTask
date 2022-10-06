import { StyleSheet } from 'react-native'
import { vh, vw } from '../../units'
import theme from '../../utils/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray2,
        paddingHorizontal: 5 * vw
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3 * vh,
        marginBottom: 2 * vh,
        alignItems: 'center'
    },
    indicatorDot: {
        borderRadius: (1 / 2) * vh,
        height: 1 * vh,
        width: 1 * vh
    },
    indicatorItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 35 * vw,
        marginTop: 0.2 * vh,
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
    row: {
        flexDirection: 'row'
    },
    chart: {
        height: 50 * vh,
        backgroundColor: theme.colors.primaryColor,//'green',
        marginVertical: 1 * vh,
        borderRadius: 2 * vh,
        // paddingHorizontal: 4*vw,
        paddingVertical: 2 * vh
    }
})


export default styles