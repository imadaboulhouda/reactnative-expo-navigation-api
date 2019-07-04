import React from 'react';
import { View,Text,Image } from 'react-native';


export default class Detail extends React.Component
{
     
   

     constructor(props){
        super(props);
        
        this.state = {
            data:'',
            image:'',
        }
        
     }
     componentDidMount()
     {
        this.setState({
            data: this.props.navigation.state.params.items,
            image:this.props.navigation.state.params.image,
        })
        console.log(this.state)
     }
   
     static navigationOptions =({navigation}) => {
         console.log(navigation)
        return { title: navigation.state.params.items,}    
     };
    render()
    {
        return (<View>
            { !this.state.image ? <Text>Loading..</Text>:
            <View>
                <Image style={{ width:'100%',height:400}} source={{ uri:this.state.image }} />
            <Text>Data:{this.state.data}</Text>
            </View> }
            </View>)
    }
}