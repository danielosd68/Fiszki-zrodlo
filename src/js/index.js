import '../sass/view.scss';
import './modules/footer';
import anime from 'animejs/lib/anime.es.js';
import './modules/main-engine';
import { FlashCard } from './modules/main-engine';



anime({
    targets: '.copy',
    translateY: -20
});



//Żeby uruchomić silnik należy odblokować ten obiekt:
const startEngine = new FlashCard;



