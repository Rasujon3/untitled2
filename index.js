import {Navigation} from "react-native-navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Policy from "./Policy";
import Login from "./Login";
import Registration from "./Registration";

Navigation.registerComponent('HomePage', () => Home);

Navigation.registerComponent('LoginPage', () => Login);
Navigation.registerComponent('RegistrationPage', () => Registration);

const stack={
    children:[
        {
            component:{
                name:'HomePage',
                options:{
                    topBar:{
                        title:{
                            text:'Home'
                        }
                    }
                }
            }
        }
    ],

}

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack
        }
    }).then(r => stack);
})
