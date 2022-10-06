import { StyleSheet } from "react-native";
import {vh, vw} from "../../units";

export default styles = StyleSheet.create({
    icon:{
        height: 2.1 * vh,
        width: 2.2* vh,
        resizeMode: 'contain',
    },
    container:{
        height:5*vh,
        width:5*vw,
        alignItems:'center',
        justifyContent:'center'
    }
})