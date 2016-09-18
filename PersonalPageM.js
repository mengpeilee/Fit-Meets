
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
  ListView,
  Navigator,
} from 'react-native';

import Firebase from "firebase";

import AchievementM from './AchievementM';

export  default  class  PersonalPageM  extends  Component {

  constructor(props){
    super(props);

    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    this.itemsRef = myFirebaseRef.child('user/yuko99'); // child *********

    this.state= {
      doAvatar: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };

    this.items = [];

  }

  _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'AchievementM',
                component: AchievementM,
            })
        }
  }

  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({key: dataSnapshot.key(), text: dataSnapshot.val()}); // key 
      this.setState({
        doAvatar: this.state.doAvatar.cloneWithRows(this.items)
      });
    });

    this.itemsRef.on('child_removed', (dataSnapshot) => {
      this.items = this.items.filter((x) => x.key !== dataSnapshot.key());
      this.setState({
        doAvatar: this.state.doAvatar.cloneWithRows(this.items)
      });
    });
  }

  render() {
    return (
          <View style={styles.container}>
              <View style={styles.idname_sex}>
                 <View style={styles.idname}>
                    <Text style={styles.idname_text}>
                      badboy
                    </Text>
                 </View>
                 <View style={styles.sex}>
                     <Text style={styles.sex_text}>
                      👔
                    </Text>
                 </View>
              </ View>
              <View style={styles.player}>
                <ListView
                  dataSource={this.state.doAvatar}
                  renderRow={this.renderRow.bind(this)} 
                  enableEmptySections={true}
                />
              </View>
              <View style={[styles.status, {backgroundColor: '#9DD6EB'}]}>
                <View style={styles.icon_1}> 
                  <View style={styles.icon_1}>
                    <Image
                      style={styles.icon}
                      source={require('./img/personal/steps.png')}
                    />
                  </View>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                  
                  </Text>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                    step
                  </Text>
                </View>
              </View>
              <View style={[styles.status, {backgroundColor: '#97CAE5'}]}>
                <View style={styles.icon_1}>
                  <View style={styles.icon_1}>
                    <Image
                      style={styles.icon}
                      source={require('./img/personal/km.png')}
                    />
                  </View>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                  
                  </Text>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                    km
                  </Text>
                </View>
              </View>
              <View style={[styles.status, {backgroundColor: '#92BBD9'}]}>
                <View style={styles.icon_1}>
                  <View style={styles.icon_1}>
                    <Image
                      style={styles.icon}
                      source={require('./img/personal/bpm.png')}
                    />
                  </View>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                  
                  </Text>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                    bpm
                  </Text>
                </View>
              </View>
              <View style={styles.tab}>
              </View>
          </View>
    )
  }

  renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
           <View>
            <View style={styles.inside}>
              <Image 
                style={styles.avatar}  
                source={{uri:rowData.text.avatar}} 
              />
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
    idname_sex: {
        flex: .08,
        flexDirection: 'row',     
    },
      idname: {
         flex: 8,
         backgroundColor: '#E0FFFF',
         alignItems: 'center',
         justifyContent: 'center',
      },
        idname_text: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: '#000',
        },
      sex: {
          flex: 2,
          backgroundColor: '#E0FFFF',
          alignItems: 'center',
          justifyContent: 'center',
      },    
        sex_text: {
          fontSize: 30,
          textAlign: 'center',
          margin: 3,
          fontWeight: 'bold',
          color: '#000',
        },
    player: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F0FFFF',
    },
      avatar_1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
        avatar: {
          flex: 1,
          height: 250,
          resizeMode: 'contain',
        },
          inside: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
    status: {
        flex: .14,
        flexDirection: 'row',
        alignItems: 'center',
    },
       icon_1: {
        flex: 1.5,
        justifyContent: 'center',
      },
        icon: {
          margin: 10,
          resizeMode:'contain'
        },
      status_text_1: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
        status_text: {
          fontSize: 30,
          textAlign: 'right',
          fontWeight: 'bold',
          margin: 20,
          fontFamily: 'monospace',
          color: '#FFF',
        },
    tab: {
      flex: .1,
      backgroundColor: '#F0FFFF',
    },  
});
