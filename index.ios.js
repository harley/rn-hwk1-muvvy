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
  View
} from 'react-native';


import Movies from './App/movies.js';

export default class hwk1 extends Component {
  render() {
    return (
      <Movies />
    );
  }
}

AppRegistry.registerComponent('hwk1', () => hwk1);
