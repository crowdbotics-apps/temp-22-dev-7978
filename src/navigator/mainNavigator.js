import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29200Navigator from '../features/BlankScreen29200/navigator';
import EmailAuth39199Navigator from '../features/EmailAuth39199/navigator';
import EmailAuth39195Navigator from '../features/EmailAuth39195/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29200: { screen: BlankScreen29200Navigator },
EmailAuth39199: { screen: EmailAuth39199Navigator },
EmailAuth39195: { screen: EmailAuth39195Navigator },

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
