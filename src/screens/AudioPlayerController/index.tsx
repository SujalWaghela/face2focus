import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';

import Video from 'react-native-video';

import IconIoni from 'react-native-vector-icons/Ionicons';
import Controller from '../../components/Controller';
import SeekBar from '../../components/SeekBar';
import Colors from '../../constant/Colors';
import getEmotionImages from '../../utils/ImageGenerator';

const Player = (props: any) => {
  const [paused, setPaused] = useState(true);
  const [totalLength, setTotalLength] = useState(1);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    return () => {
      setCurrentPosition(0);
      setPaused(false);
      setIsChanging(false);
    }
  }, [])
  const setDuration = (data: { duration: number; }) => {
    setTotalLength(Math.floor(data.duration))
  }

  const setTime = (data: { currentTime: number; }) => {
    setCurrentPosition(Math.floor(data.currentTime));
  }

  const seek = (time: number) => {
    time = Math.round(time);
    videoRef.current?.seek(time)
    setCurrentPosition(time);
    setPaused(false);
  }

  const handleEnd = () => {
    videoRef.current?.seek(0);
    setCurrentPosition(0);
    setPaused(true);
  };

  const onReplay = () => {
    if (currentPosition < 10) {
      // setIsChanging(true)
      setCurrentPosition(0);
      setPaused(true);
      videoRef.current?.seek(0)
      // setIsChanging(false);
    } else {
      videoRef.current?.seek(currentPosition - 10);
      setCurrentPosition(currentPosition - 10)
    }
  }

  const onForward = () => {
    let newTime = currentPosition + 10;
    if (newTime > totalLength) {
      newTime = totalLength;
    }
    videoRef.current?.seek(newTime);
    setCurrentPosition(newTime);
  }

  const {data} = props.route.params;
  console.log('data', props)
  const backButton = (
    <IconIoni name="chevron-back-outline" size={27} color={Colors.white} />
  );

  const demoAudio = data.mediaUrl;
  const video = (
    <Video
      source={{uri: demoAudio}} // Can be a URL or a local file.
      ref={videoRef}
      paused={paused} // Pauses playback entirely.
      resizeMode="cover" // Fill the whole screen at aspect ratio.
      repeat={false} // Repeat forever.
      // onLoadStart={this.loadStart} // Callback when video starts to load
      onLoad={setDuration} // Callback when video loads
      onProgress={setTime} // Callback every ~250ms with currentTime
      onEnd={handleEnd} // Callback when playback finishes
      onError={(error) => console.error('Video error:', error)} // Callback when video cannot be loaded
      style={{height: 0, width: 0}}
    />
  );

  return (
    <View style={styles.screen}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      {/* This Should be Fetch from the server -- Perticular image will display at 
          background
      */}
      <ImageBackground
        style={styles.image}
        source={getEmotionImages(data.id)}
        imageStyle={{opacity: 0.4}}>
        <TouchableOpacity
          style={styles.backContainer}
          activeOpacity={0.8}
          onPress={() =>
            props.navigation.goBack()
          }>
          {backButton}
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <Text style={styles.mainHeaderText}>{data.title}</Text>
          <View style={styles.textLabelView}>
            <Text style={styles.textLabel}>{data.duration}</Text>
          </View>
          <Controller
            onPressPlay={() => setPaused(false)}
            onPressPause={() => setPaused(true)}
            onReplay={onReplay}
            onForward={onForward}
            paused={paused}
          />

          <View style={styles.MusicProgresserBar}>
            {
              <SeekBar
                onSeek={seek}
                trackLength={totalLength}
                currentPosition={currentPosition}
              />
            }
            {video}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Player;

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
    borderRadius: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 23,
    padding:10
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
  MusicProgresserBar: {
    width: 425,
  },
  audioPlayer: {
    height: 0,
    width: 0
  }
});