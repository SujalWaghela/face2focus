import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions.tsx';

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
      onPress={onPress}
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      >
      <View style={styles.buttonRow}>
        <View style={styles.iconWrapper}>
          <FontAwesome name={"google"} style={styles.icon} size={22} color={color} />
        </View>
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    height: windowHeight / 15,
    paddingHorizontal: windowWidth / 6,
    borderRadius: 40,
    justifyContent: 'center',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 30
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Bold',
    fontWeight: 'bold',
  },
});