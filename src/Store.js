export class Store {
	
	getLoadedProducts() {
		return JSON.parse(localStorage.getItem('loaded') || '[]');
	}
	
	getRecentlySearched() {
		return JSON.parse(localStorage.getItem('recently') || '[]');
	}
	
	getFavorites() {
		return JSON.parse(localStorage.getItem('favorites') || '[]');
	}
	
	saveFavorite(id) {
		const oldState = this.getFavorites();
		console.log(this.getFavorites());
		const newState = new Set([id, ...oldState]);
		localStorage.setItem('favorites', JSON.stringify([...newState]));
	}
	
	saveLoadedProducts(items) {
		const oldState = this.getLoadedProducts();
		const newState = new Set([...items, ...oldState]);
		localStorage.setItem('loaded', JSON.stringify([...newState]));
	}
	
	saveRecentlySearched(value) {
		const oldState = this.getRecentlySearched();
		const newState = new Set([value, ...oldState]);
		localStorage.setItem('recently', JSON.stringify([...newState]));
	}
	
	removeFromFavorites(id) {
		const state = this.getFavorites();
		const newState = state.filter(item => item !== id);
		localStorage.setItem('favorites', JSON.stringify(newState));
	}
	
	clearLoadedProducts() {
		localStorage.setItem('loaded', JSON.stringify([]));
	}
}
