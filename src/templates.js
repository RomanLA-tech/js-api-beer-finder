import {API, PRODUCT, PRODUCTS_LIST, SEARCH_INPUT, STORE} from './consts';
import {Favorites} from './Favorites';

export function getProductCardTemplate(product) {
	const addToFavoriteBtn = getAddToFavoriteBtn(product.id);
	
	const productCard = document.createElement('article');
	productCard.classList.add('product__container');
	productCard.dataset.id = product.id;
	
	const cardTitle = document.createElement('h3');
	cardTitle.classList.add('product-card__title');
	cardTitle.innerText = product.name;
	cardTitle.addEventListener('click', () => {
		PRODUCT.openProductModal(product.id);
	});
	
	const cardImage = document.createElement('img');
	cardImage.classList.add('product-card__image');
	cardImage.src = product.image_url;
	
	const cardDescription = document.createElement('p');
	cardDescription.classList.add('product_card__description');
	cardDescription.innerText = product.description;
	
	productCard.append(cardTitle, cardImage, addToFavoriteBtn, cardDescription);
	
	return productCard;
}

export function getLoadMoreButton() {
	const loadMoreBtn = document.createElement('button');
	loadMoreBtn.classList.add('load-more-btn');
	loadMoreBtn.innerText = 'load more';
	loadMoreBtn.id = 'load-more-btn';
	
	return loadMoreBtn;
}

export function getNoItemLeftMessage() {
	const noItemsLeftMessage = document.createElement('h3');
	noItemsLeftMessage.classList.add('no-items-left-message');
	noItemsLeftMessage.innerText = 'No items left';
	
	return noItemsLeftMessage;
}

export function getRecentlySearchedItem(value) {
	const element = document.createElement('button');
	element.classList.add('recently-searched-btn');
	element.innerText = value;
	element.addEventListener('click', () => {
		API.getProductByQuery({query: value}).then((res) => {
			SEARCH_INPUT.value = value;
			PRODUCTS_LIST.renderProductList(res);
		});
	});
	
	return element;
}

export function getSingleProductCardTemplate(product) {
	const addToFavoriteBtn = getAddToFavoriteBtn(product.id);
	
	const card = document.createElement('div');
	card.classList.add('card__container');
	
	const cardTitle = document.createElement('h3');
	cardTitle.classList.add('card__title');
	cardTitle.innerText = product.name;
	
	
	const cardImage = document.createElement('img');
	cardImage.classList.add('card__image');
	cardImage.src = product.image_url;
	
	const cardDescription = document.createElement('p');
	cardDescription.classList.add('card__description');
	cardDescription.innerText = product.description;
	
	card.append(cardTitle, cardImage, addToFavoriteBtn, cardDescription);
	
	return card;
}

function getAddToFavoriteBtn(id) {
	const addToFavoriteBtn = document.createElement('button');
	addToFavoriteBtn.classList.add('product-card__add-to-favorites-btn');
	if (STORE.getFavorites().includes(id)) {
		addToFavoriteBtn.addEventListener('click', () => {
			new Favorites().removeFromFavorites(id);
		});
		addToFavoriteBtn.innerText = 'Remove';
		addToFavoriteBtn.classList.add('delete-btn');
	}
	else {
		addToFavoriteBtn.addEventListener('click', () => {
			new Favorites().addToFavorites(id);
		});
		addToFavoriteBtn.innerText = 'Add to favorites';
	}
	return addToFavoriteBtn;
}
