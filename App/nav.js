import React, { Component } from 'react';
import {
  Navigator,
  Button,
  TouchableOpacity,
} from 'react-native';

import Movies from './movies.js';
import MovieDetail from './movieDetail.js';
import ListGridSwitch from './listGridSwitch.js';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasInternet: true,
      currentView: 'list',
    };
  }

  navigatorRenderScene(route, navigator) {
    switch(route.index) {
      case 0:
        return (<Movies navigator={navigator} title={route.title} currentView={route.currentView} />);
      case 1:
        return (<MovieDetail navigator={navigator} title={route.title} movie={route.movie} />);
    }
  }

  _switchViewMode = (route) => {
    if (this.state.currentView == 'list') {
      this.setState({currentView: 'grid'});
      route.currentView = 'grid';
    } else {
      this.setState({currentView: 'list'});
      route.currentView = 'list';
    }
  }

  _getNextViewIcon = () => {
    if (this.state.currentView == 'list') {
      return 'windows';
    } else {
      return 'list';
    }
  }

  render() {
    const routes = [
      {title: 'Movies', index: 0, currentView: 'list'},
      {title: 'Detail', index: 1},
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.navigatorRenderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={{backgroundColor: 'gray'}}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.index==0) { 
                  return (
                    <TouchableOpacity onPress={() => this._switchViewMode(route)} style={{flex: 1, padding: 7}}>
                      <ListGridSwitch mode={this._getNextViewIcon()} />
                    </TouchableOpacity>
                  );
                }
                return (
                  <Button onPress={() => navigator.pop()} title="Back" color="#ccc" />
                );},
              RightButton: () => null,
              Title: (route, navigator, index, navState) => { return (<Button onPress={()=>null} title={route.title} color="#ccc" />); },
            }}
          />
        }
      />
    );
  }
}