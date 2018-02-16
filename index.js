import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Component
const App = () => (
	<View>
		<Header headerText='Albums'/>
		<AlbumList />
	</View>
);

// Render it to the Device!
AppRegistry.registerComponent('AlbumInfoApp', () => App);