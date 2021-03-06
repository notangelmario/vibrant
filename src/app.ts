import { NavBar } from './ui'

class Vibrant {
    constructor() {
        new NavBar(document.getElementById('nav'))


        // Fix for mobile screens sizing
        document.body.style.height = window.innerHeight + 'px';
		addEventListener('resize', () => {
			document.body.style.height = window.innerHeight + 'px';
		});
    }
}

new Vibrant