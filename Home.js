import React, {Component} from 'react';
import {Text, View} from "react-native";
import {Navigation} from "react-native-navigation";

class Home extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this)
    }

    navigationButtonPressed({componentId}){
        Navigation.mergeOptions(this.props.componentId,{
            sideMenu:{
                left:{
                    visible: true
                }
            }
        })
    }

    render() {
        return (
            <View>
                <Text>This is my home page</Text>
            </View>
        );
    }
}

export default Home;
