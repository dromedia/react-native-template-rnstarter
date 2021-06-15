import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../components';
import {SIZES, COLORS, FONTS, DUMMY_DATA} from '../../config/theme';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textContent}>{DUMMY_DATA._LOREM}</Text>
        </View>

        <Gap height={20} />
        <Button
          text="Go To Detail Screen"
          onPress={() => navigation.navigate('DetailScreen')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    padding: SIZES.padding,
  },
  content: {
    paddingHorizontal: 30,
  },
  textContent: {
    ...FONTS.body3,
    color: COLORS.gray,
    textAlign: 'justify',
  },
});
