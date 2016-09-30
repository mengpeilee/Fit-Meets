/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import config from './config.js';
import qs from 'qs';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Linking,
  View
} from 'react-native';

var ab = 'test';
var token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Q0pZRFQiLCJhdWQiOiIyMjdRTk0iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3c2xlIHdhY3QiLCJleHAiOjE0NzUyMzYyODIsImlhdCI6MTQ3NTE1NzA4Mn0.KTK0WeU4CD-O25VHV06Q601497HzPHtxIGCZ1MBOtFg';

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

    cb(query.access_token);

    const userid = query.user_id

    /*if (query.state === state) {
      cb(query.code, getProfileData, 'access_token');
    } else {
      console.error('Error authorizing oauth redirection');
    }*/
  }


   // Call OAuth
  const oauthurl = 'https://www.fitbit.com/oauth2/authorize?'+
            qs.stringify({
              client_id,
              response_type: 'token',
              scope: 'heartrate activity profile sleep',
              redirect_uri: 'mppy://',
              expires_in: '31536000',
              //state,
            });
  console.log(oauthurl);

  Linking.openURL(oauthurl).catch(err => console.error('Error processing linking', err));
}

function getDistance(access_token) {
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
    console.log(`distance: ${JSON.stringify(distance)}`);
  }).catch((err) => {
    console.error('Error: ', err);
  });
}

function getSteps(access_token) {

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
    var abc = JSON.stringify(steps)
    console.log('abc = '+abc)
    console.log(`steps: ${JSON.stringify(steps)}`);
  }).catch((err) => {
    console.error('Error: ', err);
  });
}

function getHeartrate(access_token) {
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
    console.log(`heartrate: ${JSON.stringify(heartrate)}`);
  }).catch((err) => {
    console.error('Error: ', err);
  });
  
}

export default  class Fitbit extends Component {

  state = {
        test: null,
        //tst2: null,
  }

  componentWillMount() {
    //OAuth(config.client_id, getDistance);
    //OAuth(config.client_id, getSteps);
    //OAuth(config.client_id, getHeartrate);
    getDistance(token);
    getHeartrate(token);
    var str = getSteps(token)
    console.log(str);

    this.setState({
      test: ab,
    });

  }

  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.test}
        </Text>
        <Text style={styles.instructions}>
          Do you know who I am?
        </Text>
        <Text style={styles.instructions}>
          I am a hero!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
