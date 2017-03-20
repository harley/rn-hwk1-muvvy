import React, { Component } from 'react';
import {
  ListView,
  RefreshControl,
} from 'react-native';

import GridView from 'react-native-easy-gridview';
import MovieCell from './movieCell.js';
import MovieGridCell from './movieGridCell.js';

class MoviesTab extends Component {
  constructor(props) {
    super(props);
    console.log('current view in MoviesTab', this.props.currentView);
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
    if (this.props.currentView == 'list') {
      return (
        <MovieCell movie={rowData} navigator={navigator} />
      );
    } else {
      return (
        <MovieGridCell movie={rowData} navigator={navigator} />
      );
    }
  }

  render() {
    if (this.props.currentView == 'list') {
      return (
        <ListView
          enableEmptySections={true}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
          contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
          dataSource={this.state.dataSource} renderRow={(rowData) => this.renderRowData(rowData, this.props.navigator)}
        />
      );
    } else {
      return (
        <GridView
          numberOfItemsPerRow={2}
          enableEmptySections={true}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
          contentInset={{top: 0, left: 0, bottom: 0, right: 0}}
          dataSource={this.state.dataSource} renderRow={(rowData) => this.renderRowData(rowData, this.props.navigator)}
        />
      );
    }
  }
}

module.exports = MoviesTab;