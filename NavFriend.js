/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React, { 
  Component,
  PropTypes,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


import Friend from './Friend';
import SetUp from './SetUp';
import FriendChat from './FriendChat';

export  default  class  NavFriend  extends  Component {
  render() {
        let defaultName = 'Friend'; 
        let defaultComponent = Friend;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
}

module.exports = NavFriend;