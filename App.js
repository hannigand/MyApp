/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: ""
  };
  isPalindrome = str =>
    str
      .toLowerCase()
      .split("")
      .reverse()
      .join("") === str.toLowerCase();
  onChangeText = value => {
    this.setState({ value });
  };
  onPress = () => {
    alert(this.isPalindrome(this.state.value));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} testID="title">
          Is this word a Palindrome?
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.value}
          onChangeText={this.onChangeText}
          testID="input"
        />
        <Button
          style={styles.button}
          title="Go"
          testID="button"
          onPress={this.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textInput: {
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10
  }
});
