
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
  Linking,
  Navigator,
} from 'react-native';

import Firebase from "firebase";
import qs from 'qs';
import config from './config.js';
import AchievementM from './AchievementM';

//import bpm from './img/personal/bpmNormal.gif';
import bpm from './img/personal/bpmFast.gif';
//import bpm from './img/personal/bpmFaster.gif';

var user = 'yuko99';

function OAuth(client_id, cb) {


   // Listen to redirection
  Linking.addEventListener('url', handleUrl);
  function handleUrl(event){
    console.log(event.url);
    Linking.removeEventListener('url', handleUrl);
    const [, query_string] = event.url.match(/\#(.*)/);
    console.log(query_string);

    const query = qs.parse(query_string);
    console.log(`query: ${JSON.stringify(query)}`);

    const userid = query.user_id

    cb(query.access_token);
  }


   // Call OAuth
  const oauthurl = 'https://www.fitbit.com/oauth2/authorize?'+
            qs.stringify({
              client_id,
              response_type: 'token',
              scope: 'heartrate activity profile sleep',
              redirect_uri: 'mppy://',
              expires_in: '31536000',
            });
  console.log(oauthurl);

  Linking.openURL(oauthurl).catch(err => console.error('Error processing linking', err));
}

function getDistance(access_token) {
  PersonalPageM.setStateDistance("loading...")
  fetch(
     'https://api.fitbit.com/1/user/-/activities/tracker/distance/date/today/1d.json',
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      },

    }
  ).then((distance) => {
    return distance.json()
  }).then((distance) => {
    PersonalPageM.setStateDistance(Number(distance['activities-tracker-distance'][0]['value']).toFixed(2));
  }).catch((err) => {
    console.error('Error: ', err);
  });
}

function getSteps(access_token) {
  PersonalPageM.setStateStep("loading...")
  fetch(
     'https://api.fitbit.com/1/user/-/activities/tracker/steps/date/today/1d.json',
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      },

    }
  ).then((steps) => {
    return steps.json()
  }).then((steps) => {
    PersonalPageM.setStateStep(steps['activities-tracker-steps'][0]['value']);
  }).catch((err) => {
    console.error('Error: ', err);
  });
  

}

function getHeartrate(access_token) {
  PersonalPageM.setStateHeart("loading...")
  fetch(
     'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1min.json',
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      },

    }
  ).then((heartrate) => {
    return heartrate.json()
  }).then((heartrate) => {
     PersonalPageM.setStateHeart(heartrate['activities-heart-intraday']['dataset'][heartrate['activities-heart-intraday']['dataset'].length - 1]['value']);
  }).catch((err) => {
    console.error('Error: ', err);
  });

}


export  default  class  PersonalPageM  extends  Component {

  constructor(props){
    super(props);

    var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
    this.itemsRef = myFirebaseRef.child('user/' + user); // child *********

    this.state= {
      showText: true,
      doAvatar: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    };
    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000);

    this.items = [];

  }

  static state = {
        step: ' ',
        dis: ' ',
        heart:' '

  }
  
  static setStateStep(a){
    this.state.step = a;
  }

  static setStateDistance(a){
    this.state.dis = a;
  }

  static setStateHeart(a){
    this.state.heart = a;
  }

  static getStateStep(){
    return this.state.step;
  }

  static getStateDistance(){
    return this.state.dis;
  }

  static getStateHeart(){
    return this.state.heart;
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

  componentWillMount() {
    OAuth(config.client_id, getDistance);
    OAuth(config.client_id, getSteps);
    OAuth(config.client_id, getHeartrate);
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

    OAuth(config.client_id, getDistance);
    OAuth(config.client_id, getSteps);
    OAuth(config.client_id, getHeartrate);
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
                    {PersonalPageM.getStateStep()}
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
                    {PersonalPageM.getStateDistance()}
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
                      source={bpm}
                    />
                  </View>
                </View>
                <View style={styles.status_text_1}>
                  <Text style={styles.status_text}>
                    {PersonalPageM.getStateHeart()}
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
