import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Slider from '@react-native-community/slider';

function pad(n: string | number | any[], width: number, z = 0) {
  const numberAssignToString = z.toString();
  n = n + '';
  return n.length >= width
    ? n
    : new Array(width - n.length + 1).join(numberAssignToString) + n;
}

const minutesAndSeconds = (position: number) => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];

const SeekBar = (props: any) => {
  const elapsed = minutesAndSeconds(props.currentPosition);
  const remaining = minutesAndSeconds(
    props.trackLength - props.currentPosition,
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>{elapsed[0] + ':' + elapsed[1]}</Text>
        <View style={{flex: 1}} />
        <Text style={[styles.text, {width: 40}]}>
          {props.trackLength > 1 && '-' + remaining[0] + ':' + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(props.trackLength, 1, props.currentPosition + 1)}
        minimumValue={0}
        onSlidingStart={props.onSlidingStart}
        onSlidingComplete={props.onSeek}
        value={props.currentPosition}
        style={styles.slider}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
        thumbTintColor={Platform.OS === 'android' ? '#FFFFFF' : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  slider: {
    marginTop: -12,
    height: 40, // Controls touch area height (doesn't affect track thickness)
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent', // Use thumbTintColor instead for Android
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SeekBar;