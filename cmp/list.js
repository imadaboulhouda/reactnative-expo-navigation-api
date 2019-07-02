import React from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

import Item from './Item';

export default class List extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data:[],
        };
        
    }
    componentDidMount()
    {
        this.init().then(e=>{
        });
    }
    init = async ()=>
    {
        let x = await fetch("https://randomuser.me/api/?results=10");
        let d = await x.json();
            this.setState({
                data:d.results
            });
            
        
    }
    render(){
        return (<View>
            {
                this.state.data.length == 0 ? <Text>Loading Data...</Text>:<FlatList
                data={ this.state.data}
                renderItem = { ({item})=>{
                    return <Item name={item.name} navigate={ this.props.navigation} item={item} image={item.picture.large} />
                    
                }}
                keyExtractor = {
                    (item, index) => item.email.toString()
                }
            />
            }
            
        </View>)
    }
}