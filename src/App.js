import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import  Header  from "./components/common/Header";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
  // Life cycle method to init the firebase
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBqFo9u89f745DYE0WGzJ36B--UnC41Q20",
      authDomain: "rnapp-auth.firebaseapp.com",
      databaseURL: "https://rnapp-auth.firebaseio.com",
      projectId: "rnapp-auth",
      storageBucket: "rnapp-auth.appspot.com",
      messagingSenderId: "586897341710"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
