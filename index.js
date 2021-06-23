import {Navigation} from "react-native-navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

Navigation.registerComponent('HomePage',()=>Home);
Navigation.registerComponent('AboutPage',()=>About);
Navigation.registerComponent('ContactPage',()=>Contact);

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            component:{
                name:'ContactPage'
            }
        }
    });
})
