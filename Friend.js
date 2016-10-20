
import React, { 
  Component,
  PropTypes,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ListView,
  Navigator,
} from 'react-native';

import Firebase from "firebase";
import config from './config.js';

import SetUp from './SetUp';
import FriendChat from './FriendChat';

var user = config.user;
var userName;
var exist = false;

export  default  class  Friend  extends  Component {

  constructor(props){
    super(props);

    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');

    this.itemsRef = myFirebaseRef.child('user/' + user + '/friend'); 

    this.state= {
      newTodo: '',
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.itemsRefExist = myFirebaseRef.child('user/' + user + '/newfriend/exist').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (new friend exist or not) : ' + snapshot.val());
      exist = snapshot.val();

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

    this.items = [];
  }

  _pressButton() {

    if(exist)
    {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SetUp',
                component: SetUp,
            })
        }
    }

    else
    {
      alert("記得解地圖的任務然後打卡哦 \n\n等待一個為你小鹿亂撞的人吧 :)");
    }

  }

  componentDidMount() {

    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({key: dataSnapshot.key(), text: dataSnapshot.val()}); // key -> l49 , l68
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });

  }

  goChat(rowData) {
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'FriendChat',
                component: FriendChat,

                params: {
                    friendID: rowData.key,
                    friendName: rowData.text.userName,
                }
            })
        }
  }

  addTodo() {
    
  }

  removeTodo(rowData) {
    
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.title_text}>
              👫 Friend
            </Text>
          </View>
          <View style={styles.setting}>
            <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <Text style={styles.setting_text}>
                 ❤
              </Text>
            </TouchableOpacity>
          </View>
        </View>
       
        <View style={styles.list}>
          <ListView
          dataSource={this.state.todoSource}
          renderRow={this.renderRow.bind(this)} 
          enableEmptySections={true} 
          />
        </View>    
        <View style={styles.tab}>
        </View>
      </View>
    )
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity onPress={() => this.goChat(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowTextUser}>　　　　💚　  {rowData.text.userName} </Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableOpacity>
       
    );
  }

}

const styles = StyleSheet.create({

  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row'
  },

  btnText: {
    fontSize: 18,
    color: '#000000',
    marginTop: 6,
  },
  input: {
    height: 36,
    width: 250,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  },

  container: {
        flex: 1,
        flexDirection: 'column'
  },
    top: {
        flex: 1,
        flexDirection: 'row',     
    },
      title: {
         flex: 8,
         backgroundColor: '#D0FFF0',
         alignItems: 'center',
         justifyContent: 'center',
      },
        title_text: {
          fontSize: 20,
          fontFamily: 'monospace',
          textAlign: 'center',
          margin: 10,
          fontWeight: 'bold',
          color: '#000',
        },
      setting: {
          flex: 2,
          backgroundColor: '#66CDAA',
          alignItems: 'center',
          justifyContent: 'center',
      }, 
      adding: {
          flex: 2,
          backgroundColor: '#66DEAA',
          alignItems: 'center',
          justifyContent: 'center',
      },     
        setting_text: {
          fontSize: 30,
          textAlign: 'center',
          margin: 3,
          fontWeight: 'bold',
          color: '#000',
        },
    list: {
        flex: 10,
        flexDirection: 'column',
        backgroundColor:'#F0FFF0',     
    },
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        height: 45,
      },
        rowTextUser: {
          flex:3,
          fontFamily: 'AvenirNext-Medium',
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 3,
          color: '#008080',
        },
        rowText: {
          flex:3,
          textAlign: 'center',
          fontFamily: 'AvenirNext-Medium',
          fontSize: 15,
          marginBottom: 3,
          color: '#008080',
        },
        rowTextnon: {
          flex:2,
          textAlign: 'center',
          fontFamily: 'serif',
          fontSize: 15,
          marginBottom: 5,
          color:'#888888',
        },
    tab: {
      flex: 1,
      backgroundColor:'#F0FFF0',
    },
});