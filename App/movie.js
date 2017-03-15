import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

class Movie extends Component {
  constructor(props) {
    super(props);

    // console.log("movie props", this.props.navigator);

    this.state = {
      movieTitle: this.props.movie.title,
      movieOverview: this.props.movie.overview,
      image_src: "https://image.tmdb.org/t/p/w342" + this.props.movie.poster_path
    }
  }

  _onPressButton(navigator, movie) {
    console.log("pressing");
    navigator.push({index: 1, title: movie.title, movie: movie})
  }

  render() {
    return (
      <TouchableOpacity route={this.props.route} onPress={() => this._onPressButton(this.props.navigator, this.props.movie)}>
        <View style={styles.movieCell}>
          <View style={{flex: 1}}>
            <Image style={styles.movieThumb} source={{uri: this.state.image_src}} />
          </View>
          <View style={{padding: 10, flex: 3}}>
            <Text numberOfLines={3} style={styles.movieTitle}>{this.state.movieTitle}</Text>
            <Text style={styles.movieOverview}>{this.state.movieOverview}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    height: 150
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
