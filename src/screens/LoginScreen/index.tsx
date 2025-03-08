import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import Colors from '../../constant/Colors';
import SocialButton from '../../components/SocialButton';
import Button from '../../components/Button';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '../../utils/keys';
import { storeLoginToken, storeUserInfo } from '../../utils/StorageHelper';

const backImageFront = require('../../assets/images/mountain.jpg');
const topIconFront = require('../../assets/images/login-icon/logo.png');

const LoginScreen = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const color = Colors.textWhiteaccent;
  let idToken = null;

  useEffect(() => {
    configureGoogleSign();
  }, []);

  function configureGoogleSign() {
    GoogleSignin.configure({
      iosClientId: WEB_CLIENT_ID,
      offlineAccess: false,
    });
  }

  function googleSignInCognitoHandler() {
    GoogleSignin.hasPlayServices()
      .then(() => {
        GoogleSignin.signIn().then((userInfo: any) => {
          console.log('userInfo', userInfo);
          idToken = userInfo.data.idToken; // Get the Users ID token
          console.log(userInfo);
          setError(null);
          setIsLoggedIn(true);
          storeLoginToken(idToken);
          storeUserInfo(userInfo.data);
          props.navigation.replace('CameraModule');
        }).catch(error => {
          console.log('userInfo error', error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            {
              /*-------When User cancel Sign In Progress-----*/
              /*-------User Cancelled the login flow -----*/
            }
            Alert.alert('PROCESS HAS BEEN CANCELLED', error.code);
            console.log('SIGN_IN_CANCELLED', error.code);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            {
              /*-------When in Progress Ready-------*/
              /*----- operation (e.g. sign in) is in progress already -----*/
            }
            Alert.alert('PROCESS HAS IN PROGRESS', error.code);
            console.log('IN_PROGRESS', error.code);
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            {
              /*--------When Play Services not Available------*/
              /*--------play services not available or outdated ------*/
            }
            Alert.alert('PLAY SERVICES ARE NOT AVAILABLE', error.code);
            console.log('PLAY_SERVICES_NOT_AVAILABLE', error.code);
          } else {
            {
              /*--------Some Other Errors-------*/
              /*-------- Some other error happened ------*/
            }
            console.log(error);
            Alert.alert('Login action has been cancelled');
            console.log('other error', error.code);
            setError(error);
          }
        });
      })
      .catch((error) => {
        setError(error);
        Alert.alert('Play Services', 'This device don\'t have play services');
      });
  }

  async function signingOut() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('SOMETHING ELSE WENT WRONG', error?.toString());
    }
    console.log('Sign OUT');
  }

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={backImageFront}
        style={styles.image}
        blurRadius={Platform.OS === 'android' ? 5 : 5}>
        <View style={styles.topimage}>
          <Image source={topIconFront} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.welcomeText, color}}>
            Welcome to Face2Focus
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{...styles.infoText, color}}>
            A Facial Emotion to Meditation & Mindfulness
          </Text>
        </View>

        <View style={styles.status}>
          {isLoggedIn === false ? (
            <Text style={styles.loggedinMessage}>You must sign in!</Text>
          ) : (
            <Button
              onClickButtonHandler={() => signingOut()}
              title="Sign out"
              color="#332211"
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback>
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="apple"
              color="#de4d41"
              backgroundColor="rgba(255,255,255,0.5)"
              onPress={googleSignInCognitoHandler}
            />
          </TouchableWithoutFeedback>
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
  topimage: {
    marginVertical: 45,
  },
  textContainer: {
    marginTop: 0,
    
  },
  welcomeText: {
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Black',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginVertical: 25,
    marginHorizontal: 15,
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Semibold',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 0,
  },
  status: {
    marginVertical: 10,
  },
  loggedinMessage: {
    fontSize: 20,
    color: 'tomato',
  },
  userInfoContainer: {
    marginVertical: 10,
  },
  profileImageContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: Colors.silver,
    borderWidth: 2,
  },
  displayTitle: {
    fontSize: 22,
    color: Colors.silver,
    fontFamily: 'Raleway-Bold',
    marginHorizontal: 20,
  },
  inputFieldContainer: {
    margin: 20,
    marginTop: 25,
  },
  forgotButton: {
    marginTop: 20,
  },
  navButtonText: {
    fontSize: 14,
    color: Colors.silver,
    fontFamily: 'SFUIDisplay-Medium',
  },
});

export default LoginScreen;