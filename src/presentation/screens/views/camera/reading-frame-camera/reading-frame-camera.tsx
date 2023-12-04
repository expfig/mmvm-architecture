/**
 * IMPORTS
 */
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const ReadingFrameCameraView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LENDO FRAMES</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
/**
 * EXPORT
 */
export {ReadingFrameCameraView};
