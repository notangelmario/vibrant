export class NavBar {
    constructor(navElement: Element) {
        for (let i = 0; i < navElement.children.length; i++) {
            navElement.children[i].addEventListener('click', ()=>this.select(navElement.children[i], navElement))
        }
    }

    select(buttonElement: Element, navElement: Element) {
        for (let i = 0; i < navElement.children.length; i++) {
            if (navElement.children[i] !== buttonElement) {
                navElement.children[i].querySelector('span').classList.replace('material-icons', 'material-icons-outlined')
            } else {
                navElement.children[i].querySelector('span').classList.replace('material-icons-outlined', 'material-icons')
            }
        }
        
    }
}