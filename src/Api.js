import {BASE_URL} from './consts';

export class Api {
	
	getProductByQuery({query, page = 1, pageSize = 9}) {
		try {
			return fetch(this.#getRequestString({page, query, pageSize}))
				.then((response) => {
					return response.json();
				});
		} catch (e) {
			return e.message; //Some Comment 
		}
	}
	
	#getRequestString({page, pageSize, query}) {
		return `${BASE_URL}?page=${page}&per_page=${pageSize}&beer_name=${query}`;
	}
}
