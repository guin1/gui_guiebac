$(document).ready(function() {
    $('form').on('submit' , function (e){
 e.preventDefault();
 const tarefa = $('input').val()
 const listaDevres = $('lista-deveres')
 $(`<li>${tarefa}</li>`).appendTo('ol');
$(item).appendTo()
    })
    $('button').click(function() {
    })

    $('form ol li').click(function() {
        console.log('tudo ok')
        $(this).addClass('concluido');
        
    });
})

