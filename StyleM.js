import React, { 
  Component,
  PropTypes,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ListView, 
} from 'react-native';

import Firebase from "firebase";

import Main from './Main';
import config from './config.js';

var user = config.user;

export  default  class  StyleM  extends  Component {

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

  _pressButtonBcak() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
   }

  _pressButton1() {
        this.itemsRef.update({
          style: 1,//each name ********* <!--callback name-->,\
          avatar: 'http://i.imgur.com/TTIMJXj.png'
        });
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Main',
                component: Main,

                params: {
                    sexual: true,
                    avatar: 1
                }
            })
        }
  }

  _pressButton2() {
        this.itemsRef.update({
          style: 2, //each name ********* <!--callback name-->,\
          avatar: 'http://i.imgur.com/Q5o6JUB.png'
        });
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Main',
                component: Main,

                params: {
                    sexual: true,
                    avatar: 2
                }
            })
        }
  }

  _pressButton3() {
        this.itemsRef.update({
          style: 3, //each name ********* <!--callback name-->,\
          avatar: 'http://i.imgur.com/jyoCfSj.png'
        });
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Main',
                component: Main,

                params: {
                    sexual: true,
                    avatar: 3
                }
            })
        }
  }

  _pressButton4() {
        this.itemsRef.update({
          style: 4, //each name ********* <!--callback name-->,\
          avatar: 'http://i.imgur.com/Eho3WE1.png'
        });
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Main',
                component: Main,

                params: {
                    sexual: true,
                    avatar: 4
                }
            })
        }
  }

  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({key: dataSnapshot.key(), text: dataSnapshot.val()}); // key 
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
          
            <View style={styles.title}>         
              <View style={styles.title_left}>
                <Text style={styles.left_text}>
                  Choose one you like :)
                </Text>
              </View>
              <View style={styles.title_right}>
                <TouchableOpacity onPress={this._pressButtonBcak.bind(this)}>
                  <Text style={styles.right_text}>
                  ↺ 
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
  
            <View style={styles.top}>
              <View style={styles.frame1}>
                <TouchableOpacity onPress={this._pressButton1.bind(this)}>
                  <View style={styles.img_1}>
                    <Image 
                      style={styles.img} 
                      source={require('./img/avatar/ActivePerm.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.frame2}>
                <TouchableOpacity onPress={this._pressButton2.bind(this)}>
                  <View style={styles.img_1}>
                    <Image 
                      style={styles.img} 
                      source={require('./img/avatar/SpikyMesh.png')}
                    />  
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.bottom}>
              <View style={styles.frame2}>
                <TouchableOpacity onPress={this._pressButton3.bind(this)}>
                  <View style={styles.img_1}>
                    <Image 
                      style={styles.img} 
                      source={require('./img/avatar/Eccentric.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.frame1}>
                <TouchableOpacity onPress={this._pressButton4.bind(this)}>
                  <View style={styles.img_1}>
                    <Image 
                      style={styles.img} 
                      source={require('./img/avatar/Lau.png')}
                    />
                  </View>
                </TouchableOpacity>
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
        backgroundColor: '#F0FFFF',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
  },
    frame1:{
      flex: 1,
      backgroundColor: "#F5FFFF",
      alignItems: 'center',
      justifyContent: 'center',
    },
    frame2:{
      flex: 1,
      backgroundColor: "#F0FFFF",
      alignItems: 'center',
      justifyContent: 'center',
    },
      text: {
        textAlign: 'center',
      },
      img_1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
        img: {
          flex: 1,
          height: 250,
          resizeMode: 'contain',
        },
    title_left: {
         flex: 8,
         backgroundColor: '#E0FFFF',
         alignItems: 'center',
         justifyContent: 'center',
      },
        left_text: {
          fontSize: 20,
          fontFamily: 'monospace',
          textAlign: 'center',
          margin: 10,
          fontWeight: 'bold',
          color: '#000',
        },
    title_right: {
          flex: 2,
          backgroundColor: '#9DD6EB',
          alignItems: 'center',
          justifyContent: 'center',
      },    
        right_text: {
          fontSize: 30,
          textAlign: 'center',
          margin: 3,
          fontWeight: 'bold',
          color: '#000',
        },
});
