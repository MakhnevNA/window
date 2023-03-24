import calcScroll from "./calcScroll";

function modals() {
	
	function bindModal(triggerSelector, modalSelector, closeSelector, closeCLickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector), // то, на что нажимаем, чтобы вызвать модальное окно
			modal = document.querySelector(modalSelector), // само модальное окно/ его подложка
			close = document.querySelector(closeSelector), // крестик для закрытия
			windows = document.querySelectorAll('[data-modal]'), // полученные модалки, но через атрибут
			scroll = calcScroll(),
			windowWidth = document.querySelectorAll('#width'),
			windowHeight = document.querySelectorAll('#height'),
			windowProfile = document.querySelectorAll('.checkbox'),
			cold = document.querySelector('#cold'),
			warm = document.querySelector('#warm');
		

		trigger.forEach(item => {
		
			item.addEventListener('click', (e) => {
				
				

				const target = e.target;
				if (target) {
					e.preventDefault();
				}

				if (target && target.classList.contains('popup_calc_button')) {
					e.preventDefault();

					if (windowWidth[0].value === '' || windowHeight[0].value === '') {
						windowWidth[0].style.border = '1px solid red';
						windowHeight[0].style.border = '1px solid red';

						if (windowWidth[0].value !== '') {
							windowWidth[0].style.border = '';
						} else if (windowHeight[0].value !== '') {
							windowHeight[0].style.border = '';
						}
					} 
					else {
						windows.forEach(item => {
							item.style.display = 'none'
						});

						modal.style.display = 'block'
						document.body.style.overflow = 'hidden'
						document.body.style.marginRight = `${scroll}px`; 
						
					} 
				} else if (target && target.classList.contains('popup_calc_profile_button')) {
					
					windowProfile.forEach(elem => {
						if (elem.checked) {

							windows.forEach(item => {
								item.style.display = 'none'
							});
							modal.style.display = 'block'
							document.body.style.overflow = 'hidden'
							document.body.style.marginRight = `${scroll}px`; 
							cold.style.border = ''
							warm.style.border = ''
						} else {
							cold.style.border = '1px solid red'
							warm.style.border = '1px solid red'
						}
					})


				} else {
					modal.style.display = 'block'
					document.body.style.overflow = 'hidden'
					document.body.style.marginRight = `${scroll}px`; 
				}
				

				
				
			});


		});





		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeCLickOverlay) {
				
				windows.forEach(item => {
					item.style.display = 'none'     // закрывает все открытые окна
				});

				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = `0px`; 
				windowWidth[0].style.border = '';
				windowHeight[0].style.border = '';
			}
		});

		close.addEventListener('click', (e) => {

			windows.forEach(item => {
				item.style.display = 'none'
			});

			modal.style.display = 'none'
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`; 
			windowWidth[0].style.border = '';
			windowHeight[0].style.border = '';

			
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(function () {
			const sel = document.querySelector(selector);
			sel.style.display = 'block'
			
			document.body.style.overflow = 'hidden'
			document.body.style.marginRight = `${calcScroll()}px`; 
		}, time);
	}


	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	showModalByTime('.popup_engineer', 5000);

}

export default modals;