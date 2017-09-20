

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class PreferencesPageTwo extends Component {
  state={
    toggle1:false,toggle2:false, toggle3:false,toggle4:false,
    toggle5:false,toggle6:false, toggle7:false,toggle8:false,
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
    this.setState({toggle3:newState})
  }
  _onPress4(){
    const newState = !this.state.toggle4;
    if (!this.state.toggle4){
      this.setState({toggle4:newState})
      this.setState({toggle1:!newState})
      this.setState({toggle2:!newState})
      this.setState({toggle3:!newState})
    }
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
  _onPress7(){
    const newState = !this.state.toggle7;
    this.setState({toggle7:newState})
  }
  _onPress8(){
    const newState = !this.state.toggle8;
    if (!this.state.toggle8){
      this.setState({toggle8:newState})
      this.setState({toggle5:!newState})
      this.setState({toggle6:!newState})
      this.setState({toggle7:!newState})
    }
    this.setState({toggle8:newState})
  }
  render() {
      const {toggle1} = this.state;
      const {toggle2} = this.state;
      const {toggle3} = this.state;
      const {toggle4} = this.state;
      const {toggle5} = this.state;
      const {toggle6} = this.state;
      const {toggle7} = this.state;
      const {toggle8} = this.state;
      const buttonBg1 = toggle1?"#A9A9A9":"transparent";
      const buttonBg2 = toggle2?"#A9A9A9":"transparent";
      const buttonBg3 = toggle3?"#A9A9A9":"transparent";
      const buttonBg4 = toggle4?"#A9A9A9":"transparent";
      const buttonBg5 = toggle5?"#A9A9A9":"transparent";
      const buttonBg6 = toggle6?"#A9A9A9":"transparent";
      const buttonBg7 = toggle7?"#A9A9A9":"transparent";
      const buttonBg8 = toggle8?"#A9A9A9":"transparent";
    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>How far will you drive for a pickup?</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
              onPress={()=>this._onPress1()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg1, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>5 min</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress2()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg2, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>10 min</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress3()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg3, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>20 min</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress4()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg4, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Any</Text>
            </TouchableOpacity>
            </View>
        
            <Text style={styles.text}>What's the lowest passenger rating you'll accept?</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
              onPress={()=>this._onPress5()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg5, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>4.5</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress6()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg6, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>4.0</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress7()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg7, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>3.5</Text>
            </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>this._onPress8()}
              style={{margin:10, flex:1, height: 80, backgroundColor: buttonBg8, borderColor: '#9c9c9c', borderWidth: 2, justifyContent: 'center'}}>
              <Text style={styles.touchabletext}>Any</Text>
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
    color:'black', textAlign: 'center', fontSize:30,
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
