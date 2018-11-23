import { createMaterialTopTabNavigator, createStackNavigator, 
  createDrawerNavigator, createTabNavigator,
  createBottomTabNavigator, createAppContainer
} from 'react-navigation';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import E from './components/E';
import F from './components/F';
import G from './components/G';
import Second from './components/Second';
import DrawerPanel from './components/DrawerPanel';
// 切換為 createMaterialTopTabNavigator 的話 tab 可以滑動
const Stack = createStackNavigator({
  A: {
    screen: createBottomTabNavigator({
      'A Screen': A,
      'B Screen': B,
      'C Screen': C,
      'D Screen': D,
      'E Screen': E,
      'F Screen': F,
      'G Screen': G
    },
    {
      swipeEnabled: false,
      lazyLoad: false,
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
          tabStyle: {
            width: 125,
            height: 50
        },
        scrollEnabled: true 
      }  
    })
  },
  Second: {
    screen: Second,
    // path: 'chat/:user'
    path: 'chat'
  }
},
  {
    initialRouteName: 'A',
    headerMode: 'screen'
  }
);

const Stack2 = createStackNavigator({
  A: { 
    screen: A,
    path: 'chatA'
  },
  B: {
    screen: B,
    path: 'chatB',
  },
});

// const MainApp = () => <Stack uriPrefix={prefix} />;

const Router = createDrawerNavigator({
  FirstScreen: {
    screen: Stack
    // screen: () => (<Stack uriPrefix={prefix} />)
  }
},
{
  contentComponent: DrawerPanel,
  drawerWidth: 200
});

// about Deep linking
const prefix = Platform.OS == 'android' ? 'mychat://mychat/' : 'mychat://';

// Situation 1
// terminal command is: xcrun simctl openurl booted mychat://chatB
// It is working if only use createStackNavigator
// params can be Stack or Stack2
// const SimpleApp = createAppContainer(Stack2);
// const MainApp = () => <SimpleApp uriPrefix={prefix} />;
// export default MainApp;

// Situation 2
// terminal command is: xcrun simctl openurl booted mychat://chat
// It is not wroking when combine createDrawerNavigator
const SimpleApp = createAppContainer(Router);
const MainApp = () => <SimpleApp uriPrefix={prefix} />;
export default MainApp;
