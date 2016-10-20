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

import Firebase from "firebase";

import W from './img/sexual/W.png';
import M from'./img/sexual/M.png';

import StyleM from './StyleM';
import StyleW from './StyleW';
import config from './config.js';

var user = config.user;

export  default  class  SexualChoose extends  Component{

  constructor(props){
    super(props);
    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    //var myFirebaseRef = new Firebase('https://ft-friends.firebaseio.com/');
    this.itemsRef = myFirebaseRef.child('user/' + user + '/self'); // child *********

    this.state= {
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.items = [];
  }

  _pressButtonM() {
        this.itemsRef.update({
          sexual: true ,//each name ********* <!--callback name-->,\
          fitness: 1,
          dot: 'http://i.imgur.com/8DKYOcP.png',
        });

        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'StyleM',
                component: StyleM,
            })
        }
    }

  _pressButtonW() {
        this.itemsRef.update({
          sexual: false ,//each name ********* <!--callback name-->
          fitness: 1,
          dot: 'http://i.imgur.com/vdxn5yp.png',
        });

        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'StyleW',
                component: StyleW,
            
            })
        }
    }

  componentDidMount() {
    this.itemsRef.on('child_added', (self) => {
      this.items.push({key: self.key(), text: self.val()}); // key 
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });

    this.itemsRef.on('child_removed', (dataSnapshot) => {
      this.items = this.items.filter((x) => x.key !== dataSnapshot.key());
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });
  }
  
  render() {
    return (
          <View style={styles.container}>

            <View style={styles.seg}>
              
              <View style={styles.blue}>
                <TouchableOpacity onPress={this._pressButtonM.bind(this)}>
                  <Image style={styles.img} source={require('./img/sexual/M.png')}/>
                </ TouchableOpacity>
              </View>
              
              <View style={styles.pink}>
                <TouchableOpacity onPress={this._pressButtonW.bind(this)}>
                  <Image style={styles.img} source={require('./img/sexual/W.png')}/>
                </ TouchableOpacity>
              </View>

            </View>

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
    seg: {
      flex: 1,
      flexDirection: 'column',
     
    },
      blue: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0FFFF',

      },
      pink: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF0F5',
      },
        img: {
          flex: 1,
          resizeMode:'contain',
        },
    
});
