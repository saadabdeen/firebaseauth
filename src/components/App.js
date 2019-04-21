/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Accordion, Title, Footer } from "native-base";
import firebase from 'firebase';
import Login from './Login';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
    apiKey: "AIzaSyBqFo9u89f745DYE0WGzJ36B--UnC41Q20",
    authDomain: "rnapp-auth.firebaseapp.com",
    databaseURL: "https://rnapp-auth.firebaseio.com",
    projectId: "rnapp-auth",
    storageBucket: "rnapp-auth.appspot.com",
    messagingSenderId: "586897341710"
        })
    }
      render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Login />
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
