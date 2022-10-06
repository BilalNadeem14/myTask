import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import images, { icons, sampleImages } from '../../assets/images';
import { connect } from 'react-redux';
import MainInput from '../../components/MainInput';
import Alert from '../../popups/AlertPopup';
import Button from '../../components/buttons/Button';
import { actions } from '../../redux/actions';
import { msg, regex, toast } from '../../utils';
import formdata from './form-data.json';
import ImagePicker from './../../components/ImagePicker'

// or ES6+ destructured imports

// import {getUniqueId, getManufacturer} from 'react-native-device-info';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import TextBold from '../../components/TextWrappers/CircularStdBold';
import TextRegular from '../../components/TextWrappers/CircularStdBook';

// class Login extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
// activeSlide: 0,
// email: '',
// name: '',
// dob: '',
// gender: 'Male',
// date: new Date(),
// open: false
//   };
// }
const LoginUser = (props) => {
  const [state, setState] = useState({
    activeSlide: 0,
    email: '',
    password: '',
  })
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeText = (value, type) => {
    setState({ ...state, [type]: value });
  };

  const login = async id => {
    if (state.email == '') {
      toast('Please enter your email')
      return
    }
    else if (!regex.email.test(state.email)) {
      toast('Please enter a valid email')
      return
    }
    else if (state.password == '') {
      toast('Please enter your password')
      return
    }
    else if (state.password.length < 8) {
      toast('Passwords must not be less than 8 characters')
      return
    }
    const data = {
      email: state.email,
      password: state.password
    }
    console.log('data: ', data);
    try {
     let a = await props.login(data)
     console.log("REs: ",a);
      toast('User logged in successfully')
    }
    catch (e) {
      toast('login unsuccessful')
    }
  };

  identifyInputsToRender = (item, index) => {
    switch (item?.type) {
      case 'image':
        return renderImage();
      case 'text':
        return renderFormItem(item, index);
      case 'date':
        return renderDateFormItem(item, index);
      case 'radio':
        return (
          <View>
            <TextBold style={{ fontSize: 1.7 * vh, marginLeft: 2 * vw }}>GENDER</TextBold>
            <View
              style={{
                flexDirection: 'row',
                // marginTop: 1*vh,  
                // width: 50 * vw,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {React.Children.toArray(item?.options.map(renderRadioItem))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };


  renderFormItem = (item, index) => (
    <MainInput
      label={item.label}
      placeholder={item.placeholder}
      style={styles.input}
      fieldStyle={styles.inputFieldStyle}
      value={state[item?.key]}
      type={item?.key}
      onChangeText={onChangeText}
      keyboardType="email-address"
    />
  );

  renderDateFormItem = (item, index) => (
    <TouchableOpacity
      onPress={() => setState({
        open: true
      })}
    >
      <MainInput
        editable={false}
        label={item.label}
        placeholder={item.placeholder}
        style={styles.input}
        fieldStyle={styles.inputFieldStyle}
        value={state.dob}
        type={item?.key}
        onChangeText={onChangeText}
        keyboardType="email-address"
      />
    </TouchableOpacity>
  );



  const renderFields = () =>
    React.Children.toArray(formdata.map(identifyInputsToRender));

  return (
    <View style={styles.mainContainer}>
      <Alert
        ref={e => (confirmPopup = e)}
        icon={icons.confirmCheck}
        titleText={'Confirmation'}
        description={'Message Has been sent successfully!'}
        onCross={() => { }}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}>
        <ScrollView style={{ width: 90 * vw }}>
          {renderFields()}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: 90 * vw,
          }}>
          <Button
            title="Submit"
            style={styles.btn}
            onPress={() => {
              login();
              // props.navigation.navigate("HomeTabNavigator")
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const mapStates = state => {
  // console.log('state login', state)
  return state;
};
const mapProps = dispatch => {
  return {
    login: data => dispatch(actions.login(data)),
  };
};

export default connect(mapStates, mapProps)(LoginUser);
