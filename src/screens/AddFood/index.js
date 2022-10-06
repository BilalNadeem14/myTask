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
import formdata from '../../../form-data.json';
import ImagePicker from '../../components/ImagePicker'

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
const AddFood = () => {
  const [state, setState] = useState({
    activeSlide: 0,
    email: '',
    name: '',
    dob: '',
    gender: 'Male',
    date: new Date(),
    open: false
  })
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeText = (value, type) => {
    setState({ ...state, [type]: value });
  };

  const login = async id => {
    if (state.name == '') {
      toast('Please enter your name')
      return
    }
    else if (state.email == '') {
      toast('Please enter your email')
      return
    }
    else if (!regex.email.test(state.email)) {
      toast('Please enter a valid email')
      return
    }
    else if (state.dob == '') {
      toast('Please select yout date of birth')
      return
    }
    const data = {
      name: state.name,
      email: state.email,
      dob: state.dob,
      gender: state.gender
    }
    console.log('data: ', data);
    try {
      props.login(data)
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

  renderImage = () => {
    return <View style={styles.imageContainer}>
      <Image
        style={styles.profileImage}
        source={icons.placeholder}
      // resizeMode='contain'
      />
      <TouchableOpacity style={styles.cameraBtn}
        onPress={() => setModalVisible(true)}
      >
        <Image source={icons.whiteCamera} style={styles.cameraImg} />
      </TouchableOpacity>
    </View>
    return <View style={styles.userCircle}
    // key={props.scene.route.key}
    >
      <Image source={props.signUpImage ? { uri: props.signUpImage } : sampleImages.userimg} style={styles.useravatar} />
    </View>
  }

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

  renderRadioItem = (item, index) => (
    <View
      style={{
        flexDirection: 'row',
        // width: 30*vw,
        marginHorizontal: 7 * vw,
        marginVertical: 1 * vh,
        // flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red'
      }}>
      <TouchableOpacity
        onPress={() => onChangeText(item?.label, 'gender')}
        style={{
          borderRadius: (2.25 / 2) * vh,
          height: 2.25 * vh,
          justifyContent: 'center',
          alignItems: 'center',
          width: 2.25 * vh,
          backgroundColor: 'white',
          borderWidth: 0.2 * vh,
          borderColor: theme.colors.primaryColor,
        }}>
        {state.gender == item?.label && (
          <View
            style={{
              height: 1.25 * vh,
              width: 1.25 * vh,
              borderRadius: (1.25 / 2) * vh,
              backgroundColor: theme.colors.primaryColor,
            }}
          />
        )}
      </TouchableOpacity>
      <TextRegular style={{ marginLeft: 1.5 * vw, fontSize: 1.5 * vh }}>{item?.label}</TextRegular>
    </View>
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
      <DatePicker
        mode='date'
        modal
        open={state.open}
        date={state.date}
        onConfirm={(date) => {
          // setOpen(false)
          // setDate(date)
          setState({
            open: false,
            date: date,
            dob: moment(date).format('DD/MM/YYYY'),
          })
          // setState({...state, dateOfVisit: moment(date).format('YYYY-MM-DD'), dateOfVisitChanged: true})
        }}
        onCancel={() => {
          setState({
            open: false,
          })
        }}
      />
      <ImagePicker
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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

export default connect(mapStates, mapProps)(AddFood);
