import {ProductsList} from './ProductsList';
import {Api} from './Api';

export const BASE_URL = 'https://api.punkapi.com/v2/beers';

export const PRODUCTS_LIST = new ProductsList();
export const API = new Api();

export const RECENT_SEARCHES_LIST = new Set();
export let LOADED_PRODUCTS = []

export const SEARCH_FORM = document.getElementById('search-form');
export const SEARCH_INPUT = document.getElementById('search-input');
export const PRODUCTS_LIST_ELEMENT = document.getElementById('products-list');
export const TO_TOP_BTN = document.getElementById('to-top-btn')

export const NO_PRODUCTS_MESSAGE = 'There were no properties found for the given location.';





