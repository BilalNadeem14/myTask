import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { generalImages } from '../../assets/images';
import { vh, vw } from '../../units';

import CircularStdMedium from '../../components/TextWrappers/CircularStdMedium';
import CircularStdBook from '../../components/TextWrappers/CircularStdBook';
import InputField from '../../components/InputField';
import MainButton from '../../components/buttons/MainButton';
import TextButton from '../../components/buttons/TextButton';
import { validateEmail } from '../../utils/Validation';
import { showToast } from '../../Api/helperFunctions';
// import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions';

// import { signin } from '../../../Statemanagement/Actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import auth from '@react-native-firebase/auth';
// import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
import firestore from '@react-native-firebase/firestore';

// const db = getFirestore(app);

const LoginScreen = props => {
  const [email, setEmail] = useState('new@mailinator.com');
  const [password, setPassword] = useState('12345678');
  const dispatch = () => {} //useDispatch();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    console.log('user: ', user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // const usersCollection = firestore().collection('Users');

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const onSignin2 = async () => {
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

  const signup = () => {
      auth()
          .createUserWithEmailAndPassword(email, password)
          .then((data) => {
              console.log('***User account created & signed in! ===============> userId', data.user.uid);

              // const docRef = await addDoc(collection(db, "users"), {
              //   first: "Ada",
              //   last: "Lovelace",
              //   born: 1815,
              //   allTodos: [
              //     {
              //         Todos: [],
              //         category: 'Business',
              //         color: 'blue'
              //     },
              //   ]
              // });

              firestore()
                  .collection('Users')
                  .doc(data.user.uid)
                  .set({
                      name: 'Ada Lovelace',
                      age: 30,
                      allTodos: [
                          {
                              Todos: [],
                              category: 'Business',
                              color: 'blue'
                          },
                      ]
                  })
                  .then(() => {
                      console.log('User added!');
                  });

              // props.setUserDetails(data.user)
              // props.setName(firstName + '|' + lastName)
              // console.log('setName done', firstName + '|' + lastName)


              data.user.updateProfile({
                  displayName: firstName + '|' + lastName
              })
                  .then(() => {
                      console.log('profile Updated')
                  })
              // contextActionCallBack(email, password, callBack)

          })
          .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                  showToast('That email address is already in use!')
              }

              if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                  showToast('That email address is invalid!')
              }

              console.error('errorrrr: ', error);
          });
  }

  const onSignin = () => {
    if (email === '' || password === '') {
      showToast("Don't leave the fields empty")
    }
    else {
        
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((data) => {
                    console.log('User account signed in!', data);

                  firestore()
                    .collection('Users')
                    .doc(data.user.uid)
                    .set({
                        name: 'Ada Lovelace',
                        age: 30,
                        allTodos: [
                            {
                                Todos: [],
                                category: 'Business',
                                color: 'blue'
                            },
                        ]
                    })
                  .then(() => {
                      console.log('User added!');
                  });


                  //   data.user.updateProfile({
                  //     displayName: 'firstName' + '|' + 'lastName'
                  // })
                  //     .then(() => {
                  //         console.log('profile Updated')
                  //     })

                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        showToast('That email address is already in use!')
                    }

                    else if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        showToast('That email address is invalid!')
                    }

                    else if (error.code === 'auth/wrong-password') {
                        console.log('That password is invalid!');
                        showToast('That password is invalid!')
                    }
                    else {
                        showToast(error.code)
                    }

                    console.error('error: ', error);
                });


    }
  }

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
