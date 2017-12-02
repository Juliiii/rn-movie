import api from './index';

class Movies {
	HotPlayMovieUrl = 'https://api-m.mtime.cn/Showtime/LocationMovies.api';
	ComingNewMovieUrl = 'https://api-m.mtime.cn/Movie/MovieComingNew.api';

	getHotPlayMovies ({locationId}) {
		return api.get({url: this.HotPlayMovieUrl, params: {locationId}}).then(data => data.json());
	}

	getComingNewMovies ({locationId}) {
		return api.get({url: this.ComingNewMovieUrl, params: {locationId}});
	}
}

export default new Movies();
