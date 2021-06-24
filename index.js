import {Navigation} from "react-native-navigation";
import Home from "./Home";
import SideMenuScreen from "./SideMenuScreen";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";



Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('SideMenuScreenPage', () => SideMenuScreen);

Navigation.registerComponent('ContactPage', () => Contact);
Navigation.registerComponent('AboutPage', () => About);
Navigation.registerComponent('ProfilePage', () => Profile);



Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            sideMenu:{
                left:{
                    component:{
                        name:"SideMenuScreenPage"
                    }

                },
                center:{
                    stack:{
                        options:{
                            topBar:{
                                leftButtons:{
                                    icon:require('./images/menu.png')
                                }
                            }
                        },
                        children:[
                            {
                                component:{
                                    name:"HomePage"
                                }
                            }
                        ]

                    }

                },
                right:{
                    component:{
                        name:"SideMenuScreenPage"
                    }

                },

            }
        }
    })
})
