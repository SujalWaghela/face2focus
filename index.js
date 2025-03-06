/**
 * @format
 */
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto'; // Ensures that global URL, URLSearchParams, etc., are available
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { Amplify } from 'aws-amplify';
// Amplify.configure({
//     Auth: {
//         region: 'us-east-1',
//         userPoolId: 'us-east-1_RglEruguh',
//         userPoolWebClientId: '43b3180l44jui3ovesevnp1e1i',
//         identityPoolId: 'us-east-1:d919dbe8-5137-4e6b-bc7e-720bb8fa6022',
//         oauth: {
//           domain: 'https://us-east-1rgleruguh.auth.us-east-1.amazoncognito.com',
//           scope: ['openid', 'profile', 'email'],
//           redirectSignIn: 'myapp://auth/',
//           redirectSignOut: 'myapp://auth/',
//           responseType: 'code'
//         }
//       }
// })
AppRegistry.registerComponent(appName, () => App);
