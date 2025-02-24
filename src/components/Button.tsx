import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constant/Colors.ts';

const BeginButton = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onClickButtonHandler}>
      <View style={styles.buttonContainer}>
        <Text style={{...styles.button, ...props.style}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 0,
    width: 350,
    borderColor: Colors.white,
    borderRadius: 25,
    padding: 12,
    backgroundColor: Colors.button,
    alignItems: 'center',
    marginTop: 32,
    
  },
  button: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Medium',
  },
});
export default BeginButton;
