import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import  Header from './cmp/header';
import List from './cmp/list';
import Home from './cmp/home';
import Detail from './cmp/detail';

const navigator = createStackNavigator({
    Home:{ screen:Home},
    Detail:{ screen:Detail},
})
const App = createAppContainer(navigator);

export default  App;

