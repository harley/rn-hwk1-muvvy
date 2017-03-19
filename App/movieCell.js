import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

class MovieCell extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton(navigator, movie) {
    console.log('pressing');
    navigator.push({index: 1, title: movie.title, movie: movie});
  }

  render() {
    let movie = this.props.movie;
    let image_src = `https://image.tmdb.org/t/p/w342${  movie.poster_path}`;
    
    return (
      <TouchableOpacity onPress={() => this._onPressButton(this.props.navigator, movie)}>
        <View style={styles.movieCell}>
          <View style={{flex: 1}}>           
            <Image 
              indicator={ProgressBar}
              style={styles.movieThumb}
              resizeMode={'contain'}
              source={{uri:image_src}}
            />
          </View>
          <View style={{padding: 10, flex: 3}}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text numberOfLines={5} style={styles.movieOverview}>{movie.overview}</Text>
          </View>
        </View>
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

// MovieCell.propTypes = { movie:React.PropTypes.JSON, navigator: React.PropTypes };

module.exports = MovieCell;
