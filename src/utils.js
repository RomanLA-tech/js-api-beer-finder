import {API, PRODUCTS_LIST, PRODUCTS_LIST_ELEMENT, SEARCH_FORM, SEARCH_INPUT} from './consts';


export async function getProducts() {
	const query = SEARCH_INPUT.value;
	const products = API.getProductByQuery({query});
	await products.then(items => {
		PRODUCTS_LIST.renderProductList(items);
		PRODUCTS_LIST_ELEMENT.scrollIntoView();
		SEARCH_FORM.reset();
	});
	
}
