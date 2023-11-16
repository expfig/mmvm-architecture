/**
 * IMPORTS
 */
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native"

// hook-view-modal
import { useLoginViewModel } from "../../view-model/signin/use-login-view-modal";
import { usePermissions } from "../../../../domain/hooks/permissions/permissions";

const CreditCard = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>CreditCard</Text>
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
export { CreditCard }
