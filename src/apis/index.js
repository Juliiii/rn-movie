class Api {
	get({url, params}) {
		if (typeof params === 'object' && !(params instanceof Array)) {
			url = `${url}?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}`;
		} else {
			throw new Error('apis/index.js:2 :params should be an object');
		}
		return fetch(url);
	}

	post({url, body}) {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'				
			},
			body: JSON.stringify(body)
		});
	}
}

export default new Api();