import React, { Component } from 'react';
import {	AppRegistry,	StyleSheet,	Text,
  View,
  StatusBar
} from 'react-native';
//import Login from './src/pages/Login';
//import Signup from './src/pages/Signup';
import Routes from './src/Routes';
export default class IlkUygulama extends Component {
	render() {
		return (
    
			<View style={styles.container}>
          < StatusBar
            backgroundColor="#1c313a"
            barStyle="light-content"
          />
        <Routes/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
AppRegistry.registerComponent('IlkUygulama', () => IlkUygulama);

