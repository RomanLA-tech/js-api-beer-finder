import {API, FAVORITES_LIST, MODAL_CONTENT} from './consts';
import {getProductCardTemplate} from './templates';

export class Favorites {
	
	renderFavoritesProducts() {
		MODAL_CONTENT.innerHTML = '';
		if (Array.from(FAVORITES_LIST).length === 0) {
			MODAL_CONTENT.innerHTML = `<h2 class='no-items-message'>No favorites products</h2>`;
		}
		else {
			API.getProductsByIds().then((products) => {
				products.forEach(product => {
					this.#renderSingleProduct(product);
				});
			});
		}
	}
	
	#renderSingleProduct(product) {
		const productTemplate = getProductCardTemplate(product);
		MODAL_CONTENT.append(productTemplate);
	}
}