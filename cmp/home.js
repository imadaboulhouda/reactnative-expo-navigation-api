import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Header from './header';
import List from './list';


export default class Home extends React.Component {
     static navigationOptions = {
         title: 'React Native application', 
     };
    
     render(){
          return ( 
    <View >

        < List navigation = {
            this.props.navigation.navigate }
        />
        </View>
    );
     }
  
}
