import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Home extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>This is Home</Text>
      </View>
    );
  }
}

export default Home;
