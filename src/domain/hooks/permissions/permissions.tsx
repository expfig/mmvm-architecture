/**
 * IMPORTS
 */
import {useContext} from 'react';
import {PermissionContext} from '../../context/permissions/permissions';

const usePermissions = () => {
  const context = useContext(PermissionContext);

  return context;
};

/**
 * EXPORTS
 */
export {usePermissions};
