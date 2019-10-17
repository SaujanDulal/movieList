import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const MovieList = (props) => {
	// console.log(props);
	const movieList = props.movies.map((movie) => {
		return (
			<div key={movie.title}>
				<span>{movie.title}</span>
				<button onClick={() => props.selectMovie(movie)}>details</button>
			</div>
		);
	});
	return (
		<div className='list-container'>
			<h2>Movie List</h2>
			<ul>{movieList}</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movies: state.movie
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectMovie: (movie) => dispatch(selectMovie(movie))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
