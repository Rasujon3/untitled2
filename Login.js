import React, {Component} from 'react';
import {View,Text} from "react-native";

class Login extends Component {
    render() {
        return (
            <View style={{flex:1, padding:20, justifyContent:'center'}}>
                <Text style={{fontSize:30}}>Login Screen</Text>
            </View>
        );
    }
}

export default Login;
