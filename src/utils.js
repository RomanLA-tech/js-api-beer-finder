import {
	API,
	PRODUCTS_LIST,
	PRODUCTS_LIST_ELEMENT,
	RECENT_SEARCHES_LIST,
	RECENTLY_SEARCHED_LIST_ELEMENT,
	SEARCH_INPUT,
	TO_TOP_BTN
} from './consts';
import {getLoadMoreButton, getNoItemLeftMessage, getRecentlySearchedItem} from './templates';


let CURRENT_PAGE = 1;
export let LOADED_PRODUCTS = [];

export async function getProducts() {
	LOADED_PRODUCTS.length = 0;
	CURRENT_PAGE = 1;
	const query = SEARCH_INPUT.value;
	const products = API.getProductByQuery({query});
	await products.then(items => {
		LOADED_PRODUCTS = [...items];
		PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
		PRODUCTS_LIST_ELEMENT.scrollIntoView();
		RECENT_SEARCHES_LIST.add(query);
		renderRecentlySearchedList(RECENT_SEARCHES_LIST);
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
			LOADED_PRODUCTS = [...LOADED_PRODUCTS, ...res];
			PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
			PRODUCTS_LIST_ELEMENT.removeChild(PRODUCTS_LIST_ELEMENT.lastChild);
			PRODUCTS_LIST_ELEMENT.append(getNoItemLeftMessage());
		}
		else {
			LOADED_PRODUCTS = [...LOADED_PRODUCTS, ...res];
			PRODUCTS_LIST.renderProductList(LOADED_PRODUCTS);
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
	Array.from(items).forEach((item) => {
		recentlyList.append(getRecentlySearchedItem(item));
	});
}
