import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';
export default class Header extends React.Component
{
    render(){
        return (
        <View>
            <StatusBar hidden={true}  />  
            <View style={styles.header}>
            
            <Text style={styles.header_text}>Journal 2019 Native</Text>
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:50,
        backgroundColor:'#e1e1e1',
        lineHeight:50,
        
    },
    header_text:{
        textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            textTransform:'uppercase'
    }
})