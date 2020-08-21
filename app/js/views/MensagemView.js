class MensagemView {
    constructor(seletor) {
        this._element = document.querySelector(seletor);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
