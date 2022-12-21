import {getLoadMoreButton, getNoItemLeftMessage, getRecentlySearchedItem} from './templates';
import {
	API, PRODUCTS_LIST, PRODUCTS_LIST_ELEMENT, RECENTLY_SEARCHED_LIST_ELEMENT, SEARCH_INPUT, STORE, TO_TOP_BTN
} from './consts';

let CURRENT_PAGE = 1;

export async function getProducts() {
	STORE.clearLoadedProducts();
	CURRENT_PAGE = 1;
	const query = SEARCH_INPUT.value;
	const products = API.getProductByQuery({query});
	await products.then(items => {
		STORE.saveLoadedProducts(items);
		PRODUCTS_LIST.renderProductList(STORE.getLoadedProducts());
		PRODUCTS_LIST_ELEMENT.scrollIntoView();
		STORE.saveRecentlySearched(query);
		renderRecentlySearchedList(STORE.getRecentlySearched());
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
		if (res.length < 10) {
			STORE.saveLoadedProducts(...res);
			PRODUCTS_LIST.renderProductList(STORE.getLoadedProducts());
			PRODUCTS_LIST_ELEMENT.removeChild(PRODUCTS_LIST_ELEMENT.lastChild);
			PRODUCTS_LIST_ELEMENT.append(getNoItemLeftMessage());
		}
		else {
			STORE.saveLoadedProducts(...res);
			PRODUCTS_LIST.renderProductList(STORE.getLoadedProducts());
		}
	});
}

export function scrollHandler() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		TO_TOP_BTN.style.display = 'block';
	}
	else {
		TO_TOP_BTN.style.display = 'none';
	}
}

export function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

export function renderRecentlySearchedList(items) {
	if (RECENTLY_SEARCHED_LIST_ELEMENT.children.length > 0) {
		RECENTLY_SEARCHED_LIST_ELEMENT.removeChild(RECENTLY_SEARCHED_LIST_ELEMENT.lastChild);
	}
	const recentlyList = document.createElement('div');
	const recentlyListTitle = document.createElement('h4');
	
	recentlyListTitle.innerText = 'Recent searches';
	recentlyList.append(recentlyListTitle);
	
	RECENTLY_SEARCHED_LIST_ELEMENT.append(recentlyList);
	items.forEach((item) => {
		recentlyList.append(getRecentlySearchedItem(item));
	});
}
