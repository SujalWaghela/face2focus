/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useLayoutEffect } from 'react';
import Screens from './src/screens';

import SplashScreen from 'react-native-splash-screen';

 // WebBrowser.maybeCompleteAuthSession();

const App = () => {
  
   useLayoutEffect(() => {
     SplashScreen.hide();
  }, []);
    
    return <Screens />;

};

export default App;
