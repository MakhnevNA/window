import './slider';    // узнать почему мы это так импортировали
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';




window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	let modalState = {};
	changeModalState(modalState);
	modals();
	tabs('.glazing_content', '.glazing_slider', '.glazing_block', 'active');
	tabs('.decoration_content >div >div', '.decoration_slider', '.no_click', 'after_click');
	tabs('.big_img > img', '.balcon_icons', '.balcon_icons_img', 'do_image_more', 'inline-block');
	forms(modalState);

});