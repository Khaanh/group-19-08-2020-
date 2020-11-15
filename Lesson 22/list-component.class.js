export class ListComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        console.log('INIT ListComponent', );

        this.attachShadow({
            mode: "open"
        });
        let menuTempl = menu.content.cloneNode(true)
        console.log(menuTempl);
        this.shadowRoot.append(menuTempl);

        this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {
            // открыть/закрыть меню
            this.shadowRoot.querySelector('.menu').classList.toggle('closed');
          };
    }

    disconnectedCallback() {

    }

    static get observedAttributes() {
        return []
    }

    attributeChangedCallback(name, prev, curr) {
        console.log(name, prev, curr);
    }
}

customElements.define('list-component', ListComponent);