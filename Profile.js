import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Profile extends Component {
    static options(){
        return{
            topBar:{
                title:{
                    text:"Profile"
                }
            }
        }
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>This is Profile Page</Text>
            </View>
        );
    }
}

export default Profile;
