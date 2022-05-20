import React from 'react';
import { Link } from 'react-router-dom';
import { json, checkResponse } from './utils';
import './App.css';

const Movie = props => {
    const {Title, Year, imdbID, Type, Poster} = props.movie;
    
    return (
        <div className="row">
            <div className="d-flex justify-content-center col-12 col-sm-6">
                <Link to={`/movie/${imdbID}`}>
                    <img src={Poster} className="img-fluid" alt='poster'/>
                </Link>
            </div>

            <div className="d-flex justify-content-center col-12 col-8 col-md-10 col-lg-11 mb-3">
                <Link to={`/movie/${imdbID}/`}>
                    <h3>{Title}</h3>
                    <p>Type: {Type} | Year: {Year}</p>
                </Link>
            </div>
            <hr />
        </div>
    )
}

class MovieFinder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            results: [],
            error: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value});
    };

    submitHandle(event) {
        event.preventDefault();
        let {searchTerm} = this.state;
        searchTerm = searchTerm.trim();
        if(!searchTerm) {
            // to check if the searchTerm on the state is empty, if its empty this condition will trigger and will have an early return.
            return;
        }

        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=cb585ed6`)
        .then(checkResponse).then(json).then(data => {
            console.log(data);
            if(data.Response === "False") {
                throw new Error(data.Error);
            }
            if(data.Response === 'True' && data.Search) {
                this.setState({results: data.Search, error: "",});
            }
        }).catch(error => {
            this.setState({error: error.message})
            console.log(error);
        })
    };

    render() {
        const {searchTerm, results, error} = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mx-auto" style={{width: '200px'}}>
                            
                            <form className="my-4" onSubmit={this.submitHandle}>
                                        
                                    <input className="form-control mr-sm-2" placeholder="Movie Title" type="text" value={searchTerm} onChange={this.handleChange} />
                                    <button type="submit" className="btn btn-primary">Search Movie</button>
                            </form>
                        
                        </div>
                            {( () => {
                                if(error) {
                                    return error;
                                }

                                return results.map(movie => {
                                    return <Movie key={movie.imdbID} movie={movie}/>
                                })
                            }

                            ) ()}

                        </div>
                </div>
            </div>
        )
    }
}

export default MovieFinder;