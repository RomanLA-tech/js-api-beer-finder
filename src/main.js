import '../src/styles.css';
import {FAVORITES_LIST, MODAL, OPEN_MODAL_BTN, SEARCH_FORM, TO_TOP_BTN} from './consts';
import {getProducts, scrollHandler, scrollToTop,} from './utils';
import {Favorites} from './Favorites';

window.addEventListener('load', () => {
	
	SEARCH_FORM.addEventListener('submit', (e) => {
		e.preventDefault();
		getProducts();
	});
	
	window.addEventListener('scroll', scrollHandler);
	
	OPEN_MODAL_BTN.addEventListener('click', () => {
		MODAL.openModal();
		new	Favorites(FAVORITES_LIST).renderFavoritesProducts();
	});
	
	TO_TOP_BTN.addEventListener('click', scrollToTop);
});
