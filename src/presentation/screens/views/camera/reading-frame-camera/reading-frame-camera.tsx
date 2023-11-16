/**
 * IMPORTS
 */
import React from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button } from "react-native"

// hook-view-modal
import { useLoginViewModel } from "../../../view-model/signin/use-login-view-modal";

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
    paddingHorizontal: 20
  }
})
/**
 * EXPORT
 */
export { ReadingFrameCameraView }
