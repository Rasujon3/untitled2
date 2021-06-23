import {Navigation} from "react-native-navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Policy from "./Policy";

Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('AboutPage', () => About);
Navigation.registerComponent('ContactPage', () => Contact);
Navigation.registerComponent('ServicePage', () => Service);
Navigation.registerComponent('PolicyPage', () => Policy);

const stack={
    children:[
        {
            component:{
                name:'PolicyPage'
            }
        },
        {
            component:{
                name:'ServicePage'
            }
        },
        {
            component:{
                name:'ContactPage'
            }
        },
        {
            component:{
                name:'AboutPage'
            }
        },
        {
            component:{
                name:'HomePage'
            }
        }
    ],
    option:{}
}

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack
        }
    });
})
