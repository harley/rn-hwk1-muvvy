import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

class MovieGridCell extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton(navigator, movie) {
    navigator.push({index: 1, title: movie.title, movie: movie});
  }

  render() {
    let movie = this.props.movie;
    let image_src = `https://image.tmdb.org/t/p/w342${  movie.poster_path}`;
    
    return (
      <TouchableOpacity onPress={() => this._onPressButton(this.props.navigator, movie)}>
        <Image 
          indicator={ProgressBar}
          style={styles.movieThumb}
          resizeMode={'contain'}
          source={{uri:image_src}}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  movieCell: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    height: 150,
    alignItems: 'flex-start',
  },

  movieThumb: {
    height: 150,
    alignItems: 'flex-start',
    flex: 1,
  },

  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  movieOverview: {
    fontSize: 12,
  },
});

module.exports = MovieGridCell;