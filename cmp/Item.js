import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

export default class Item extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    showPage = ()=>{
        console.log(this.props.item);
        this.props.navigate('Detail',{ items:this.props.name.first});
    }
    render(){
        return (
            <View style={ style.bg_white}>
              <TouchableOpacity  onPress={this.showPage} >
<ImageBackground source = {{
                    uri:this.props.image }} style = {  style.container } >
                          
                    <Text style={style.text_bottom}>{this.props.name.last+" "+this.props.name.first}</Text>
                
                </ImageBackground>
                </TouchableOpacity>
 
            </View>
           
              )
    }
}

const style = StyleSheet.create({
  
    container:{
        width:'100%',
        height:400,
        backgroundColor:'#0000',
        marginBottom:20,
        position:'relative',
        opacity:0.8,
    },
    text_bottom:{
        flex:1,
        position:'absolute',
        bottom:10,
        color:'black',
        fontWeight:'bold',
        fontSize:18,
        paddingLeft:10
    }
}); 