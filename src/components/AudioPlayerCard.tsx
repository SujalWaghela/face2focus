import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../constant/Colors.ts';

const PlayList = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onclick}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image source={props.image} style={styles.image} />
          <View>
            <Text style={styles.headerTitle}>{props.sessionHeader}</Text>
            <View style={styles.lableContainer}>
              <View style={styles.textLabelView}>
                <Text style={styles.textLabel}>{props.mode}</Text>
              </View>
              <Text style={styles.minTextLabel}>{props.duration}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    width: 380,
    backgroundColor: 'rgba(47,51,62,0.9)',
    marginTop: 10,
    borderRadius: 25,
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 390 / 4,
    height: 120,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  headerTitle: {
    color: Colors.silver,
    fontFamily: 'Raleway-Bold',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 10,
  },
  lableContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textLabelView: {
    marginTop: 45,
    marginLeft: 10,
    backgroundColor: 'rgb(77,82,90)',
    borderRadius: 25,
    width: 66,
    alignItems: 'center',
    padding: 5,
  },
  textLabel: {
    fontSize: 13,
    color: Colors.silver,
    fontFamily: 'Raleway-Bold',
  },
  minTextLabel: {
    color: Colors.silver,
    fontFamily: 'Raleway-Bold',
    marginBottom: 5,
    marginLeft: 160,
    fontSize: 14,
  },
});

export default PlayList;
