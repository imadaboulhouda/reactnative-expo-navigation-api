import React from 'react';
import { View } from 'react-native';
export default class Detail extends React.Component
{
     
   
data = "hello";
     constructor(props){
        super(props);
     }
   
     static navigationOptions =({navigation}) => {
        return { title: navigation.getParams('name'),}    
     };
    render()
    {
        return (<View><Text>Data:{data}</Text></View>)
    }
}