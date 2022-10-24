/**
 * @format
 */
import {register} from '@videosdk.live/react-native-sdk';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LocalNotification from './src/NotificationHandeler/LocalNotification';
import React from 'react'
LocalNotification()
// Register the service
register();

AppRegistry.registerComponent(appName, () => App);
