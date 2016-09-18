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
  View
} from 'react-native';

import Start from './Start';
import SexualChoose from './SexualChoose';
import Main from './Main';

import NavOrdinary from './NavOrdinary';

export  default  class  Ordinary  extends  Component {
  render() {
    return (
        <NavOrdinary></NavOrdinary>
    );
  }
}

const styles = StyleSheet.create({

  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }

});

module.exports = Ordinary;
