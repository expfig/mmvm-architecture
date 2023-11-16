/***
 * IMPORTS
 */
import React, {createContext, useCallback, useState, useEffect} from 'react';
import {PermissionsAndroid, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

// commons
import {PERMISSION_ANDROID_TEXTS} from '../../../common/constants/constants';

// types
import {IPermissionProps, IPermissionProvidersProps} from './interface';

// create one content
const PermissionContext = createContext<IPermissionProps>(
  {} as IPermissionProps,
);

const PermissionProvider = ({children}: IPermissionProvidersProps) => {
  const [authorized, setAuthorized] = useState<IPermissionProps>({
    permission: 'dined',
  });

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: PERMISSION_ANDROID_TEXTS.title,
        message: PERMISSION_ANDROID_TEXTS.message,
        buttonNeutral: PERMISSION_ANDROID_TEXTS.buttonNeutral,
        buttonNegative: PERMISSION_ANDROID_TEXTS.buttonNegative,
        buttonPositive: PERMISSION_ANDROID_TEXTS.buttonPositive,
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setAuthorized({permission: 'authorized'});
    } else {
      setAuthorized({permission: 'dined'});
      BackHandler.exitApp();
    }
  };

  useEffect(() => {
    let cleanEffetc = true;
    (async () => {
      if (cleanEffetc) {
        await requestCameraPermission();
      }
    })();
    return () => {
      cleanEffetc = false;
    };
  }, [authorized?.permission]);
  return (
    <PermissionContext.Provider
      value={{
        permission: authorized?.permission ?? 'dined',
      }}>
      {children}
    </PermissionContext.Provider>
  );
};

/**
 * EXPORTS
 */
export {PermissionProvider, PermissionContext};
