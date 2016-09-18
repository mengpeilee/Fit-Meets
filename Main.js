/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var ScrollableTabView = require('react-native-scrollable-tab-view');

'use strict';

import React, { 
  Component,
  PropTypes,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

// var NavPersonalPageM = require('./NavPersonalPageM');
// var NavPersonalPageW = require('./NavPersonalPageW');
var NavMap = require('./NavMapW');
var NavFriend = require('./NavFriend');
var NavPersonalPage = require('./NavPersonalPageW');

// var sexual = false;

// if(sexual)
//   {
//     NavPersonalPage = require('./NavPersonalPageM'); 
//   }
//   else
//   {
//     NavPersonalPage = require('./NavPersonalPageW');
//   }

export  default  class  Main  extends  Component {

  constructor(props) {
        super(props);
        this.state = {
            sexual: null,
            avatar: null
        }
  }

  componentDidMount() {
        this.setState({
            sexual: this.props.sexual,  
            avatar: this.props.avatar   
        });
        
        if(this.props.sexual)
        {
          NavPersonalPage = require('./NavPersonalPageM'); 
          NavMap = require('./NavMapM')
        }
    }

  render() {
    return (
      <ScrollableTabView 
        tabBarPosition='overlayBottom' 
        initialPage={1}
      >
        <View style={styles.slide0} tabLabel='Friend'>
          <NavFriend></NavFriend>
        </View>   
        <View style={styles.slide1} tabLabel='◕‿◕'>
          <NavPersonalPage></NavPersonalPage>
        </View>
        <View style={styles.slide2} tabLabel='Map'>
          <NavMap></NavMap>
        </View>
        
      </ScrollableTabView>
     
    );
  }
}

const styles = StyleSheet.create({
  slide0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide0: {
    flex: 1,
    
      },
  slide1: {
    flex: 1,
    
      },
  slide2: {
    flex: 1,
    
  },
  slide3: {
    flex: 1,
    
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
