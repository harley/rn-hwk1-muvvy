import React, { Component } from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;

        let imageSrc = "https://image.tmdb.org/t/p/w342" + movie.poster_path;
        let source = {uri: imageSrc}

        return (
            <Image style={styles.backgroundImage} source={source}>
                <View style={styles.textContainer}>
                    <Text style={styles.movieTitle}>{movie.title}</Text>
                    <Text style={styles.movieOverview}>{movie.overview}</Text>
                </View>
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 100,
    },
    backgroundImage: {
        flex : 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    movieTitle: {
        color: '#ccc',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16
    },

    movieOverview: {
        fontSize: 12,
        color: '#ddd',
    }

})