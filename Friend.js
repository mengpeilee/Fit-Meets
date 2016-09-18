
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

var SetUp = require('./SetUp');

export  default  class  Friend  extends  Component {

  constructor(props){
    super(props);
    //var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    var myFirebaseRef = new Firebase('https://ft-friends.firebaseio.com/');
    // myFirebaseRef.set({
    //   title: 'Hello',
    //   author: 'Yuko'
    // });

    this.itemsRef = myFirebaseRef.child('project'); // child *********

    this.state= {
      newTodo: '',
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.items = [];
  }

  _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SetUp',
                component: SetUp,
            })
        }
  }

  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({key: dataSnapshot.key(), text: dataSnapshot.val()}); // key -> l49 , l68
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

  addTodo() {
    if (this.state.newTodo !== '') {
      this.itemsRef.push({
        friendID: this.state.newTodo //each name ********* <!--l101--callback name-->
      });
      this.setState({
        newTodo: ''
      });
    }
  }

  removeTodo(rowData) {
    this.itemsRef.child(rowData.key).remove();
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
                 🔧
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.top}>
          <View style={styles.title}>
            <TextInput 
              style={styles.input} 
              maxLength={20}
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
      <TouchableHighlight
        onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.rowText}>{rowData.text.friendID}</Text> 
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
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
        rowText: {
          flex:2,

          fontFamily: 'AvenirNext-Medium',
          fontWeight: 'bold',
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