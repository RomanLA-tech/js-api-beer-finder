import {getProductCardTemplate} from './templates';
import {NO_PRODUCTS_MESSAGE, PRODUCTS_LIST_ELEMENT} from './consts';

export class ProductsList {
	
	renderProductList(products) {
		PRODUCTS_LIST_ELEMENT.innerHTML = '';
		if (products.length === 0) {
			PRODUCTS_LIST_ELEMENT.innerHTML = `<h2>${NO_PRODUCTS_MESSAGE}</h2>`;
		}
		else {
			products.forEach(product => {
				this.#renderSingleProduct(product);
			});
		}
	}
	
	#renderSingleProduct(product) {
		const productTemplate = getProductCardTemplate(product);
		PRODUCTS_LIST_ELEMENT.prepend(productTemplate);
	}
}