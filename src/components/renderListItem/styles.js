import {StyleSheet} from 'react-native'
import {vh, vw} from '../../units'
import theme from '../../utils/theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2*vh
    },
    line: {
        borderWidth: 0.8,
        borderColor: theme.colors.gray2
    }
}) 


export default styles