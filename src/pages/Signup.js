import React, { Component } from 'react';
import {	AppRegistry,	StyleSheet,	Text,  View,  StatusBar,  TouchableOpacity,} from 'react-native';

import Logo from '../components/Logo.js';
import Form from '../components/Form.js';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
    goBack(){
        Actions.pop();
    }

    render()
    {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Kaydol"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Zaten hesabınız var mı? </Text>
                    <TouchableOpacity onPress={this.goBack}>
                            <Text style={styles.signupButton}>  Giriş Yapın</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#455a64',
    },
    signupTextCont:{
        flexGrow: 1,
		justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical:16,
        flexDirection:'row',
    },
    signupText: {
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
    }

    
	
});