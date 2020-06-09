/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  constructor(prop){
    super();
    this.state={
      uri: require("./src/images/dice1.png"),
      currentValue: this.getRandomValue()
    };
  }

  getRandomValue=() =>{
    return Math.floor(Math.random() * 6) + 1;
  }
  playButtonPressed = () =>{
    var rNumber = this.getRandomValue();
    this.setState({currentValue:rNumber})
    switch (rNumber) {
      case 1:
         this.setState({uri: require("./src/images/dice1.png")});
        break;
      case 2:
         this.setState({uri: require("./src/images/dice2.png")});
        break;
      case 3:
         this.setState({uri: require("./src/images/dice3.png")});
        break;
      case 4:
         this.setState({uri: require("./src/images/dice4.png")});
        break;
      case 5:
         this.setState({uri: require("./src/images/dice5.png")});
        break;
      case 6:
         this.setState({uri: require("./src/images/dice6.png")});
        break;
      default:
        this.setState({uri: require("./src/images/dice1.png")});
        break;
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.messagetext}>Click the button to throw the dice</Text>
        <Image source={this.state.uri}
        />
        <TouchableOpacity
         onPress={this.playButtonPressed}
        >
        <Text style={styles.gamebutton}>Throw Dice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center",
  },
  gamebutton: {
    marginTop: 35,
    fontSize: 20,
    color:"#FFFFFF",
    fontWeight:"bold",
    borderWidth:2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius: 5,
    borderColor: "#FFFFFF"
  },
  messagetext: {
    marginTop: 5,
    fontSize: 25,
    color:"#FFFFFF"
  },
});

