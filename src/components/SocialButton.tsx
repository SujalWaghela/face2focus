import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimentions.tsx';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ISocialButton {
  buttonTitle:string;
  btnType: string;
  color:string;
  backgroundColor:string
  onPress:() => void;
}

const SocialButton = ({buttonTitle, btnType, color, backgroundColor,onPress}:ISocialButton) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
    activeOpacity={0.6}
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      >
      {/* <View style={styles.iconWrapper}>
        <FontAwesome name={"house"} style={styles.icon} size={22} color={color} />
      </View> */}
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    width: '90%',
    height: windowHeight / 15,
    padding: 0,
    flexDirection: 'row',
    borderRadius: 40,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Bold',
    fontWeight: 'bold',
  },
});