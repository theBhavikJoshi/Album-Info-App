import React from 'react';
import { Text, AppRegistry } from 'react-native';

import Header from './src/components/Header';

// Component
const App = () => (
	<Header headerText='Albums'/>
);

// Render it to the Device!
AppRegistry.registerComponent('AlbumInfoApp', () => App);