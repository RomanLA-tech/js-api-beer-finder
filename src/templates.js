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
	
	const cardDescription = document.createElement('p');
	cardDescription.classList.add('product_card__description');
	cardDescription.innerText = product.description;
	
	productCard.append(cardTitle, cardImage, cardDescription);
	
	return productCard;
}
