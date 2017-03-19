import React, { Component } from 'react';
import {
  Text,
  View,
  NetInfo,
  TabBarIOS,
} from 'react-native';

import MoviesTab from './moviesTab.js';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasInternet: false,
      selectedTab: 'nowPlayingTab'
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', (hasInternetConnection) => {
      console.log('change noticed', hasInternetConnection);
      this.setState({ hasInternet: hasInternetConnection });
      console.debug('hasInternetConnection:', hasInternetConnection);
    });
  }

  renderInternetStatus() {
    if (this.state.hasInternet) { return null; }

    return (
      <Text style={{backgroundColor: '#333', color: '#eee', fontSize: 16, textAlign: 'center', padding: 10}}>No Internet Connection</Text>
    );
  }

  _renderContent(url, navigator) {
    return (
    <MoviesTab url={url} navigator={navigator} />
    );
  }

  render() {
    const topPadding = 64;
    let nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
    let topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';

    return (
      <View style={{marginTop: topPadding, flex: 1}}>
        {this.renderInternetStatus()}
        <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          unselectedItemTintColor="red"
          barTintColor="darkslateblue"
        >
          <TabBarIOS.Item
            title="Now Showing" icon={require('./movies.png')} renderAsOriginal
            selected={this.state.selectedTab === 'nowPlayingTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'nowPlayingTab',
              });
            }}
          >
            {this._renderContent(nowPlayingUrl, this.props.navigator)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Top Rated" systemIcon="featured"
            selected={this.state.selectedTab === 'topRatedTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'topRatedTab',
              });
            }}
          >
            {this._renderContent(topRatedUrl, this.props.navigator)}
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

module.exports = Movies;