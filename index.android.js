/*'use strict';

var React = require('react-native');
var {AppRegistry} = React;
//var UserInterface = require('./PersonalPageW');
//var UserInterface = require('./AchievementM');
//var UserInterface = require('./SexualChoose');
var UserInterface = require('./SexualChoose');
*/

import Swiper from 'react-native-swiper';

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
} from 'react-native';

//var UserInterface = require('./Main');
//var UserInterface = require('./Once');
import UserInterface from './Ordinary';


AppRegistry.registerComponent('UserInterface', () => UserInterface);