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
              expires_in: '31536000'
            });
  console.log(oauthurl);

  Linking.openURL(oauthurl).catch(err => console.error('Error processing linking', err));
}

function getDistance(access_token) {
  Fitbit.setStateDistance("loading...")
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
    str = JSON.stringify(distance)
    console.log('distance : '+str)
    console.log(Fitbit.getStateDistance())
    console.log(Fitbit.setStateDistance(distance['activities-tracker-distance'][0]['value']))
    console.log(Fitbit.getStateDistance())
  }).catch((err) => {
    console.error('Error: ', err);
  });
}

function getSteps(access_token) {
  Fitbit.setStateStep("loading...")
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
    str = JSON.stringify(steps)
    console.log('steps : '+str)
    console.log(Fitbit.getStateStep())
    console.log(Fitbit.setStateStep(steps['activities-tracker-steps'][0]['value']))
    console.log(Fitbit.getStateStep())
    
  }).catch((err) => {
    console.error('Error: ', err);
  });
  

}

function getHeartrate(access_token) {
  Fitbit.setStateHeart("loading...")
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

    Fitbit.setStateHeart(heartrate['activities-heart-intraday']['dataset'][heartrate['activities-heart-intraday']['dataset'].length - 1]['value']);
    //console.log(heartrate['activities-heart-intraday']['dataset'].length);
  }).catch((err) => {
    console.error('Error: ', err);
  });

}

export default  class Fitbit extends Component {



  constructor(props) {
    super(props);
    // this.state = {showText: true};
    this.state = {showText: true};
    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 10000);
    
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


  componentWillMount() {
    OAuth(config.client_id, getDistance);
    OAuth(config.client_id, getSteps);
    OAuth(config.client_id, getHeartrate);
    
  }

  

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {Fitbit.getStateDistance()}
        </Text>
        <Text style={styles.instructions}>
          {Fitbit.getStateStep()}
        </Text>
        <Text style={styles.instructions}>
          {Fitbit.getStateHeart()}
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
