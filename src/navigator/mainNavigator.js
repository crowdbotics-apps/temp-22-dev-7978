import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth39206Navigator from '../features/EmailAuth39206/navigator';
import BlankScreen29203Navigator from '../features/BlankScreen29203/navigator';
import EmailAuth39202Navigator from '../features/EmailAuth39202/navigator';
import BlankScreen29200Navigator from '../features/BlankScreen29200/navigator';
import EmailAuth39199Navigator from '../features/EmailAuth39199/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth39206: { screen: EmailAuth39206Navigator },
BlankScreen29203: { screen: BlankScreen29203Navigator },
EmailAuth39202: { screen: EmailAuth39202Navigator },
BlankScreen29200: { screen: BlankScreen29200Navigator },
EmailAuth39199: { screen: EmailAuth39199Navigator },

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
