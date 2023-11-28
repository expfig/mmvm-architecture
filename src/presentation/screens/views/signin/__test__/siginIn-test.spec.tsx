/**
 * IMPORTS
 */
import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import {SigninView} from '../signin';

describe('Test for signIn screen ', () => {
  it('should be possible to render the user login screen.', () => {
    render(<SigninView />);
  });
});
