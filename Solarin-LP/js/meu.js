const itensInstalacoes = document.querySelectorAll('.section4-vantagns-item')

function itemClick(event) {
    event.preventDefault()
    itensInstalacoes.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

itensInstalacoes.forEach((item) => {
    item.addEventListener('mouseenter', itemClick)
})

