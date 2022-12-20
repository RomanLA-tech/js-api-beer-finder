import {
	API, LOADED_PRODUCTS, PRODUCTS_LIST, PRODUCTS_LIST_ELEMENT, SEARCH_INPUT, TO_TOP_BTN
} from './consts';
import {getLoadMoreButton, getNoItemLeftMessage} from './templates';


let CURRENT_PAGE = 1;

export async function getProducts() {
	LOADED_PRODUCTS.length = 0;
	CURRENT_PAGE = 1;
	const query = SEARCH_INPUT.value;
	const products = API.getProductByQuery({query});
	await products.then(items => {
		LOADED_PRODUCTS.push(...items);
		PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		PRODUCTS_LIST_ELEMENT.scrollIntoView();
	});
}

export function appendLoadMoreBtn() {
	PRODUCTS_LIST_ELEMENT.append(getLoadMoreButton());
	const loadMoreBtn = document.getElementById('load-more-btn');
	loadMoreBtn.addEventListener('click', loadMoreProducts);
}

async function loadMoreProducts() {
	const query = SEARCH_INPUT.value;
	let page = ++CURRENT_PAGE;
	await API.getProductByQuery({query, page}).then((res) => {
		if (res.length === 0) {
			PRODUCTS_LIST_ELEMENT.removeChild(PRODUCTS_LIST_ELEMENT.lastChild);
			PRODUCTS_LIST_ELEMENT.append(getNoItemLeftMessage());
		}
		else {
			LOADED_PRODUCTS.push(...res);
			PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		}
	});
}

export function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		TO_TOP_BTN.style.display = 'block';
	}
	else {
		TO_TOP_BTN.style.display = 'none';
	}
}

export function toTopFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}