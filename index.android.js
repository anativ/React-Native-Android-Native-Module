/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MyImageView = require("./MyImageView");


class AndroidTest extends Component {
  render() {


    return (
      <View style={styles.container}>
        <MyImageView style={{height:100,width:100}} src="https://facebook.github.io/react/img/logo_og.png" resizeMode="stretch"/>

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

AppRegistry.registerComponent('AndroidTest', () => AndroidTest);
