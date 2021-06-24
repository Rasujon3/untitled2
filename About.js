import React, {Component} from 'react';
import {View, Text} from 'react-native';

class About extends Component {

  static options(){
    return{
      topBar:{
        title:{
          text:"About"
        }
      }
    }
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>This is About Page</Text>
      </View>
    );
  }
}

export default About;
