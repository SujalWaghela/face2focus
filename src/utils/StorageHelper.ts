import AsyncStorage from '@react-native-async-storage/async-storage';

const storeLoginToken = (token: string) => {
  AsyncStorage.setItem('token', token);
};

const deleteToken = () => {
  AsyncStorage.removeItem('token')
}

const getToken = async () => {
  return await AsyncStorage.getItem('token');
}

const storeUserInfo = async (userData: any) => {
  try {
    const userInfoValue = JSON.stringify(userData)
    await AsyncStorage.setItem('@userdata', userInfoValue);
    console.log('Successful Storage');
  }
  catch (err) {
    console.log('Failed Storage', err);
  }
}

const getUserInfo = async () => {
  try {
    const userInfoValue = await AsyncStorage.getItem('@userdata');
    return userInfoValue != null ? JSON.parse(userInfoValue) : null;
  }
  catch (err) {
    console.log('Failed To Get Data', err)
  }
  // const userString = await AsyncStorage.getItem('user');
  // const userObject = JSON.parse(userString);
  // return userObject;
}

export {
  storeLoginToken,
  deleteToken,
  getToken,
  storeUserInfo,
  getUserInfo
};