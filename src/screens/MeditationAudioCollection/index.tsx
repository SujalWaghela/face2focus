import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Platform,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import audiosContent from '../../data/contents.json';
import AudioPlayer from '../../components/AudioPlayerCard';
import getEmotionImages from '../../utils/ImageGenerator';
import getEmotionGif from '../../utils/GifGenerator';
import Colors from '../../constant/Colors';

const MeditationAudioCollection = (props: any) => {
  // const [emotion, setEmotion] = useState('sad');
  const emotion: string = props.route.params.emotion?.toLowerCase() || 'happy';
//   console.log('****', emotion.toLowerCase())
  const audioContent = audiosContent[emotion];
  console.log('Audio content of happy', audioContent);
  // Background Image of the Meditation Screen
  const mainresultViewBgImg = require('../../assets/images/rever.jpg');
  // Dynamic Animation of Displaying Cartoon Animation
  const moodBaseAnimate = getEmotionGif(audioContent.emotionId);
  // Two Different Button Redering Logic
  let backButton =
    Platform.OS === 'android' ? (
      <Icon name="arrow-back-outline" size={27} color={Colors.white} />
    ) : (
      <Icon name="chevron-back-outline" size={33} color={Colors.white} />
    );
  // Static Text
  const contentHeader = (
    <Text style={styles.headerContent}>Suggest Session on your Mood</Text>
  );

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
        <ImageBackground
          source={mainresultViewBgImg}
          style={styles.image}
          imageStyle={{opacity: 0.6}}>
          <View style={styles.backContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.goBack()}>
              {backButton}
            </TouchableOpacity>
            {
              /* back Button */
              // Customizable navigation will come here
            }
          </View>
          <View style={styles.animationMaincontainer}>
            {/* Animation Video and Title Description */}
            <View style={styles.gifImageContainer}>
              <Image source={moodBaseAnimate} style={styles.moodImage} />
            </View>
            <View
              style={{
                ...styles.subTitleTextView,
                marginTop: 180,
              }}>
              <Text
                style={[styles.subTextTitle, {fontSize: 18, marginTop: 25}]}>
                {audioContent.title}
              </Text>
            </View>
            <View style={styles.subTitleTextView}>
              <Text style={styles.subTextTitle}>
                {audioContent.description}
              </Text>
            </View>
          </View>
          {contentHeader}
          <FlatList
            data={audioContent.media}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index, separators}) => (
              <AudioPlayer
                image={getEmotionImages(item.id)}
                sessionHeader={item.title}
                mode={item.mode}
                duration={item.duration}
                onclick={() =>
                  props.navigation.navigate('AudioBegin', {data: item})
                }
              />
            )}
          />
          <View style={{marginBottom: 80}}></View>
        </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
  },
  backContainer: {
    marginTop: Platform.OS === 'android' ? 28 : 40,
    paddingRight: Platform.OS === 'android' ? 350 : 370,
  },
  animationMaincontainer: {
    backgroundColor: Colors.bgMainPrimary,
    height: 350,
    width: Platform.OS === 'ios' ? 690 : 790,
    opacity: 0.8,
    marginTop: 5,
    borderBottomLeftRadius: Platform.OS === 'ios' ? 1150 : 1100,
    borderBottomRightRadius: Platform.OS === 'ios' ? 1150 : 1100,
  },
  gifImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  moodImage: {
    height: 250,
    width: 250,
    marginTop: 10,
  },
  subTitleTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTextTitle: {
    color: Colors.white,
    fontFamily: 'Raleway-Bold',
  },
  headerContent: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'OpenSans-Italic',
    marginTop: 15,
    marginRight: 13,
    marginLeft: Platform.OS === 'android' ? 10 : 0,
    marginBottom: 20,
  },
});
export default MeditationAudioCollection;
