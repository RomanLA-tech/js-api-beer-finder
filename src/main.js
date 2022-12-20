import '../src/styles.css';
import {SEARCH_FORM, TO_TOP_BTN} from './consts';
import {getProducts, scrollFunction, toTopFunction} from './utils';

window.addEventListener('load', () => {
	
	SEARCH_FORM.addEventListener('submit', (e) => {
		e.preventDefault();
		getProducts();
	});
	
	
	window.addEventListener('scroll', scrollFunction);
	
	TO_TOP_BTN.addEventListener('click', toTopFunction);
});
