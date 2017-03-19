import React, { Component } from 'react';
import {
  ListView,
  RefreshControl,
} from 'react-native';

import MovieCell from './movieCell.js';

class MoviesTab extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchData(this.props.url);
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData(this.props.url).then(() => this.setState({refreshing: false}));
  }

  fetchData(url) {
    console.log('fetching data from', url);
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      let results = responseJson.results;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(results),
      });
      console.log('# of results: ', results.length);
      return results;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderRowData(rowData, navigator) {
    return (
      <MovieCell movie={rowData} navigator={navigator}/>
    );
  }

  render() {
    return (
    <ListView
      enableEmptySections={true}
      refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
      contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
      dataSource={this.state.dataSource} renderRow={(rowData) => this.renderRowData(rowData, this.props.navigator)}
    />
    );
  }
}

module.exports = MoviesTab;