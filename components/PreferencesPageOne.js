

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class PreferencesPageOne extends Component {
  state={
    toggle1:false,toggle2:false, toggle3:false,toggle4:false,
    toggle5:false,toggle6:false,
  }
  _onPress1(){
    const newState = !this.state.toggle1;
    this.setState({toggle1:newState})
  }
  _onPress2(){
    const newState = !this.state.toggle2;
    this.setState({toggle2:newState})
  }
  _onPress3(){
    const newState = !this.state.toggle3;
    if (!this.state.toggle3){
      this.setState({toggle3:newState})
      this.setState({toggle4:!newState})
      this.setState({toggle5:!newState})
      this.setState({toggle6:!newState})
    }
    this.setState({toggle3:newState})
  }
  _onPress4(){
    const newState = !this.state.toggle4;
    this.setState({toggle4:newState})
  }
  _onPress5(){
    const newState = !this.state.toggle5;
    this.setState({toggle5:newState})
  }
  _onPress6(){
    const newState = !this.state.toggle6;
    this.setState({toggle6:newState})
  }
  render() {
      const {toggle1} = this.state;
      const {toggle2} = this.state;
      const {toggle3} = this.state;
      const {toggle4} = this.state;
      const {toggle5} = this.state;
      const {toggle6} = this.state;
      const buttonBg1 = toggle1?"#A9A9A9":"transparent";
      const buttonBg2 = toggle2?"#A9A9A9":"transparent";
      const buttonBg3 = toggle3?"#A9A9A9":"transparent";
      const buttonBg4 = toggle4?"#A9A9A9":"transparent";
      const buttonBg5 = toggle5?"#A9A9A9":"transparent";
      const buttonBg6 = toggle6?"#A9A9A9":"transparent";
    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>What app should always be active?</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
              onPress={()=>this._onPress1()}
              style={{margin:10, width: 80, height: 80, backgroundColor: buttonBg1, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Uber</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress2()}
              style={{margin:10, width: 80, height: 80, backgroundColor: buttonBg2, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Lyft</Text>
            </TouchableOpacity>
             
            </View>
        
            <Text style={styles.text}>And when should the other come online?</Text>
            <View style={{flexDirection: 'row'}}>
              
             <TouchableOpacity 
              onPress={()=>this._onPress3()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg3, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Always</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress4()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg4, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>If no ride for 5 min</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>this._onPress5()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg5, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>If no ride for 10 min</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress6()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg6, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>If no ride for 20 min</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
  },
 
  touchabletext:{
    color:'black', textAlign: 'center', fontSize:20,
  },
  
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  text: {
    color: 'black',
    fontSize: 28,
    margin: 20,
    textAlign: 'center'
  }
})
