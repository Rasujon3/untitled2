import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Contact extends Component {

  static options(){
    return{
      topBar:{
        title:{
          text:"Contact"
        }
      }
    }
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>This is Contact Page</Text>
      </View>
    );
  }
}

export default Contact;
