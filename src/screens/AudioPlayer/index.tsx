import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIoni from 'react-native-vector-icons/Ionicons';
import IconFav from 'react-native-vector-icons/MaterialIcons';
import getEmotionImages from '../../utils/ImageGenerator';
import Colors from '../../constant/Colors';
import Button from '../../components/Button';

const AudioPlayer = (props: any) => {
  const {data} = props.route.params;
  console.log('Passing Data from the Meditation Screen ---------' , JSON.stringify(data));
  const backButton = (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.navigation.goBack()}>
      <IconIoni name="chevron-back-outline" size={30} color={Colors.white} />
    </TouchableOpacity>
  );
  const reminder = <Icon name="alarm" size={35} color={Colors.white} />;
  const share = <IconIoni name="share-social" size={35} color={Colors.white} />;
  const heartLike = <IconFav name="favorite" size={32} color={Colors.white} />;
  return (
    <View style={styles.screen}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      {/* This Should be Fetch from the server -- Perticular image will display at 
            background
        */}
      <ImageBackground
        style={styles.image}
        source={getEmotionImages(data.id)}
        imageStyle={{opacity: 0.4}}>
        <View style={styles.backContainer}>{backButton}</View>
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeaderText}>
            {data.title}
          </Text>
          <View style={styles.textLabelView}>
            <Text style={styles.textLabel}>
              {data.mode}
            </Text>
          </View>
          <View style={styles.symbolContainer}>
            <View>
              <View style={styles.symbolModify}>{reminder}</View>
              <View style={styles.symboViewLabel}>
                <Text style={styles.symbolTextLabel}>Reminder</Text>
              </View>
            </View>
            <View>
              <View style={styles.symbolModify}>{share}</View>
              <View style={styles.symboViewLabel}>
                <Text style={styles.symbolTextLabel}>Share</Text>
              </View>
            </View>
            <View>
              <View style={styles.symbolModify}>{heartLike}</View>
              <View style={styles.symboViewLabel}>
                <Text style={styles.symbolTextLabel}>Favorite</Text>
              </View>
            </View>
          </View>
          <Button
            title="Begin Sesssion"
            onClickButtonHandler={() =>
              props.navigation.navigate('AudioPlayerController', { data: data })
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {flex: 1},
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
  },
  backContainer: {
    flexDirection: 'row',
    marginRight: Platform.OS === 'ios' ? 350 : 340,
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 25,
    padding: 2,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 70,
  },
  mainHeaderText: {
    color: Colors.white,
    fontFamily: 'OpenSans-Bold',
    fontSize: 21,
    marginHorizontal:10
  },
  textLabelView: {
    marginTop: 20,
    backgroundColor: 'rgba(77,82,90,0.6)',
    borderRadius: 25,
    width: 80,
    alignItems: 'center',
    padding: 5,
  },
  textLabel: {
    fontSize: 13,
    color: Colors.silver,
    fontFamily: 'Raleway-Bold',
  },
  symbolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbolModify: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symboViewLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbolTextLabel: {
    color: Colors.silver,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
});
export default AudioPlayer;