import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEnty from 'react-native-vector-icons/Entypo';
import IconIoni from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors.ts';
const Controller = (props: any) => {
  const [toggleController, setToggleController] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);
  const replayTen = <Icon name="replay-10" size={35} color={Colors.silver} />;
  {
    props.paused ? (
      <TouchableOpacity onPress={props.onPressPause}>
        <View style={styles.musicControllerContainer}>
          <IconEnty name="controller-paus" size={40} color={Colors.silver} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={props.onPressPlay}>
        <View style={styles.musicControllerContainer}>
          <IconEnty name="controller-play" size={40} color={Colors.silver} />
        </View>
      </TouchableOpacity>
    );
  }
  {
    props.isLiked ? (
      <TouchableOpacity>
        <View style={styles.sideController}>
          <IconIoni name="md-heart-outline" size={35} color={Colors.silver} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity>
        <View style={styles.sideController}>
        <IconEnty name="controller-play" size={40} color={Colors.silver} />
        </View>
      </TouchableOpacity>
    );
  }
  const musicController = toggleController ? (
    <IconEnty name="controller-play" size={40} color={Colors.silver} />
  ) : (
    <IconEnty name="controller-paus" size={40} color={Colors.silver} />
  );
  const heartLike = toggleHeart ? (
    <IconIoni name="md-heart-outline" size={35} color={Colors.silver} />
  ) : (
    <IconIoni name="md-heart-sharp" size={35} color="#fb3958" />
  );
  const toggleControllerHandler = () => {
    setToggleController(!toggleController);
  };
  const toggleHeartLikeHandler = () => {
    setToggleHeart(!toggleHeart);
  };
  return (
    <View style={styles.symbolContainer}>
      <View style={styles.sideController}>
        <TouchableOpacity onPress={props.onBackMedia}>{replayTen}</TouchableOpacity>
      </View>
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
      <View style={styles.sideController}>
        <TouchableOpacity onPress={toggleHeartLikeHandler} activeOpacity={1}>
          {heartLike}
        </TouchableOpacity>
      </View>
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