$(document).ready(function() {
    $('header button').click(function() { /*.click é uma função e passamos um callback*/
        $('form').slideDown(); /*efeito slide, abre para baixo*/
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); /*recolhe o formulario*/
    })

    $('form').on('submit', function(e) {
        e.preventDefault(); /*para previnir o comportamento padrão do formulário de atualizar a página quando submetido*/
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"> </li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blanck" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                <a/>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000); /*3000 - 3 segundos - unidade milissegundos*/
        $('#endereco-imagem-nova').val('');
    })

})

