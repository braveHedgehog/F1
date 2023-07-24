/* eslint-disable prettier/prettier */
import React from 'react';
import Lottie from 'lottie-react-native';

function Loading() {
  return <Lottie source={require('./animation.json')} autoPlay loop />;
}

export default Loading;
