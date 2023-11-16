/**
 * IMPORTS
 */
import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';

// hook-view-modal
import {useLoginViewModel} from '../../view-model/signin/use-login-view-modal';
import {usePermissions} from '../../../../domain/hooks/permissions/permissions';
import {TextNativeWs} from 'ws-ui-components';
import {MagnifyingGlass} from 'phosphor-react-native';

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextNativeWs
          text="Pagina Inicial"
          size={32}
          lineHeight={38}
          color={'#FFF'}
          fontWeight="600"
        />
        <MagnifyingGlass color="#6c757d" size={24} />
      </View>

      <View style={styles.wrapperImageAndText}>
        <View style={styles.wrapperImage}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMbcHmK5FLvz7SZTa2ScuF7ElWq_MrbBc_E62W-5DLDxayWc1bG2x8zVOAqRktDz5sE4&usqp=CAU',
            }}
          />
        </View>
        <TextNativeWs text="Maria" color={'#FFF'} fontWeight="300" size={14} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(26, 20, 31)',
  },
  header: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperImageAndText: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperImage: {
    width: 54,
    height: 54,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#7e1284',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
/**
 * EXPORT
 */
export {HomeView};
