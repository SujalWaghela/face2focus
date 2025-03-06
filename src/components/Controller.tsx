import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEnty from 'react-native-vector-icons/Entypo';
import IconIoni from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';
const Controller = (props: any) => {
  const replayTen = <Icon name="replay-10" size={35} color={Colors.silver} />;
  const forwardTen = <Icon name="forward-10" size={35} color={Colors.silver} />;
  
  return (
    <View style={styles.symbolContainer}>
      <TouchableOpacity onPress={props.onReplay} style={styles.sideController}>
        <View>{replayTen}</View>
      </TouchableOpacity>
      {/* The Music Bar will be Progress around the Border*/}
      <View style={styles.musicControllerContainer}>
       {
         props.paused ? 
         <TouchableOpacity onPress={props.onPressPlay} activeOpacity={1}>
               <IconEnty name="controller-play" size={40} color={Colors.silver} />
         </TouchableOpacity>:
         <TouchableOpacity onPress={props.onPressPause} activeOpacity={1}>
               <IconEnty name="controller-paus" size={40} color={Colors.silver} />
         </TouchableOpacity>
       } 
      </View>
      <TouchableOpacity onPress={props.onForward} style={styles.sideController}>
        <View>
          {forwardTen}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  symbolContainer: {
    flexDirection: 'row',
    marginVertical: 40,
  },
  sideController: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginTop: 12,
    marginHorizontal: 20,
  },
  musicControllerContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 70,
    width: 70,
    justifyContent: 'center',
    borderRadius: 45,
    alignItems: 'center',
  },
});
export default Controller;