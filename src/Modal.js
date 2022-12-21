import {
	MODAL_CONTENT, MODAL_WINDOW,
} from './consts';

export class Modal {
	
	openModal() {
		MODAL_WINDOW.classList.remove('hide');
		document.addEventListener('keyup', (e) => {
			this.#closeTaskByESC(e);
		});
	}
	
	closeModal() {
		MODAL_CONTENT.innerHTML = '';
		MODAL_WINDOW.classList.add('hide');
	}
	
	#closeTaskByESC(e) {
		if (e.code === 'Escape') {
			this.closeModal();
		}
		else {
			return;
		}
	}
}