import React, { Component } from 'react';
import {	AppRegistry,	StyleSheet,	Text,  View,  StatusBar,  ScrollView,  TextInput,  Button} from 'react-native';

import MyButton from './BekleyenButon';

const items=[];
export default class Logo extends Component {
    constructor(props){
        super(props);
        this.addItem=this.addItem.bind(this);
    }
    
    state={
        toDo:'',
    }

   addItem(){
    // console.warn('App::addItem',this.state.toDo)

        items.push(this.state.toDo)

        this.setState({toDo:''})
   }
    renderItem(item) {
        return(
            <View key={item} style={{height:100 ,backgroundColor:'yellow',
                                     margin:8, borderRadius:16, justifyContent:'center',alignItems: 'center'}}>
        
                 <Text style={{color:'black',fontSize:24}}> {item}</Text>          
            </View>
        );   
    }

    
    
    render()
    {
        return(
            
         <View style={{flex:1}}>
        <Text style={styles.textStyle}>Bekleyen Arıza Ekle</Text>
        
         <View style={{ height:100, flexDirection:'row', padding:8}}>
             <View style={{ flex:4, marginRight:8, justifyContent:'center'}}>

              <TextInput value={this.state.toDo} onChangeText={(v) =>this.setState({toDo:v})}
                         placeholder={'Arıza Girin'}
                          style={{height:36, backgroundColor:'skyblue', borderRadius:12,paddingLeft:10,
                          borderColor:'black',borderWidth:1} }/>
                           
                </View>

                    <View style={{ flex:1,}}>
                        <MyButton onPress={this.addItem} text={'Ekle'}/>
                             
                    </View>
                             
            </View>
            

            <ScrollView>
               {
                   items.map((item)=>this.renderItem(item))
               }
            
            </ScrollView> 
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
        justifyContent:'center',
        
    }
	
});