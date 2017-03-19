import React, { Component } from 'react';
import {
  Navigator,
  Button,
} from 'react-native';

import Movies from './movies.js';
import MovieDetail from './movieDetail.js';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasInternet: true,
    };
  }


  navigatorRenderScene(route, navigator) {
    switch(route.index) {
      case 0:
        return (<Movies navigator={navigator} title={route.title} />);
      case 1:
        return (<MovieDetail navigator={navigator} title={route.title} movie={route.movie} />);
    }
  }

  render() {
    const routes = [
      {title: 'Movies', index: 0},
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
              if (route.index==0) { return null; }
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