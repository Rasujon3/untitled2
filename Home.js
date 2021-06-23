import React, {Component} from 'react';
import {View, Text,Button} from 'react-native';
import {Navigation} from "react-native-navigation";

class Home extends Component {

    goLogin=()=>{
        Navigation.push(this.props.componentId, {
            component: {
                name: 'LoginPage',
                options:{
                    topBar:{
                        title:{
                            text:'Login'
                        }
                    }
                }
            }
        })
    }

    goRegistration=()=>{
        Navigation.push(this.props.componentId, {
            component: {
                name: 'RegistrationPage',
                options:{
                    topBar:{
                        title:{
                            text:'Registration'
                        }
                    }
                }
            }
        })
    }


  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={{flex:1, padding:20, justifyContent:'center'}}>

        <View style={{margin:10}}>
          <Button onPress={this.goLogin} title="Login"/>
        </View>

        <View style={{margin:10}}>
          <Button onPress={this.goRegistration} title="Registration"/>
        </View>
      </View>
    );
  }
}

export default Home;
