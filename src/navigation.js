import { Navigation } from 'react-native-navigation'
/*
goToAuth — This function sets our root route stack to a 
bottomTabs route configuration. Each tab is a component, 
with a name and some options configured.

goHome — This sets the route stack to a stack navigation, 
passing in a single component to the children array: the Home component.

*/
export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign In',
                                icon: require('./images/signin.png')
                            }
                        }
                    },  
                },      
                {       
                    component: {
                        name: 'SignUp',
                        options: {
                            bottomTab: {
                                text: 'Sign Up',
                                fontSize: 12,
                                icon: require('./images/signup.png')
                            }
                        }
                    },
                },
            ],
        }
      }
}); 

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
});
