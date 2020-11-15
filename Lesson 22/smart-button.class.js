export class SmartButton extends HTMLButtonElement {
    count = 0;

    constructor() {
        super()
    }

    connectedCallback() {
        console.log('INIT SmartButton');
        this.addEventListener('click', () => {
            this.count++;
            console.log(this.name, this.count);
        })
    }

    attributeChangedCallback(name, prev, curr) {
        console.log(name, prev, curr);
    }
}

customElements.define('smart-button', SmartButton, {
    extends: "button"
});