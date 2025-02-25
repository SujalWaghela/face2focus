import React, { useState } from 'react';

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

const backImageFront = require('../../assets/images/mountain.jpg');
const topIconFront = require('../../assets/images/login-icon/logo.png');

const LoginScreen = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const color = Colors.textWhiteaccent;

  const loginMode =
    Platform.OS === 'android' ? (
      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="google"
        color="#4867aa"
        backgroundColor="rgba(255,255,255,0.5)"
        onPress={() => Alert.alert('Facebook Login Not Integrated Please Login with Google')}       />
    ) : (
      <SocialButton
          buttonTitle="Sign In with Apple"
          btnType="apple"
          color="#ffffff"
          backgroundColor="rgba(0,0,0,0.5)"
          onPress={() => Alert.alert('Apple Login Not Integrated Please Login with Google')}      />
    );

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
              onClickButtonHandler={() => console.log('sign out')}
              title="Sign out"
              color="#332211"
            />
          )}
        </View>

        {/* <View style={styles.userInfoContainer}>
          {isLoggedIn === true ? (
            <>
              <Text style={styles.displayTitle}>
                Welcome to Face2Focus {userInfo.user.name}
              </Text>
              <View style={styles.profileImageContainer}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: userInfo && userInfo.user && userInfo.user.photo,
                  }}
                />
              </View>
            </>
          ) : null}
        </View> */}

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback>
            {/* Google Login Comes under here - Functionality of BackEnd */}
            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="apple"
              color="#de4d41"
              backgroundColor="rgba(255,255,255,0.5)"
              onPress={() => {
                console.log('sign in');
              } }            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>{loginMode}</TouchableWithoutFeedback>
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
});

export default LoginScreen;