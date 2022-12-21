import {API, FAVORITES_LIST, PRODUCTS_LIST, SEARCH_INPUT} from './consts';
import {Favorites} from './Favorites';

export function getProductCardTemplate(product) {
	const productCard = document.createElement('article');
	productCard.classList.add('product__container');
	productCard.dataset.id = product.id;
	
	const cardTitle = document.createElement('h3');
	cardTitle.classList.add('product-card__title');
	cardTitle.innerText = product.name;
	
	const cardImage = document.createElement('img');
	cardImage.classList.add('product-card__image');
	cardImage.src = product.image_url;
	
	const addToFavoriteBtn = document.createElement('button');
	addToFavoriteBtn.classList.add('product-card__add-to-favorites-btn');
	if (FAVORITES_LIST.has(product.id)) {
		addToFavoriteBtn.addEventListener('click', () => {
			new Favorites(FAVORITES_LIST).removeFromFavorites(product.id);
		});
		addToFavoriteBtn.innerText = 'Remove';
		addToFavoriteBtn.classList.add('delete-btn');
	}
	else {
		addToFavoriteBtn.addEventListener('click', () => {
			new Favorites(FAVORITES_LIST).addToFavorites(product.id);
		});
		addToFavoriteBtn.innerText = 'Add to favorites';
	}
	
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
