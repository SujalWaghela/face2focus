/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// React Hooks
import React, {useEffect} from 'react';
import Screens from './src/screens';

// Splash Screen
// import SplashScreen from 'react-native-splash-screen';

const App = () => {
  
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return <Screens />;
};

export default App;
