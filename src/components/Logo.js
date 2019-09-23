import React, { Component } from 'react';
import {	AppRegistry,	StyleSheet,	Text,  View,  StatusBar,  Image} from 'react-native';

export default class Logo extends Component {
    render()
    {
        return(
            <View style={styles.container}>
            <Text style={styles.textStyle}>  </Text>
            <Text style={styles.textStyle}>  </Text>
            <Text style={styles.textStyle}>  </Text>
            <Text style={styles.textStyle}>  </Text>
            <Text style={styles.textStyle}>  </Text>
            <Text style={styles.textStyle}>  </Text>
            <Image style={{width:75, height:75}}
                 source={require('../resim/giris_anahtari.png')}
             />
                <Text style={styles.textStyle}> -GİRİŞ/KAYIT PANELİ- </Text>               
            </View>            
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
        backgroundColor: '#455a64',
        width:350,
        height:100,
        justifyContent:'flex-end',
    },
    textStyle:{
        fontSize:27,
        alignItems: 'center',
        color:'black',
        
    }
	
});