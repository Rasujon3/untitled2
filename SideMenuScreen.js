import React, {Component} from 'react';
import {View,Text} from 'react-native';

class SideMenuScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'white',marginRight:80}}>
                    <View style={{flex:1,backgroundColor:'white',marginRight:20}}>
                        <Text  style={{margin:10}}>Home</Text>
                        <Text style={{margin:10}}>About</Text>
                        <Text style={{margin:10}}>Contact</Text>
                        <Text style={{margin:10}}>Profile</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SideMenuScreen;
