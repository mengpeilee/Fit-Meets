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
import Main from './Main';

var start = require('./img/start.png');
var already = false;

export  default  class  Start extends  Component{

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
      resizeMode:'contain',
  },
    
});
