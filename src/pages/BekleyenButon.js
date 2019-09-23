import React, { Component } from 'react';
import {
	Text,
  View,
  TouchableOpacity
} from 'react-native';



export default class MyButton extends Component {
	render() {
		return (
    
			<View style= {{backgroundColor:'white',flex:1, borderRadius:50}} >
                <TouchableOpacity onPress={this.props.onPress} style= {{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:16}}>  
                        {this.props.text}
                    </Text> 
                 </TouchableOpacity>
			</View>
		);
	}
}