import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {
	// console.log(props);
	return (
		<div>
			{!props.selectedMovie ? (
				<div>
					<h2>Movie</h2>
					<p>SelectMovie</p>
				</div>
			) : (
				<div>
					<h2>Movie</h2>
					<p>Title:{props.selectedMovie.title}</p>
					<p>ReleaseDate:{props.selectedMovie.releaseDate}</p>
					<p>Rating:{props.selectedMovie.rating}</p>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		selectedMovie: state.selectedMovie
	};
};

export default connect(mapStateToProps)(MovieDetails);
