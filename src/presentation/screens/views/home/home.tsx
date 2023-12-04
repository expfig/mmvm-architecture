/**
 * IMPORTS
 */
import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';

// hook-view-modal
import {TextNativeWs} from 'ws-ui-components';
import {MagnifyingGlass} from 'phosphor-react-native';
import {styles} from './styles';

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextNativeWs
          text="Conversas"
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

/**
 * EXPORT
 */
export {HomeView};
