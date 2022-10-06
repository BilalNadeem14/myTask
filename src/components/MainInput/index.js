import React from 'react';
import { Text, View, TextInput } from 'react-native';
import TextMedium from '../TextWrappers/CircularStdMedium';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import IconButton from '../IconButton';
import { icons } from '../../assets/images';
import {vh} from '../../units';
import TextRegular from '../TextWrappers/CircularStdBook';
import theme from '../../utils/theme';
import TextBold from '../TextWrappers/CircularStdBold';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  renderEye = () => {
    if (this.props.secureTextEntry === true) {
      return (
        <IconButton
          hitSlop={{
            top: 5,
            bottom: 5,
          }}
          onPress={this.toggle}
          iconStyle={styles.rightIcon}
          icon={this.state.show === false ? icons.eyeClose : icons.eyeOpen}
        />
      );
    }
  };
  renderLabel = () => {
    if (this.props.label) {
      return (
        <View style={[styles.labelContainer, this.props.labelContainer]}>
          <TextBold style={[styles.label, this.props.labelStyles]}>
            {this.props.label}{' '}
            {this.props.required ? (
              <TextBold style={[styles.label, { color: '#CE1127' }]}>*</TextBold>
            ) : null}
          </TextBold>
          {this.props.hint ? (
            <TextRegular
              style={[
                styles.label,
                { color: '#666666', fontSize: vh * 1.6, marginBottom: vh * 1 },
                this.props.labelStyle,
              ]}>
              {this.props.hint}{' '}
            </TextRegular>
          ) : null}
        </View>
      );
    }
  };
  render() {
    var secure = false;
    if (this.props.secureTextEntry === true && this.state.show === false) {
      secure = true;
    } else {
      secure = false;
    }
    return (
      <View>
        {this.renderLabel()}
        <View style={[styles.container, this.props.style, this.props?.bigBox && { height: 15 * vh }]}>
          {this.props.leftIcon && (
            <IconButton
              iconStyle={[styles.leftIcon, this.props.leftIconStyle]}
              icon={this.props.leftIcon}
            />
          )}
          <TextInput
            placeholderTextColor={theme.colors.placeholderGray}
            {...this.props}
            multiline={true} // ios fix for centering it at the top-left corner 
            numberOfLines={10}
            secureTextEntry={secure}
            selectionColor={theme.colors.primaryColor}
            style={[styles.field, this.props.fieldStyle, this.props.bigBox && {
              flex: 1,
              textAlignVertical: "top",
              top: 2 * vh
            }]}
            value={this.props.value}
            onChangeText={(value) => {
              console.warn('type: ', this.props.type);
              this.props.onChangeText(value, this.props.type);
            }}
          // onChangeText={this.props.onChangeText}
          />
          {this.renderEye()}
          {this.props.rightIcon2 && (
            <IconButton
              iconStyle={[styles.rightIcon, this.props.rightIconStyle]}
              icon={this.props.rightIcon2}
            />
          )}
          {this.props.rightIcon && (
            <IconButton
              iconStyle={[styles.rightIcon, this.props.rightIconStyle]}
              icon={this.props.rightIcon}
              onPress={this.props.rightIconPress}
            />
          )}
        </View>
      </View>
    );
  }
}
export default MainInput;
