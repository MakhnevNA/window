import './slider';    // узнать почему мы это так импортировали
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';




window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	let modalState = {};
	let deadline = '2023-04-26'
	changeModalState(modalState);
	modals();
	tabs('.glazing_content', '.glazing_slider', '.glazing_block', 'active');
	tabs('.decoration_content >div >div', '.decoration_slider', '.no_click', 'after_click');
	tabs('.big_img > img', '.balcon_icons', '.balcon_icons_img', 'do_image_more', 'inline-block');
	forms(modalState);
	timer(deadline);
	images();
});