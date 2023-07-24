/* eslint-disable prettier/prettier */
import React from 'react';
import LottieView from 'lottie-react-native';

function Error() {
  return <LottieView source={require('../../assets/loading.json')} autoPlay />;
}

export default Error;
