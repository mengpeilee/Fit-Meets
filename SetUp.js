
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

 export default class SetUp extends React.Component {

  constructor(props) {
        super(props);
        this.state = {};
    }

  _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
   }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.title_text}>
              🔧 Coming soon ...
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
        <View style={styles.list}>
          
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
    list: {
        flex: 9,
        flexDirection: 'column',
        backgroundColor:'#F0FFF0',     
    },
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
      },
        rowText: {
          flex:2,
          
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
      backgroundColor:'#F0FFF0',
    },
});

module.exports = SetUp;