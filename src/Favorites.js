import {API, FAVORITES_LIST, MODAL_CONTENT, MODAL_WINDOW, PRODUCTS_LIST} from './consts';
import {getProductCardTemplate} from './templates';
import {LOADED_PRODUCTS} from './utils';

export class Favorites {
	
	constructor(FAVORITES_LIST) {
		this.cachedFavorites = Array.from(FAVORITES_LIST);
	}
	
	renderFavoritesProducts() {
		MODAL_CONTENT.innerHTML = '';
		
		if (this.cachedFavorites.length === 0) {
			MODAL_CONTENT.innerHTML = `<h2 class='no-items-message'>No favorites products</h2>`;
		}
		else {
			API.getProductsByIds(this.cachedFavorites).then((product) => {
				product.forEach(product => {
					this.#renderSingleProduct(product);
				});
			});
		}
	}
	
	#renderSingleProduct(product) {
		const productTemplate = getProductCardTemplate(product);
		MODAL_CONTENT.append(productTemplate);
	}
	
	addToFavorites(id) {
		FAVORITES_LIST.add(id);
		this.cachedFavorites = Array.from(FAVORITES_LIST);
		PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		if (MODAL_WINDOW.children.length !== 0) {
			this.renderFavoritesProducts(Array.from(FAVORITES_LIST));
		}
	}
	
	removeFromFavorites(id) {
		FAVORITES_LIST.delete(id);
		PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		if (MODAL_WINDOW.children.length !== 0) {
			this.renderFavoritesProducts(this.cachedFavorites);
		}
	}
}