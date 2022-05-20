import React from "react";
import {checkResponse, json} from './utils';

class Movie extends React.Component {
    constructor(props) {
        super();
        this.state = {
            movie: null,
            error: '',
        }      
    }

    componentDidMount() {
       fetch(`https://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=cb585ed6`)
       .then(checkResponse)
       .then(json)
       .then(data =>{
           if(data.Response === 'False') {
               throw new Error('Error is either 404 or 500');
           }

           if(data.Response === "True") {
               console.log(data);
               this.setState({movie: data, error: ''});
           }
       }).catch(error => {
           this.setState({error: error.message});
           console.log(error);
       })
    }

    render() {
        if(!this.state.movie) {
            return null;
        }

        const {Title, Year, Plot, Director, imdbRating, Poster, Rated, Genre, Actors, Country, Awards, Website, BoxOffice} = this.state.movie;

        return(
            <div className="container">
                <div className="row">
                    <div id="movieColumn" className="col-12">
                        <h2>{Title}</h2>
                        <ul className="list-unstyled">
                            <li>
                                <p>Year: {Year}</p>
                            </li>
                            <li>
                                <p>Starring: {Actors}</p>
                            </li>
                            <li>
                                <p>Directed by: {Director}</p>
                            </li>
                            <li>
                                <p>Genre: {Genre}</p>
                            </li>
                            <li>
                                <p>RATED: {Rated}</p>
                            </li>
                            <li>
                                <p>PLOT: {Plot}</p>
                            </li>
                            <li>
                                <p>Country: {Country}</p>
                            </li>
                            <li>
                                <p>Box Office: {BoxOffice}</p>
                            </li>
                            <li>
                                <p>Awards: {Awards}</p>
                            </li>
                            <li>
                                <p>Imdb Rating: {imdbRating}</p>
                            </li>
                            <li>
                                <p>Website: {Website}</p>
                            </li>
                        </ul>
                        <div className="col-6">
                            <img src={Poster} className="img-fluid" alt="Movie Poster"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;