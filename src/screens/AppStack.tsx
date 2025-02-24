import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotationScreen from './QuorationScreen';
import LoginScreen from './LoginScreen';



const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QuotationPage"
        component={QuotationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginModule"
        component={LoginScreen}
        options={{headerShown: false }}
      />
      {/* <Stack.Screen
        name="CameraModule"
        component={CameraModulePage}
        options={({navigation}) => ({headerShown: false})}
      />
      <Stack.Screen
        name="UserPictureSnap"
        component={UserPictureSnapPage}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="UserPickerPictureSnap"
        component={UserPickerPictureSnap}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="MeditationListAudios"
        component={MeditationListAudios}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
      <Stack.Screen
        name="AudioBegin"
        component={AudioBeginPage}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />
       <Stack.Screen
        name="AudioPlayerController"
        component={AudioPlayerController}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      /> */}
{/*       
      <Stack.Screen
        name="UserProfilePage"
        component={UserProfilePage}
        options={({navigation}) => ({headerShown: false, animationEnabled:false})}
      />  */}
    </Stack.Navigator>
  );
};
export default AppStack;
