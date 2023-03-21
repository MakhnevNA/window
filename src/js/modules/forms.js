import checkNumInputs from './checkNumInputs';


function forms(state) {
	
	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input'),
		windows = document.querySelectorAll('[data-modal]');

	
	
	checkNumInputs('input[name = "user_phone"]')
	
	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так'
	}

	function clearInputs() {
		input.forEach(item => {
			item.value = '';
		})
	}


	async function postData  (url, data){
		
		document.querySelector('.status').textContent = message.loading
		
		let res = await fetch(url, {
			method: "POST",
			body: data
		})
			
		
		return await res.text()


	}



	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			item.append(statusMessage);
			
			
			const formData = new FormData(item);
			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
				
			}
			
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
					for (let k in state) {
						delete state[k] 
					}
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						windows.forEach(item => {
							item.style.display = 'none'
							document.body.style.overflow = ''
						});
					}, 3000);
					
				});
			
		});
	});





}


export default forms;