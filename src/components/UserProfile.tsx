import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constant/Colors';
import {getUserInfo} from '../utils/StorageHelper';

const UserProfile = (props: any) => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [userGivenName, setUserGivenName] = useState(null);

  getUserInfo().then((userData) => {
    setUserGivenName(userData.user.givenName);
    setUserPhoto(userData.user.photo);
  });

  const today = new Date();
  const currentHours = today.getHours();
  let greetingMessage;

  if (currentHours < 12) greetingMessage = 'Good Morning';
  else if (currentHours >= 12 && currentHours <= 17)
    greetingMessage = 'Good Afternoon';
  else if (currentHours >= 17 && currentHours <= 24)
    greetingMessage = 'Good Evening';

  return (
    <View style={styles.profileContainer}>
      <TouchableWithoutFeedback onPress={props.onProfilePicture}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.userImageProfile} source={{uri: userPhoto}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.grettingText}>
              {' '}
              {greetingMessage}, {userGivenName}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  profileContainer: {
    flex: 0,
    flexDirection: 'row',
    marginVertical: Platform.OS === 'ios' ? 35 : 20,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  imageContainer: {
    padding: 15,
  },
  userImageProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: Colors.cameraText,
    borderWidth: 1,
  },
  textContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  grettingText: {
    color: Colors.cameraText,
    fontFamily: 'Raleway-BoldItalic',
    paddingRight: 90,
    fontSize: 16,
  },
  settingContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
  },
});
export default UserProfile;
