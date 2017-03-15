import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  Platform
} from 'react-native';

import Movie from './movie.js';

class Movies extends Component {

  constructor(props) {
   super(props);

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

  renderRowData(rowData, navigator) {
    return (
      <Movie movie={rowData} navigator={navigator}/>
    )
  }

  render() {
    return (
        <ListView 
          contentInset={{top: (Platform.OS !== 'ios' ? 54 : 64), left: 0, bottom: 0, right: 0}}
          contentOffset={{x: 0, y: -(Platform.OS !== 'ios' ? 54 : 64)}}
          navigator={this.props.navigator} dataSource={this.state.dataSource} renderRow={(rowData) => this.renderRowData(rowData, this.props.navigator)} />
    );
  }
}

module.exports = Movies
