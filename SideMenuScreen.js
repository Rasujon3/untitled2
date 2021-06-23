import React, {Component} from 'react';
import {View,Text} from 'react-native';

class SideMenuScreen extends Component {
    render() {
        return (
            <View>
                <View style={{backgroundColor:'green',marginRight:100}}>
                    <Text>This is my Side Menu Portion</Text>
                </View>
            </View>
        );
    }
}

export default SideMenuScreen;
