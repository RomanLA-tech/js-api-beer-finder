import {BASE_URL, FAVORITES_LIST} from './consts';

export class Api {
	
	getProductByQuery({query, page = 1, pageSize = 9}) {
		try {
			return fetch(this.#getRequestString({page, query, pageSize}))
				.then((response) => {
					return response.json();
				});
		} catch (e) {
			alert(e.message);
		}
	}
	
	#getRequestString({page, pageSize, query}) {
		return `${BASE_URL}?page=${page}&per_page=${pageSize}&beer_name=${query}`;
	}
	
	getProductsByIds() {
		const ids = this.#getFavoritesIdsString();
		try {
			return fetch(`${BASE_URL}${ids}`).then((response) => {
				return response.json();
			});
		} catch (e) {
			alert(e.message);
		}
	}
	
	#getFavoritesIdsString() {
		return Array.from(FAVORITES_LIST).reduce((acc, cur) => acc + `${cur}|`, '?ids=');
	}
}
