function modals() {
	
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector), // то, на что нажимаем, чтобы вызвать модальное окно
			modal = document.querySelector(modalSelector), // само модальное окно/ его подложка
			close = document.querySelector(closeSelector); // крестик для закрытия


		trigger.forEach(item => {
		
			item.addEventListener('click', (e) => {
				e.preventDefault();
				openModal()
			});


		})
		
		function openModal() {
			modal.classList.add('show')
			modal.classList.remove('hide')
			document.body.style.overflow = 'hidden'
		}	

		function closeModal() {
			modal.classList.add('hide');
			modal.classList.remove('show')
			document.body.style.overflow = ''
		}


	

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});

		close.addEventListener('click', (e) => closeModal())
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');

}


export default modals;