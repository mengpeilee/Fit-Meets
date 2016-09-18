
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
  ListView,
  Navigator,
} from 'react-native';

import Firebase from "firebase";

export  default  class  AchievementW  extends  Component {

  constructor(props){
    super(props);

    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    this.itemsRef = myFirebaseRef.child('user/yuko99/achievement'); // child *********

    // var myFirebaseRef = new Firebase('https://ft-friends.firebaseio.com/');
    // this.itemsRef = myFirebaseRef.child('achievement'); // child *********

    this.state= {
      todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.items = [];

  }

  _pressButton() {
      const { navigator } = this.props;
      if(navigator) {
          navigator.pop();
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

  addTodo() {
    if (this.state.newTodo !== '') {
      this.itemsRef.push({
        friendID: this.state.newTodo //each name ********* <!--callback name-->
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
                      ♕  Challenge
                  </Text>
                </View>
                <View style={styles.back}>
                  <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={styles.back_text}>
                        ↺  
                    </Text>
                  </TouchableOpacity>   
                 </View>
                </ View>
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

  renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
        <TouchableOpacity>
          <View>
            <View style={styles.row}>
              <Image 
                style={styles.missionIcon} 
                source={{uri:rowData.text.icon}} 
              />
              <Text style={styles.rowText}>{rowData.text.mission}</Text> 
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  
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
         backgroundColor: '#FFE0E5',
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
      back: {
          flex: 2,
          backgroundColor: '#FFC0CB',
          alignItems: 'center',
          justifyContent: 'center',
      },    
        back_text: {
          fontSize: 30,
          textAlign: 'center',
          margin: 3,
          fontWeight: 'bold',
          color: '#000',
        },
    list: {
        flex: 9,
        flexDirection: 'column',
        backgroundColor:'#FFF0F5',     
    },
      missionIcon: {
        width: 50,
        height: 50,

      },
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
      },
        rowText: {
          flex:2,
          textAlign: 'center',
          fontFamily: 'AvenirNext-Medium',
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 5,
          color: '#DC143C',
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
      backgroundColor: '#FFF0F5',
    },
});

module.exports = AchievementW;