/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


import Nav from './App/nav.js';

export default class hwk1 extends Component {
  render() {
    return (
      <Nav />
    );
  }
}

AppRegistry.registerComponent('hwk1', () => hwk1);
