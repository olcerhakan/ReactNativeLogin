import React, { Component } from 'react';
import {	AppRegistry,	StyleSheet,	Text,  View,  StatusBar,  TouchableOpacity,} from 'react-native';

import Logo from '../components/Logo.js';
import Form from '../components/Form.js';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
    goBack(){
        Actions.pop();
    }

    bekleyen(){
        Actions.bekleyen()
    }
    tamamlanan(){
        Actions.tamamlanan()
    }
    sifiryirmidort(){
        Actions.sifiryirmidort()
    }
    yirmidortkirksekiz(){
        Actions.yirmidortkirksekiz()
    }

    kirksekizyetmisiki(){
        Actions.kirksekizyetmisiki()
    }
    yetmisikiustu(){
        Actions.yetmisikiustu()
    }

    render()    { return(  <View style={styles.container}>
                 <TouchableOpacity style= {styles.buttonBody} onPress={this.bekleyen}>
		            <Text style={styles.buttonText}>Bekleyen Arızalar</Text>
		         </TouchableOpacity>

                 <TouchableOpacity style= {styles.buttonBody1} onPress={this.tamamlanan}>
		                <Text style={styles.buttonText}>Bekleyen Arızalar</Text>
		        </TouchableOpacity>

                    <TouchableOpacity style= {styles.buttonBody2} onPress={this.sifiryirmidort}>
		                    <Text style={styles.buttonText}>0-24 Saat 
                             SLA</Text>
		            </TouchableOpacity>

                    <TouchableOpacity style= {styles.buttonBody3}  onPress={this.yirmidortkirksekiz}>
		                    <Text style={styles.buttonText}>24-48 Saat 
                             SLA</Text>
                             </TouchableOpacity>
                             
                   <TouchableOpacity style= {styles.buttonBody4}  onPress={this.kirksekizyetmisiki}>
		                    <Text style={styles.buttonText}>48-72 Saat 
                             SLA</Text>
		            </TouchableOpacity>
                    
                    <TouchableOpacity style= {styles.buttonBody5}  onPress={this.yetmisikiustu}>
		                    <Text style={styles.buttonText}>72 saat ve üstü
                             SLA</Text>
		            </TouchableOpacity>

                    <TouchableOpacity onPress={this.goBack}>
                            <Text style={styles.signupButton}> ÇIKIŞ YAP</Text>
                    </TouchableOpacity>
                </View> 
    )}}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9fff80',
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
        color:'black',
        fontSize:16,
        fontWeight:'500',
    },
    
	buttonBody: {
		
		backgroundColor: '#736AFF',
		height: 60,
		justifyContent: 'center',
	
        marginTop: 30,
        
		
	},
	buttonText: {
		color: 'black',
        fontSize:30,   
	},
    buttonBody1: {
		
		backgroundColor: '#00ffbf',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
        marginTop: 30,
        
		
    },
    buttonBody2: {
		
		backgroundColor: '#ff8000',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
        marginTop: 30,
        
		
    },
    buttonBody3: {
		
		backgroundColor: '#ff4000',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
        marginTop: 30,
        
		
    },
    buttonBody4: {
		
		backgroundColor: '#ff0000',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
        marginTop: 30,
        
		
    },
    buttonBody5: {
		
		backgroundColor: '#990033',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
        marginTop: 30,
        
		
    }
    
});