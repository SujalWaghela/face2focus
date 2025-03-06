import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constant/Colors';
// User Components Import
const Camera = (props:any) => {
  const cameraRef = useRef<RNCamera | null>(null);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    RNCamera.Constants.FlashMode.off,
  );
  const [toggleFlashed, setToggleFlashed] = useState(true);
  // Old Method to Toggle Image
  const takePicture = async () => {
    if (cameraRef) {
      const options = {
        quality: 0.1,
        base64: false,
        mirrorImage: true,
        orientation: Platform.OS === 'android' ? 'portraitUpsideDown' : '',
      };
      if (cameraRef?.current) {
        const data = await cameraRef?.current?.takePictureAsync(options as any);
        console.log('User Picture Place Successfully : - ', data);
        props.navigation.navigate('UserPictureSnap', {uri: data.uri});
      }
    }
  };

  const flipsCameraType = () => {
    if (cameraType === RNCamera.Constants.Type.back) {
      setCameraType(RNCamera.Constants.Type.front);
    } else {
      setCameraType(RNCamera.Constants.Type.back);
    }
  };

  const toggleCameraFlash = () => {
    if (cameraFlash === RNCamera.Constants.FlashMode.off) {
      setCameraFlash(RNCamera.Constants.FlashMode.on);
    } else {
      setCameraFlash(RNCamera.Constants.FlashMode.off);
    }
    setToggleFlashed(!toggleFlashed);
  };

  let ternary = toggleFlashed ? (
    <Icon size={30} color={Colors.white} name="flash-off" />
  ) : (
    <Icon size={30} color={Colors.white} name="flash-on" />
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={cameraType}
        flashMode={cameraFlash}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        autoFocusPointOfInterest={{x: 0.5, y: 0.5}}
        ratio="18:9"
        captureAudio={false}
        onDoubleTap={() => flipsCameraType()}
        androidCameraPermissionOptions={{
          title: 'Permission to use Face2Focus camera',
          message: 'Face2Focus need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'Face2Focus need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>

        <View style={styles.managerContainer}>
          {/* Flash Icons UI */}
          <View style={styles.flashContainer}>
            <TouchableOpacity onPress={() => toggleCameraFlash()}>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                {ternary}
              </View>
            </TouchableOpacity>
          </View>

          {/* Camera Picture Taker Icons UI */}
          <View style={styles.cameraContainer}>
            <TouchableOpacity onPress={() => takePicture()}>
              <View style={styles.takeAnImage}></View>
            </TouchableOpacity>
          </View>

          {/* Flip Camera View Icons UI */}
          <View style={styles.flipContainer}>
            <TouchableOpacity onPress={() => flipsCameraType()}>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Icon
                  size={30}
                  color={Colors.white}
                  name="flip-camera-android"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
  },
  managerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 10,
  },
  flashContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  cameraContainer: {
    flex: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  flipContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  takeAnImage: {
    width: 90,
    height: 90,
    borderColor: '#FFFFFF',
    borderWidth: 5,
    borderRadius: 45,
  },
});

export default Camera;
