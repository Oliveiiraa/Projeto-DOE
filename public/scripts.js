// querySelector === Busca seletores
document
    .querySelector('header button')
    .addEventListener("click", function() {
        document
            .querySelector('.form')
            .classList.toggle('hide') // Adicionar ou remover classe
    }) // Ow cliquei no botão e execute essa função