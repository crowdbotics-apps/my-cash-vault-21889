import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth2158262Navigator from '../features/EmailAuth2158262/navigator';
import Settings3158261Navigator from '../features/Settings3158261/navigator';
import SignIn24158260Navigator from '../features/SignIn24158260/navigator';
import SignIn25158259Navigator from '../features/SignIn25158259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth2158262: { screen: EmailAuth2158262Navigator },
Settings3158261: { screen: Settings3158261Navigator },
SignIn24158260: { screen: SignIn24158260Navigator },
SignIn25158259: { screen: SignIn25158259Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
