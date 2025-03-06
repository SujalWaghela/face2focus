import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { RekognitionClient, DetectFacesCommand } from "@aws-sdk/client-rekognition";
import { decode as atob } from 'base-64'; 


import CloseOutline from 'react-native-vector-icons/Ionicons';
import ImgToBase64 from 'react-native-image-base64';
import ImageResizer from 'react-native-image-resizer';
import { AWS_ACCESS_KEY, AWS_SECRET_KEY } from '@env';

import Button from '../../components/Button';
const client = new RekognitionClient({
  region: "us-east-1", 
  credentials: {
    accessKeyId: AWS_ACCESS_KEY, 
    secretAccessKey: AWS_SECRET_KEY
  }
});

const UserSnapScreen = (props: any) => {
  console.log(props);
  const [fetching, setFetching] = useState(false);

  const generateBase64 = () => {
    setFetching(true);
    ImageResizer.createResizedImage(
      props.route.params.uri,
      500,
      800,
      'JPEG',
      50,
      0,
      undefined,
    )
      .then((response) => {
        console.log('***********', response);
        setFetching(false);
        
        ImgToBase64.getBase64String(response.uri)
          .then((base64String: any) => {
            const names = response.uri.split('/');
            const name = names[names.length - 1];
            // start
            try {
              const imageBytes = base64ToUint8Array(base64String);
              
              const params = {
                Image: {
                  Bytes: imageBytes, // Directly sending image bytes
                },
                Attributes: ["ALL"], // Request all facial attributes
              };
          
              const command = new DetectFacesCommand(params);
              client.send(command).then((response) => {
                console.log("Face details:", response.FaceDetails);
                const faces = response.FaceDetails;
                if (faces && faces.length >= 0 && faces[0].Emotions && faces[0].Emotions?.length > 0) {
                  const type = faces[0].Emotions[0].Type;
                  if (type == 'HAPPY' || type == 'SAD' || type == 'CALM') {
                    props.navigation.navigate('MeditationListAudios', {
                      emotion: type,
                    });
                  } else {
                    Alert.alert(
                      'Face can not Recognised',
                      'Make sure your face is visible and only [Happy Calm Sad] Emotion are Acceptable',
                      [
                        {
                          text: 'Got it',
                          onPress: () => {
                            console.log('Got it Pressed');
                            props.navigation.navigate('CameraModule');
                          },
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ],
                    );
                  }
                }
              }).catch(e => console.log('error', e));
            } catch (error) {
              console.error("Error detecting faces:", error);
            }
            // stop
            console.log('base64', name);
          })
          .catch((err) => {
            console.log('base64 error', err)
            setFetching(false);
      });
        // response.uri is the URI of the new image that can now be displayed, uploaded...
        // response.path is the path of the new image
        // response.name is the name of the new image with the extension
        // response.size is the size of the new image
      })
      .catch((err) => {
        setFetching(false);
        // Oops, something went wrong. Check that the filename is correct and
        // inspect err to get more details.
      });
  };

  function base64ToUint8Array(base64: string) {
    // Remove header if present (e.g., "data:image/jpeg;base64,")
    const cleanedBase64 = base64.replace(/^data:image\/\w+;base64,/, "");
    const binaryString = atob(cleanedBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  return (
    <View style={styles.screen}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <ImageBackground
        source={{uri: props.route.params.uri}}
        style={styles.image}>
        <TouchableOpacity
          style={styles.closeContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('CameraModule')}>
          <CloseOutline name="close-outline" size={38} color="white" />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          {fetching ? (
            <View style={{}}>
              <ActivityIndicator size={'large'} color={'yellow'} />
            </View>
          ) : (
            <Button
              title="Find Meditation"
              style={styles.buttonTextContainer}
              onClickButtonHandler={() =>
                // props.navigation.navigate('MeditationListAudios')
                generateBase64()
              }
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  closeContainer: {
    marginRight: Platform.OS === 'android' ? 340 : 360,
    marginTop: Platform.OS === 'android' ? 30 : 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Platform.OS === 'android' ? 30 : 40,
  },
  buttonTextContainer: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: 20,
  },
});

export default UserSnapScreen;
