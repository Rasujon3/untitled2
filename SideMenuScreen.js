import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Navigation} from "react-native-navigation";

class SideMenuScreen extends Component {

    AboutGo = () => {
        Navigation.push("CenterScreen", {
            component: {
                name: "AboutPage",
                options: {
                    sideMenu: {
                        left: {
                            visible: false
                        }
                    },
                    topBar:{
                        title:{
                            text:"About"
                        }
                    }
                }
                }
            });
    }


    ContactGo = () => {
        Navigation.push("CenterScreen", {
            component: {
                name: "ContactPage",
                options: {
                    sideMenu: {
                        left: {
                            visible: false
                        }
                    },
                    topBar: {
                        title: {
                            text: 'Contact'
                        }
                    }
                }
            }
        });
    }
    ProfileGo = () => {
        Navigation.push("CenterScreen", {
            component: {
                name: "ProfilePage",
                options: {
                    sideMenu: {
                        left: {
                            visible: false
                        }
                    },
                    topBar:{
                        title:{
                            text:"Profile"
                        }
                    }
                }
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'white', marginRight: 80}}>
                    <View style={{flex: 1, backgroundColor: 'white', marginRight: 20}}>

                        <Text onPress={this.AboutGo} style={{margin: 10}}>About</Text>
                        <Text onPress={this.ContactGo} style={{margin: 10}}>Contact</Text>
                        <Text onPress={this.ProfileGo} style={{margin: 10}}>Profile</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SideMenuScreen;
