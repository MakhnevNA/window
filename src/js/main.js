import './slider';    // узнать почему мы это так импортировали

import modals from './modules/modals';
import tabs from './modules/tabs';



window.addEventListener("DOMContentLoaded", () => {
	
	modals();
	tabs('.glazing_content', '.glazing_slider', '.glazing_block', 'active');
	tabs('.decoration_content >div >div', '.decoration_slider', '.no_click', 'after_click');
	

});