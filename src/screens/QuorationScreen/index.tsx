import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import generateQuotes from '../../utils/generateQuotations';
import Colors from '../../constant/Colors';
import { getUserInfo } from '../../utils/StorageHelper';

const QuotationScreen = (props: any) => {
  // TextColor of Quotation Screen
  const color = Colors.textWhiteaccent;

  return (
    <TouchableWithoutFeedback onPress={() => {
      getUserInfo().then((data) => {
        if (data) {
          props.navigation.navigate('CameraModule')
        } else {
          props.navigation.navigate('LoginModule')
        }
      })
    }}>
        <View style={styles.quoteScreenContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#1F232E" />
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/top-icons/top-icon.png')} />
          </View>
          <View style={styles.quoteContainer}>
            <Text style={{...styles.quotes, color}}>{generateQuotes()}</Text>
          </View>
          <View style={styles.manualInfoContainer}>
            <Text style={{...styles.manualInfo, color}}>
              Tap anywhere to continue
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  quoteScreenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F232E',
  },
  imageContainer: {
    marginVertical: Platform.OS === 'ios' ? 45 : 5,
  },
  quoteContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginVertical: 175,
  },
  quotes: {
    fontSize: Platform.OS === 'android' ? 16 : 19,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
  },
  manualInfoContainer: {
    paddingVertical: Platform.OS === 'android' ? 105 : 140,
    position: 'relative',
  },
  manualInfo: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 17,
  },
});

export default QuotationScreen;
