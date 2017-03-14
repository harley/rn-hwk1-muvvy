import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import Movie from './movie.js';

class Movies extends Component {

  constructor() {
   super();
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
     dataSource: ds.cloneWithRows([]),
   };
  }

  componentDidMount() {
      this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.results)
        })
        return responseJson.results;
      })
      .catch((error) => {
        console.error(error);
      });
    }

  renderRowData(rowData) {
    return (
      <Movie movie={rowData} />
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRowData}
      />
    );
 }
}

module.exports = Movies
