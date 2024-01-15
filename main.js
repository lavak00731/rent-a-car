import './style.scss';
import "swiffy-slider/css";
import Glide from '@glidejs/glide';
import { swiffyslider } from 'swiffy-slider';


new Glide('.glide').mount();

window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

document.querySelector('.nav-trigger').addEventListener('click', (e)=>{
    if(e.currentTarget.getAttribute('aria-expanded') === 'false') {
        e.currentTarget.setAttribute('aria-expanded', true)
    } else {
        e.currentTarget.setAttribute('aria-expanded', false)
    }
})