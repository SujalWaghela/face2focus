import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotationScreen from './QuorationScreen';
import LoginScreen from './LoginScreen';
import MeditationAudioCollection from './MeditationAudioCollection';
import AudioPlayer from './AudioPlayer';
import AudioPlayerController from './AudioPlayerController';
import VisionCamera from './Camera/VisionCamera';
import UserSnapScreen from './PhotoSnap';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Quotation'>
      <Stack.Screen
        name="Quotation"
        component={QuotationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginModule"
        component={LoginScreen}
        options={{headerShown: false }}
      />
      <Stack.Screen
        name="CameraModule"
        component={VisionCamera}
        options={({navigation}) => ({headerShown: false})}
      />
      <Stack.Screen
        name="UserPictureSnap"
        component={UserSnapScreen}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      {/* <Stack.Screen
        name="UserPickerPictureSnap"
        component={UserPickerPictureSnap}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      /> */}
      <Stack.Screen
        name="MeditationListAudios"
        component={MeditationAudioCollection}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="AudioBegin"
        component={AudioPlayer}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
       <Stack.Screen
        name="AudioPlayerController"
        component={AudioPlayerController}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      /> 
    </Stack.Navigator>
  );
};
export default AppStack;
