import {movieData} from './MovieData';
import {genre} from './Genre';
import _ from 'lodash'


function getGenreDesc(genreIds){
    
    let genreDes=[];
    for(let genreId of genreIds){
        genreDes.push(_.find(genre, x => x.id === genreId).name);

    }
  
    return genreDes;
}

export {getGenreDesc}