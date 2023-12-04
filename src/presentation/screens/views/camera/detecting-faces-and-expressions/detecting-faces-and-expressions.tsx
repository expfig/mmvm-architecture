/**
 * IMPORTS
 */
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

/**
 * Detectar expressões facial do usuário
 */
const DetectingFacesAndExpressionsView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Detectando Faces e Expressões</Text>
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
export {DetectingFacesAndExpressionsView};
