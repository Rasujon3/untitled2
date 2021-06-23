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

const bottomTabs = {
    children: [
        {
            component: {
                name: 'HomePage',
                options: {bottomTab: {text: 'Home', icon: require('./images/home.png')}}
            }
        },
        {
            component: {
                name: 'AboutPage',
                options: {bottomTab: {text: 'About', icon: require('./images/about.png')}}
            }
        },
        {
            component: {
                name: 'ContactPage',
                options: {bottomTab: {text: "Contact", icon: require('./images/contact.png')}}
            }
        }
    ]
}

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs
        }
    }).then(r => bottomTabs);
})
