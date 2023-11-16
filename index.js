/**
 * @format
 */

import * as Sentry from '@sentry/react-native';



import {AppRegistry} from 'react-native';

import {App} from './App';

import {name as appName} from './app.json';

Sentry.init({
  dsn: 'https://18f83be8c30274a0be49b3d28d0f273e@o4505595435483136.ingest.sentry.io/4505788178235392',
  attachScreenshot: true,

  // Defina tracesSampleRate como 1.0 para capturar 100% das transações para monitoramento de desempenho.
  // Recomendamos ajustar este valor na produção.
  tracesSampleRate: 1.0,
});

AppRegistry.registerComponent(appName, () => Sentry.wrap(App));
