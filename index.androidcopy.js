import { ToggleContainer, ToggleItem } from 'deco-ride-share-demo'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  AppRegistry,
  Text,
  StyleSheet,
  Button
} from 'react-native';


import Swiper from 'react-native-swiper';

// //auth0 stuff here
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



export default class MystroPaul extends Component {
  render() {
    return (
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: '#D3D3D3', width: 13, height: 13, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
          activeDot={<View style={{backgroundColor: '#A9A9A9', width: 13, height: 13, borderRadius: 7, marginLeft: 4, marginRight: 4}} />}
          paginationStyle={{
            bottom: 80
          }}
          loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <ToggleContainer
            value={(this.state && this.state.option) || 'One'}
            options={['One', 'Two', 'Three', 'Four']}
            style={{padding: 10}}
            orientation={"horizontal"}
            spacing={10}
            renderItem={(option, active) => (
              <ToggleItem
                option={option}
                active={active}
                onPress={() => this.setState({option})}
                color={"rgb(74,144,226)"}
                backgroundColor={"rgb(255,255,255)"}
                borderColor={"rgba(231,231,231,1)"}
                activeColor={"rgba(255,255,255,1)"}
                activeBackgroundColor={"rgb(74,144,226)"}
                borderRadius={2}
              />
            )}
          />
          <Button style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}
            title="5 min"
          >5 min
          </Button>
          <Button style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}
            title="10 min"
          >10 min
          </Button>
          <Button style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}
            title="15 min"
          >15 min
          </Button>
        
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('MystroPaul', () => MystroPaul);
