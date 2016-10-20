
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

export  default  class  FriendChat  extends  Component {

  constructor(props){
    super(props);
    //var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    // myFirebaseRef.set({
    //   title: 'Hello',
    //   author: 'Yuko'
    // });

    this.itemsRef = myFirebaseRef.child('chatroom'); 

    this.state= {
      friendID: '',
      friendName: '',
      newTodo: '',
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.itemsRefName = myFirebaseRef.child('user/' + user + '/name').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (name) : ' + snapshot.val());
      userName = snapshot.val();

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

    this.items = [];
  }

  _pressButton() {
      this.setState({
        friendID: '',
        friendName: '',
        newTodo: '',
       
      });

      const { navigator } = this.props;
      if(navigator) {
        navigator.pop();
      }
  }

  componentDidMount() {
    this.setState({
        friendID: this.props.friendID,  
        friendName: this.props.friendName,   
    });

    this.itemsRef.on('child_added', (dataSnapshot) => {
      var ds = dataSnapshot.val();
      if(ds.friendID == this.props.friendID || ds.userID == this.props.friendID)
        if(ds.userID == user || ds.friendID == user)
        {
          this.items.push({key: dataSnapshot.key(), text: dataSnapshot.val()});
          this.setState({
            todoSource: this.state.todoSource.cloneWithRows(this.items)
          });
        }
    });
  }

  componentWillMount() {
    
  }

  addTodo() {
    if (this.state.newTodo !== '') {
      this.itemsRef.push({
        saying: this.state.newTodo, 
        userID: user,
        userName: userName,
        friendID: this.state.friendID,
        friendName: this.state.friendName,
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
              {userName} 👫 {this.state.friendName}
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
        flex: 9,
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