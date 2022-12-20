import '../src/styles.css';
import {SEARCH_FORM} from './consts';
import {getProducts} from './utils';

window.addEventListener('load', () => {
	
	SEARCH_FORM.addEventListener('submit', (e) => {
		e.preventDefault();
		getProducts();
	});
});
