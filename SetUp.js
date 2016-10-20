
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

var user = config.user;
var userName;
var newfriend;
var newfriendName;

 export default class SetUp extends React.Component {

  constructor(props) {
    super(props);

    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');

    this.itemsRef = myFirebaseRef.child('/newFriendChat'); // child *********

    this.state = {
      newTodo: '',
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    // --------- user ---------

    // this.itemsRefNFExist = myFirebaseRef.child('user/' + user + '/newfriend'); // btn check

    this.itemsRefUserName = myFirebaseRef.child('user/' + user + '/name').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (user name) : ' + snapshot.val());
      userName = snapshot.val();

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

    // ---------new friend---------
    this.itemsRefNewFriendID = myFirebaseRef.child('user/' + user + '/newfriend/newfriendID').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (new friend ID) : ' + snapshot.val());
      newfriend = snapshot.val();

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

    this.itemsRefNewFriendName = myFirebaseRef.child('user/' + user + '/newfriend/newfriendName').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (new friend name) : ' + snapshot.val());
      newfriendName = snapshot.val();

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

    this.itemsRefMake = myFirebaseRef.child('user/' + user + '/friend/'); // _makeFriend()

    this.itemsRefMakeFriend = myFirebaseRef.child('user/' + user + '/friend/' + newfriend); // _makeFriend()

    this.itemsRefRefuseFriend = myFirebaseRef.child('user/' + user + '/newfriend'); // _refuseFriend()



    this.items = [];

  }

  _pressButton() {

        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
   }

   _makeFriend() {

        this.itemsRefMakeFriend.set({
          userName: newfriendName,
        });

        this.itemsRefRefuseFriend.update({
          exist: false,
        });

        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
   }

   _refuseFriend() {

        this.itemsRefRefuseFriend.update({
          exist: false,
          newfriendID: "",
          newfriendName: "",
        });

        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
   }

  componentWillMount() {
    
  }

  componentDidMount() {

    this.itemsRef.on('child_added', (dataSnapshot) => {
      var ds = dataSnapshot.val();
      if(ds.newfriendID == newfriend || ds.userID == newfriend)
        if(ds.userID == user || ds.newfriendID == user)
        {
          this.items.push({key: dataSnapshot.key(), text: dataSnapshot.val()});
          this.setState({
            todoSource: this.state.todoSource.cloneWithRows(this.items)
          });
        }
    });
  }

  addTodo() {
    if (this.state.newTodo !== '') {
      this.itemsRef.push({
        saying: this.state.newTodo, //each name ********* <!--l101--callback name-->
        userName: userName,
        userID: user,
        newfriendID: newfriend,
        newfriendName: newfriendName,
      });
      this.setState({
        newTodo: ''
      });
    }
  }

  removeTodo(rowData) {
    
  }


 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.title_text}>
              💞 擦身而過的你/妳 ...
            </Text>
          </View>
          <View style={styles.setting}>
            <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <Text style={styles.setting_text}>
                  ↺ 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.top}>
          <View style={styles.title}>
            <TextInput 
              style={styles.input} 
              maxLength={25}
              multiline={true}
              onChangeText={(text) => this.setState({newTodo: text})} 
              value={this.state.newTodo}
            /> 
          </View>
          <View style={styles.adding}>
            <TouchableOpacity onPress={() => this.addTodo()}>
              <Text style={styles.btnText}>＋ </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mid}>
          <View style={styles.list}>
            <ListView
            dataSource={this.state.todoSource}
            renderRow={this.renderRow.bind(this)} 
            enableEmptySections={true} 
            />
          </View>
          <View style={styles.bottom}>
            
            <TouchableOpacity style={styles.btn} onPress={() => this._makeFriend()}>
              <View style={styles.button1}>
                <Text style={styles.btn_text}>　加加　👇 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => this._refuseFriend()}>
              <View style={styles.button2}>
                <Text style={styles.btn_text}>　拜拜　👋 </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.tab}>
        </View>    
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity
        onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowTextUser}>{rowData.text.userName} : </Text>
            <Text style={styles.rowText}>{rowData.text.saying}</Text> 
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableOpacity>
    );
  }

}

var styles = StyleSheet.create({
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
        setting_text: {
          fontSize: 30,
          textAlign: 'center',
          margin: 3,
          fontWeight: 'bold',
          color: '#000',
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
      adding: {
          flex: 2,
          backgroundColor: '#66DEAA',
          alignItems: 'center',
          justifyContent: 'center',
      }, 
    mid: {
        flex: 9,
        flexDirection: 'column',
        backgroundColor:'#F0FFF0',     
    },    
    list: {
        flex: 8,
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
          flex:2,
          textAlign: 'center',
          fontFamily: 'AvenirNext-Medium',
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 5,
          color: '#008080',
        },
        rowText: {
          flex:3,

          fontFamily: 'AvenirNext-Medium',

          fontSize: 15,
          marginBottom: 5,
          color: '#008080',
        },
        separator: {
          height: 1,
          backgroundColor: '#CCCCCC',
        },
        todoText: {
          flex: 1,
        },
    bottom: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor:'#F0FFF0',     
    },
      btn: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      button1: {
        flexDirection: 'row',
        backgroundColor: '#FFD2D2',
        justifyContent: 'center',
        borderRadius: 4,
      },  
      button2: {
        flexDirection: 'row',
        backgroundColor: '#d0d0d0',
        justifyContent: 'center',
        borderRadius: 4,
      },     
        btn_text: {
          fontSize: 20,
          margin: 10,
          fontWeight: 'bold',
          color: '#000',
        },
    tab: {
      flex: 1,
      backgroundColor:'#F0FFF0',
    },
});

module.exports = SetUp;