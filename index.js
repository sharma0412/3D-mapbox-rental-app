/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/screen/main';
import MapBox from './src/screen/mapbox/mapBox';
LogBox.ignoreAllLogs()
AppRegistry.registerComponent(appName, () => App);
