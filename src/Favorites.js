import {API, MODAL_CONTENT, MODAL_WINDOW, PRODUCTS_LIST, STORE} from './consts';
import {getProductCardTemplate} from './templates';
import {LOADED_PRODUCTS} from './utils';

export class Favorites {
	
	constructor() {
		this.cachedFavorites = STORE.getFavorites();
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
		STORE.saveFavorite(id);
		this.cachedFavorites = STORE.getFavorites();
		PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		if (MODAL_WINDOW.children.length !== 0) {
			this.renderFavoritesProducts(STORE.getFavorites());
		}
	}
	
	removeFromFavorites(id) {
		STORE.removeFromFavorites(id);
		PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		if (MODAL_WINDOW.children.length !== 0) {
			this.renderFavoritesProducts(this.cachedFavorites);
		}
	}
}