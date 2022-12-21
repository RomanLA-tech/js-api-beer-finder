import {getSingleProductCardTemplate} from './templates';
import {API, MODAL, MODAL_CONTENT} from './consts';

export class Product {
	
	renderSingleProduct(productId) {
		API.getSingleProductById(productId).then((products) => {
			const productTemplate = getSingleProductCardTemplate(products[0]);
			MODAL_CONTENT.append(productTemplate);
		});
	}
	
	openProductModal(productId) {
		MODAL_CONTENT.innerHTML = '';
		MODAL.openModal();
		this.renderSingleProduct(productId);
	}
}
