import React, {Component} from 'react'
import Movie from './Movie'
import {movieData} from './MovieData'
import './Movies.css'
import {getGenreDesc} from './apiGenre'

export default class Movies extends Component {
    render() {
        const gallery = movieData.map((movie) => {
            let genres = getGenreDesc(movie.genre_ids);
            return (
                <Movie
                    title={movie.title}
                    poster={movie.poster_path}
                    date={movie.release_date}
                    rating={movie.vote_average}
                    hd={movie.video}
                    adult={movie.adult}
                    genre={genres.join(',')}
                />
            );
        });
        return <div className="movies">{gallery}</div>
    }
    
}