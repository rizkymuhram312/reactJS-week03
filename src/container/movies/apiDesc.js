import { useParams } from 'react-router-dom'
import {movieData} from './MovieData'

const MovieDescription = () => {
    let {id} = useParams()
    console.log(id)
    let movieDesc = movieData.find(x => x.id == id)
    console.log(movieDesc.title)
    return(
        <div>
            <h3>{movieDesc.title}</h3>
            <img src={'../images/'+movieDesc.poster_path}></img>
            <p>{movieDesc.overview}</p>
        </div>
    )
}

export {MovieDescription}