import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';

const DetailScreen = ({navigation}) => {
  return (
    <View>
      <Header
        title="Detail Screen"
        subTitle="Subtitle Text"
        onBack={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
