import React, { 
  Component,
  PropTypes,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ListView,
  Navigator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import SexualChoose from './SexualChoose';
import Fitbit from './Fitbit';
import Main from './Main';
//import { OAuth, getDistance, getSteps, getHeartrate } from './OauthFit';
//import config from './config.js';


var start = require('./img/start.png');
var fitbitLogo = require('./img/ft.png');
var already = false;

export  default  class  Start extends  Component{

  /*componentDidMount() {
    OAuth(config.client_id, getDistance);
    OAuth(config.client_id, getSteps);
    OAuth(config.client_id, getHeartrate);
  }*/


  _pressButton() {

    if(already)
    {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Main',
                component: Main,
            })
        }
    }

    else
    {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SexualChoose',
                component: SexualChoose,
            })
        }
    }
     
        
  }

  _pressButtonFitbit() {

    const { navigator } = this.props;
      if(navigator) {
          navigator.push({
            name: 'Fitbit',
            component: Fitbit,
          })
      }    

  }
  
  render() {
    return (
          <View style={styles.container}>
          <LinearGradient colors={['#FFC0CB', '#FFE0E5', '#FFF0F5', '#F0FFF0','#F0FFFF', '#E0FFFF', '#9DD6EB']} style={styles.linearGradient}>
            <View style={styles.seg}>
              <View style={styles.blue}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                  <View>
                    <Image source={start}/>  
                  </View>
                </ TouchableOpacity>
              </View>
                <TouchableOpacity onPress={this._pressButtonFitbit.bind(this)}>
                  <View style={styles.img}>
                    <Image style={styles.img_ft} source={fitbitLogo}/> 
                  </View>
                </TouchableOpacity>
            </View>
          </LinearGradient>
          </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#7FF9D4',
  },
  linearGradient: {
    flex: 1,
   
  },
  seg: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
    alignItems: 'center',
     
  },
  img: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  img_ft: {
    resizeMode:'contain',
    height: 30,
  },
});