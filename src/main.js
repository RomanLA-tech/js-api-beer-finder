import '../src/styles.css';
import {SEARCH_FORM, TO_TOP_BTN} from './consts';
import {getProducts, scrollHandler, scrollToTop,} from './utils';

window.addEventListener('load', () => {
	
	SEARCH_FORM.addEventListener('submit', (e) => {
		e.preventDefault();
		getProducts();
	});
	
	window.addEventListener('scroll', scrollHandler);
	
	TO_TOP_BTN.addEventListener('click', scrollToTop);
});
