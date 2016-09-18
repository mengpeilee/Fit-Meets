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

import Start from './Start'; //=> boolean already

import Main from './Main'; //if aready == T

import SexualChoose from './SexualChoose'; //if aready == F 

import StyleM from './StyleM'; //if do '_pressButtonM' => boolean sexual = ture
import StyleW from './StyleW'; //if do '_pressButtonW' => boolean sexual = false

export  default  class  NavOrdinary  extends  Component {
  render() {
        let defaultName = 'Start'; 
        let defaultComponent = Start;
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
