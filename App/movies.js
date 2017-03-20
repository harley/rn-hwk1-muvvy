import React, { Component } from 'react';
import {
  Text,
  View,
  NetInfo,
  TabBarIOS,
} from 'react-native';

import MoviesTab from './moviesTab.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasInternet: false,
      selectedTab: 'nowPlayingTab',
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
      <MoviesTab url={url} navigator={navigator} currentView={this.props.currentView} />
    );
  }

  render() {
    const topPadding = 64;
    let nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
    let topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';

    return (
      <View style={{marginTop: topPadding, flex: 1}}>
        {this.renderInternetStatus()}
        <TabBarIOS>
          <Icon.TabBarItemIOS
            iconName="film"
            title="Now Showing" renderAsOriginal
            selectedIconColor="green"
            selected={this.state.selectedTab === 'nowPlayingTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'nowPlayingTab',
              });
            }}
          >
            {this._renderContent(nowPlayingUrl, this.props.navigator)}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            iconName="star"
            title="Top Rated" renderAsOriginal
            selectedIconColor="green"
            selected={this.state.selectedTab === 'topRatedTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'topRatedTab',
              });
            }}
          >
            {this._renderContent(topRatedUrl, this.props.navigator)}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
      </View>
    );
  }
}

module.exports = Movies;