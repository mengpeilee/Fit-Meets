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
  Picker,
} from 'react-native';

import Firebase from "firebase";

//var SAMPLE_TEXT = "Welcome to React Native Playground!";

export default class NewFlag extends Component {

  constructor(props) {
        super(props);
        var myFirebaseRef = new Firebase('https://ft-friends.firebaseio.com/');
        this.itemsRef = myFirebaseRef.child('map'); // child *********
        this.state = {
         classification: '',
         latitude: '',
         longtitude: '',
         doingThing:'',
         time: '',
         uID: '',
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
    if (this.state.doingThing !== '') {
      this.itemsRef.push({
        text: this.state.doingThing, //each name ********* <!--l101--callback name-->
        classification: this.state.classification,
      });
      this.setState({
        doingThing: ''
      });
    }
    const { navigator } = this.props;
          if(navigator) {
              navigator.pop();
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
              Doing 
            </Text>
          </View>
          <View style={styles.back}>
            <TouchableOpacity onPress={this._pressButton.bind(this)}>
                <Text style={styles.back_text}>
                   ↺
                </Text>
            </TouchableOpacity>
          </View> 
        </View>

        <View style={styles.box}>
          <View style={styles.class}>
           
            <Text style={styles.text}>Choose one match the best</Text>
           
              <Picker
                style ={{width:200}} 
                selectedValue={this.state.classification} 
                onValueChange={(int) => this.setState({classification: int})}
              >
                <Picker.Item label="運 動 散 步" value="1" />
                <Picker.Item label="用 功 讀 書" value="2" />
                <Picker.Item label="吃 飯 長 肉" value="3" />
                <Picker.Item label="娛 樂 人 生" value="4" />
                <Picker.Item label="參 加 活 動" value="5" />
                <Picker.Item label="養 足 體 力" value="6" />
                <Picker.Item label="無 所 事 事" value="7" />
                <Picker.Item label="其 他 咚 咚" value="8" />
              </Picker>

          </View>

          <View style={styles.doing}>
            <Text style={styles.text}>Write something about you ,</Text>
            <Text style={styles.text}>　　here and now :)　</Text>

            <TextInput 
              style={styles.text_input} 
              maxLength={50}
              multiline={true} 
              onChangeText={(text) => this.setState({doingThing: text})} 
              value={this.state.doingThing}
            /> 
        
          </View>

          <View style={styles.summit}>
           
              <TouchableOpacity style={styles.btn} onPress={() => this.addTodo()}>
                <View style={styles.summit_btn}>
                  <Text style={styles.btn_text}>　　　　　push　👇　　　　</Text>
                </View>
              </TouchableOpacity>
 
          </View>
        </View>
        <View style={styles.tab}>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0FFF0',
  },
    top: {
      flex: 1,
      flexDirection: 'row',
      
    },
      title: {
          flex: 8,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:　'#D0FFF0', 
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#66CDAA',
      },
        back_text: {
          fontSize: 30,
          textAlign: 'center',
          margin: 3,
          fontWeight: 'bold',
          color: '#000',
        },
    box: {
      flex: 9,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
      class: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      doing: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      text_input: {
        borderWidth: 1,
        borderColor: 'red',
         
        width: 300,
        fontSize: 15,
        paddingTop: 10,
      },
      summit: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      summit_btn: {
        alignItems: 'center',
        justifyContent: 'center',
      },
       btn: {
        backgroundColor: '#ffbb99',
        justifyContent: 'center',
        borderRadius: 4,
        height: 60,
      },
        btn_text: {
              fontFamily: 'monospace',
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
              fontWeight: 'bold',
              color: '#000',
          },
      text: {
        fontFamily: 'monospace',
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#019858',
      },
    tab: {
      flex: 1,
      backgroundColor:'#F0FFF0',
    },
});

module.exports = NewFlag;