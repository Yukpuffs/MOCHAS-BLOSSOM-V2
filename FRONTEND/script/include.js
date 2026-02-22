/*-------------------------------------includes------------------------------------- */

/*Navegacion */
class navegacion extends HTMLElement {
    connectedCallback() {
        fetch("../html/navegacion.html")
            .then(res => res.text())
            .then(html => { this.innerHTML = html; });
    }
}
customElements.define("archi-nave", navegacion);

/*Navegacion ssu*/
class navegacion_ssu extends HTMLElement {
    connectedCallback() {
        fetch("../html/sssu.html")
            .then(res => res.text())
            .then(html => { this.innerHTML = html; });
    }
}
customElements.define("archi-sssu", navegacion_ssu);

/*footer */
class footer extends HTMLElement {
    connectedCallback() {
        fetch("../html/fotter.html")
            .then(res => res.text())
            .then(html => { this.innerHTML = html; });
    }
}
customElements.define("archi-fotter", footer);
