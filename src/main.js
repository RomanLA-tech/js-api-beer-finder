import '../src/styles.css';
import {MODAL, OPEN_MODAL_BTN, SEARCH_FORM, STORE, TO_TOP_BTN} from './consts';
import {getProducts, renderRecentlySearchedList, scrollHandler, scrollToTop,} from './utils';
import {Favorites} from './Favorites';

window.addEventListener('load', () => {
	
	SEARCH_FORM.addEventListener('submit', (e) => {
		e.preventDefault();
		getProducts();
	});
	
	OPEN_MODAL_BTN.addEventListener('click', () => {
		MODAL.openModal();
		new Favorites(STORE.getFavorites()).renderFavoritesProducts();
	});
	
	renderRecentlySearchedList(STORE.getRecentlySearched());
	
	window.addEventListener('scroll', scrollHandler);
	
	TO_TOP_BTN.addEventListener('click', scrollToTop);
});
