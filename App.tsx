/**
 * IMPORTS
 */
import React from 'react';
import {View, Text} from 'react-native';
import {AppRoutes} from './src/main/routes/app-routes';
import {PermissionProvider} from './src/domain/context/permissions/permissions';

const App = () => {
  return (
    <PermissionProvider>
      <AppRoutes />
    </PermissionProvider>
  );
};

/**
 * EXPORT
 */
export {App};
