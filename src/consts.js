import {ProductsList} from './ProductsList';
import {Api} from './Api';
import {Modal} from './Modal';
import {Favorites} from './Favorites';

export const BASE_URL = 'https://api.punkapi.com/v2/beers';

export const PRODUCTS_LIST = new ProductsList();
export const MODAL = new Modal();
export const API = new Api();
export const FAVORITES = new Favorites();

export const RECENT_SEARCHES_LIST = new Set();
export const FAVORITES_LIST = new Set();

export const MODAL_WINDOW = document.getElementById('modal');
export const MODAL_CONTENT = MODAL_WINDOW.querySelector('#modal-content');
export const SEARCH_FORM = document.getElementById('search-form');
export const SEARCH_INPUT = document.getElementById('search-input');
export const PRODUCTS_LIST_ELEMENT = document.getElementById('products-list');
export const TO_TOP_BTN = document.getElementById('to-top-btn');
export const OPEN_MODAL_BTN = document.getElementById('open-modal-btn');
export const RECENTLY_SEARCHED_LIST_ELEMENT = document.getElementById('recently-searched');


export const NO_PRODUCTS_MESSAGE = 'There were no properties found for the given location.';





