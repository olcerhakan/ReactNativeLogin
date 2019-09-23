import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
  View,
  StatusBar,
} from 'react-native';




export default class Logo extends Component {
    render()
    {
        return(
            
            <View style={styles.container}>
        
                <Text style={styles.textStyle}> 24-48 Saat Arızalar </Text>               
            </View>
                       
        )
    }

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent:'center',
    },
    textStyle:{
        fontSize:27,
        alignItems: 'center',
        color:'black',
        
    }
	
});