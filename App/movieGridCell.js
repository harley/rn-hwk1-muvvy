import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
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
          style={styles.backgroundImage}
          source={{uri:image_src}}
        >
          <View style={styles.movieGridCell}>
            <Text style={styles.gridCellTitle}>{movie.title}</Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex : 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  movieGridCell: {
    height: (width * 3 / 4),
  },

  gridCellTitle: {
    color: 'rgba(255, 255, 255, 0.3)',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

module.exports = MovieGridCell;