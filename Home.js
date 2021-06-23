import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Home extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>{this.props.pageTitle}</Text>
        <Text style={{fontSize: 20}}>{this.props.pageSubTitle}</Text>
      </View>
    );
  }
}

export default Home;
