import React, {Component} from 'react';
import {View, Text} from "react-native";

class Registration extends Component {
    render() {
        return (
            <View style={{flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>Registration Screen</Text>
                <Text style={{fontSize: 18}}>{this.props.subtitle}</Text>
            </View>
        );
    }
}

export default Registration;
