import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: this.props.movie.title,
      movieOverview: this.props.movie.overview,
      image_src: "https://image.tmdb.org/t/p/w342" + this.props.movie.poster_path
    }
  }

  render() {
    return (
      <View style={styles.movieCell}>
        <View style={{width: 100}}>
          <Image resizeMode="contain" style={styles.movieThumb} source={{uri: this.state.image_src}} />
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.movieTitle}>{this.state.movieTitle}</Text>
          <Text style={styles.movieOverview}>{this.state.movieOverview}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  movieCell: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    height: 150,
  },

  movieThumb: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  movieOverview: {
    fontSize: 12,
  }
})

module.exports = Movie
