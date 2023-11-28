// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'core-js';
// // async storage
//  jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// react-navigation v6x
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      const {useEffect} = require('react');
      const actualModule = jest.requireActual('@react-navigation/native');
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
        ...actualModule,
        useFocusEffect: useEffect,
      };
    },
  };
});

// fazendo mock do banco de dados ofiline realmDB
// jest.mock('realm', () => {
//   return require('./mocks/realm.mock').default;
// });