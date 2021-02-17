import {movieData} from './MovieData';
import {genre} from './Genre';
import _ from 'lodash'


function getGenreDesc(movieId){
    let genreIds = _.find(movieData, x => x.id === movieId).genre_ids;

    let genreDes=[];
    for(let genreId of genreIds){
        genreDes.push(_.find(genre, x => x.id === genreId).name);

    }
    console.log('genres : '+ genreDes);
    return genreDes;
}

export {getGenreDesc}