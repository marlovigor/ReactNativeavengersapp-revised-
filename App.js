import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity} from 'react-native';





export default class App extends Component{
  render() {
    return (
      // <ImageBackground source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/usa_avengers_sb_bkgd8_1024_0ae5b001.jpeg?region=0%2C0%2C1024%2C576'}} style={{width: '100%', height: '100%',}}>
      <ImageBackground source={require('/Users/marlo/theavengers2/components/img/Avengers-Tower-dark_2015-05-10_web-537x900.jpg')} style={{width: '100%', height: '100%',}}>
      <TouchableOpacity style={panther}>
   <Image source={require('/Users/marlo/theavengers2/components/characters/Usa_avengers_herochi_blackpanther_r_e1954416.png')}
   style={{width: 200, height:310,}} />
    </TouchableOpacity>

      </ImageBackground>
   
    );
  }
}


const panther = {
  width: 180,
    height: 250,
    bottom: -250,
    // zIndex: 50,

}