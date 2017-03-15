import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native'

class Movie extends Component {
  constructor(props) {
    super(props);

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
    let movie = this.props.movie;
    let image_src = "https://image.tmdb.org/t/p/w342" + movie.poster_path;
    
    return (
      <TouchableOpacity route={this.props.route} onPress={() => this._onPressButton(this.props.navigator, movie)}>
        <View style={styles.movieCell}>
          <View style={{flex: 1}}>           
            <Image 
              style={styles.movieThumb}
              resizeMode={"contain"}
              source={{uri:image_src}}
            />
          </View>
          <View style={{padding: 10, flex: 3}}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text numberOfLines={5} style={styles.movieOverview}>{movie.overview}</Text>
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
