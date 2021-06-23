import {Navigation} from "react-native-navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Policy from "./Policy";
import Login from "./Login";
import Registration from "./Registration";
import SideMenuScreen from "./SideMenuScreen";



Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('SideMenuScreenPage', () => SideMenuScreen);



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
                                },
                                rightButtons:{
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
