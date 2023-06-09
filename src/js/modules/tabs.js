function tabs(tabsContentSelector, parentSelector, tabsSelector, classActive, display = 'block') {
	
	const tabsContent = document.querySelectorAll(tabsContentSelector),  // то, что будет меняться на странице
		tabsParent = document.querySelector(parentSelector),  // родитель всех табов
		tabs = document.querySelectorAll(tabsSelector); // кнопки для переключения 
		

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none'
		});

		tabs.forEach(item => {
			item.classList.remove(classActive);
		});
	}

	hideTabContent()
		
		
	function showTabContent(i = 0) {
		tabsContent[i].style.display = display; 
		tabs[i].classList.add(classActive);
	}


	showTabContent()



	tabsParent.addEventListener('click', (e) => {  
		const target = e.target;

		if (target && (target.classList.contains(tabsSelector.replace(/\./, "")) ||
			target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
			
			tabs.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

}


export default tabs;