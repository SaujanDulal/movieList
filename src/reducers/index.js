import { combineReducers } from 'redux';

const moviesReducer = () => {
	return [
		{ title: 'Spider-man:Homecoming', releaseDate: '02-02-03', rating: 7.4 },
		{ title: 'Aquaman', releaseDate: '02-02-03', rating: 7.4 },
		{ title: 'BalckPanther', releaseDate: '02-02-03', rating: 7.4 },
		{ title: 'Avengers:Infinity wars', releaseDate: '02-02-03', rating: 7.4 },
		{ title: 'Guardian of Galaxy', releaseDate: '02-02-03', rating: 7.4 }
	];
};

// keep track of whatever movie is selected
const selectedMovieReducer = (state = null, action) => {
	switch (action.type) {
		case 'MOVIE_SELECTED':
			return action.payload;
		default:
			return state;
	}
};

// taking peices of state and combining them into one state

export default combineReducers({
	movie: moviesReducer,
	selectedMovie: selectedMovieReducer
});
