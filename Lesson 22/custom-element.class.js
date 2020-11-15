export class CustomElement extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        console.log('INIT', );

        this.attachShadow({
            mode: "open"
        });

        let template = tmpl.content.cloneNode(true);
        this.shadowRoot.append(template)

        // this.shadowRoot.innerHTML = `
        //     <p>TEXT</p>
        //     <style>
        //         p {
        //             color: green;
        //         }
        //     </style>
        // `;
        console.log(this.shadowRoot.querySelectorAll('*'));
    }

    disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['color', 'type']
    }

    attributeChangedCallback(name, prev, curr) {
        console.log(name, prev, curr);
    }
}

customElements.define('custom-element', CustomElement);


// console.dir(ourEl);

setTimeout(() => {
    ourEl.setAttribute('type', 'inline')
}, 5000)