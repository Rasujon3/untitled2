import {Navigation} from "react-native-navigation";
import Home from "./Home";
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
