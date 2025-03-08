import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert,
  Text,
} from 'react-native';
import {Camera, CameraPosition, useCameraDevices} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfile from '../../../components/UserProfile';

const VisionCamera = (props: any) => {
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const [cameraIndex, setCameraIndex] = useState<number>(2);
  console.log('devices', devices)
  const device = devices[cameraIndex];

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission() as any;
      console.log('camera permissoin', cameraPermission)
      if (cameraPermission !== 'granted') {
        Alert.alert('Permission required', 'Camera permission is required to use this feature');
      }
    })();
  }, []);

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto({});
        props.navigation.navigate('UserPictureSnap', {uri: photo.path});
      }
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  };

  const toggleCameraType = () => {
    setCameraIndex(current => (current === 1 ? 2 : 1));
  };

  const onLogout = () => {
    AsyncStorage.removeItem('@userdata').then(() => {
      props.navigation.navigate('LoginModule');
    })
  };

  if (device == null) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading camera device...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <UserProfile
          onProfilePicture={() => {}}
      />

      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={onLogout} style={styles.controlButton}>
          <View style={styles.iconContainer}>
              <Icon name='logout' size={30} color={Colors.white} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
          <View style={styles.captureButtonInner} />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleCameraType} style={styles.controlButton}>
          <View style={styles.iconContainer}>
            <Icon name="flip-camera-android" size={30} color={Colors.white} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  controlButton: {
    padding: 15,
  },
  iconContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    alignSelf: 'center',
  },
  captureButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: Colors.white,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VisionCamera;

