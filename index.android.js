/**
 * React Native App for Paul An's Mystro Coding Challenge
 * https://github.com/paulan94/mystropaul
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  AppRegistry,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'


import Swiper from 'react-native-swiper';

//auth0 stuff here
// import Auth0 from 'react-native-auth0';
// const auth0 = new Auth0({ domain: 'mystropaul.auth0.com',
//  clientId: '3F8bxdYduj1YQYZIuv6u5BrE1q4OLYTr',
//  responseType: 'token id_token', });


// auth0
//     .webAuth
//     .authorize({scope: 'openid email', audience: 'https://mystropaul.auth0.com/userinfo'})
//     .then(credentials =>
//       console.log('cred',credentials)
//       // Successfully authenticated
//       // Store the accessToken
//     )
    
//     .catch(error => console.log(error));


// console.log(auth0)

import PreferencesPageOne from './components/PreferencesPageOne';
import PreferencesPageTwo from './components/PreferencesPageTwo';
import PreferencesPageThree, {textButton2} from './components/PreferencesPageThree';

export default class MystroPaul extends Component {
  
  render() {
    return (
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: '#D3D3D3', width: 13, height: 13, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
          activeDot={<View style={{backgroundColor: '#A9A9A9', width: 13, height: 13, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
          paginationStyle={{
            bottom: 30
          }}
          loop={false}>
        <View style={styles.slide}>
          
           <PreferencesPageOne/>
        </View>
        <View style={styles.slide}>
           <PreferencesPageTwo/>
        </View>
        <View style={styles.slide}>
          <PreferencesPageThree/>
        </View>
      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
  },
 
  touchabletext:{
    color:'white', textAlign: 'center', fontSize:16,
  },
  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
})


AppRegistry.registerComponent('MystroPaul', () => MystroPaul);
