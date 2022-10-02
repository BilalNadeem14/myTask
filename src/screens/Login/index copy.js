import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { generalImages } from '../../../assets/images';
import { vh, vw } from '../../../units';

import CircularStdMedium from '../../../components/TextWrappers/CircularStdMedium';
import CircularStdBook from '../../../components/TextWrappers/CircularStdBook';
import InputField from '../../../components/InputField';
import MainButton from '../../../components/buttons/MainButton';
import TextButton from '../../../components/buttons/TextButton';
import { validateEmail } from '../../../utils/Validation';
import { showToast } from '../../../Api/helperFunctions';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/actions';

// import { signin } from '../../../Statemanagement/Actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSignin = async () => {
    if (email?.trim() == '') {
      return showToast('Email is required');
    }

    if (!validateEmail(email)) {
      return showToast('Invalid email');
    }

    if (password?.trim() == '') {
      return showToast('Password in required');
    }

    let data = {
      email,
      password,
    };

    try {
      const response = await dispatch(actions.login(data));
      // props.navigation.navigate('DrawerNav');
      console.log(response);
    } catch (error) {
      console.log('error in login screen', error);
      return showToast(error);
    }
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#C9C8E7', '#C9C8E7', '#CECBE7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.9, 1]}>
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center', paddingHorizontal: vw * 5 }}
        source={generalImages.authBG}>
        {/* <KeyboardAwareScrollView
          contentContainerStyle={
            { flex: 1, justifyContent: 'center', paddingHorizontal: vw * 5 }
          }
          showsVerticalScrollIndicator={false}
        > */}
        <CircularStdMedium style={{ fontSize: vh * 4, alignSelf: 'center' }}>
          User Login
        </CircularStdMedium>

        <InputField placeholder="Email" value={email} onChangeText={setEmail} />

        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <MainButton
          title="Login"
          // onPress={() => props.navigation.navigate('DrawerNav')}
          onPress={onSignin}
        />

        {/* </KeyboardAwareScrollView> */}
      </ImageBackground>

    </LinearGradient>
  );
};

export default LoginScreen;
