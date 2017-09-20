

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class PreferencesPageThree extends Component {
  state={
    toggle1:false,toggle2:false,toggle3:false,
  }
  _onPress1(){
    const newState = !this.state.toggle1;
    if (!this.state.toggle1 && !this.state.toggle2){
      this.setState({toggle1:newState})
    }
    else if (this.state.toggle1 && !this.state.toggle2){
      this.setState({toggle1:newState})
    }
    else{
      this.setState({toggle1:newState})
      this.setState({toggle2:!newState})
    }
  }
  _onPress2(){
    const newState = !this.state.toggle2;
   if (!this.state.toggle2 && !this.state.toggle1){
      this.setState({toggle2:newState})
    }
    else if (this.state.toggle2 && !this.state.toggle1){
      this.setState({toggle2:newState})
    }
    else{
      this.setState({toggle2:newState})
      this.setState({toggle1:!newState})
    }
  }
  _onPress3(){
    const newState = !this.state.toggle3;
    this.setState({toggle3:newState})
    
  }
  render() {
      const {toggle1} = this.state;
      const {toggle2} = this.state;
      const {toggle3} = this.state;
      const textButton1 = toggle1 && !toggle2?"Yes":"No";
      const buttonBg1 = toggle1?"#A9A9A9":"transparent";
      const buttonBg2 = toggle2?"#A9A9A9":"transparent";
      const buttonBg3 = toggle3?"#A9A9A9":"transparent";
    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>Do you want rides from carpool services?</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
              onPress={()=>this._onPress1()}
              style={{margin:10, width: 80, height: 80, backgroundColor: buttonBg1, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Yes</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress2()}
              style={{margin:10, width: 80, height: 80, backgroundColor: buttonBg2, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>No</Text>
            </TouchableOpacity>
            </View>
        
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity 
              onPress={()=>this._onPress3()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg3, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Submit Preferences {textButton1}</Text>
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
