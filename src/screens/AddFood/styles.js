import {StyleSheet, Platform} from 'react-native';

import theme from '../../utils/theme';
import fonts from '../../assets/fonts';
import {vw, vh} from '../../units';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {},
  scrollContent: {
    width: 100 * vw,
    alignItems: 'center',
    paddingTop: 4 * vh,
    paddingHorizontal: 4 * vw,
  },
  expandedRow: {
    width: 92 * vw,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWidth: {
    width: 43 * vw,
  },
  inputFieldStyle: {
    fontFamily: fonts.Fonts.JR,
  },
  messageField: {
    height: 20 * vh,
  },
  inputMessageFieldStyle: {
    fontFamily: fonts.Fonts.JR,
    height: 20 * vh,
    paddingTop: 1 * vh,
  },
  btnLabel: {
    color: theme.colors.primaryColor,
  },
  btn: {
    // width: 40 * vw,
    marginVertical: 2 * vh,
    borderWidth: 0.3 * vh,
    borderColor: theme.colors.primaryColor,
  },
  accountText: {
    fontSize: 1.8 * vh,
    color: theme.colors.blue,
  },
  loginText: {
    fontSize: 1.8 * vh,
    color: theme.colors.primaryColor,
    textDecorationLine: 'underline',
  },
  forgotRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 92 * vw,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 1.8 * vh,
    color: theme.colors.purple3,
    textDecorationLine: 'underline',
  },
  textRow: {
    width: 86 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 6 * vh,
  },
  imageContainer: {
    alignSelf: 'center',
    // overflow: 'hidden',
    // height: 20*vh,
    width: 18*vh,
    // borderRadius: 10*vh,
  },
  profileImage: {
    height: 17 * vh,
    width: 17 * vh,
    borderRadius: 17/2 * vh,
    // resizeMode: 'cover',
  },

  useravatar: {
    height: 10 * vh,
    width: 10 * vh,
    borderRadius: 10 / 2 * vh,
    // resizeMode: "contain"
  },
  userCircle: {
    // borderWidth: 1,
    width: 10 * vh,
    height: 10 * vh,
    borderRadius: 10 / 2 * vh,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5 * vh,
    marginLeft: 38 * vw,
    shadowColor: theme.colors.black,
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
    elevation: 2,
},
cameraImg: {
    width: 1.8 * vh,
    height: 1.8 * vh,
    resizeMode: "contain"
},
cameraBtn: {
    // borderWidth: 1,
    backgroundColor: theme.colors.primaryColor,
    width: 3.7 * vh,
    height: 3.7 * vh,
    borderRadius: 3.7 / 2 * vh,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0 * vh,
    right: 6 * vw,
}
});
