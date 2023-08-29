import {Button, Image, View} from 'react-native';
import React from 'react';

export default function Gallery({navigation}: any) {
  return (
    <View>
      <Image source={require('../../public/11.png')} />
      <Button
        title={'Back to Camera'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}
