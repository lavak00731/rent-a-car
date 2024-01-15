import './style.scss';
import "swiffy-slider/css";
import Glide from '@glidejs/glide';
import { swiffyslider } from 'swiffy-slider';


new Glide('.glide').mount();

window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});