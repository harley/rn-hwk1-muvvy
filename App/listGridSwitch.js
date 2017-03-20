import React, {Component} from 'react';
import {
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListGridSwitch extends Component {
  constructor(props) {
    super(props);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Icon name={this.props.mode} size={32} ref={c => this._root = c} />
    );
  }
}