/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App'
import {name as appName} from './app.json';
export * from "./CustomButton";
export * from "./Card";
export * from "./CardSection";
export * from "./Header";
export * from "./Input";

AppRegistry.registerComponent(appName, () => App);
