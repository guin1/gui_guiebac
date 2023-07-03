$(document).ready(function (){
    $('form').on('submit', function(event) {
        event.preventDefault();
        
        const novaTarefa = $('#lista-devres').val();
        const novoItem = $('<li></li>');


        $(`${novaTarefa}`).appendTo(novoItem);
        
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ol');
        $('li').click(function() {
            $('li').css({"text-decoration":"line-through"});
            $(this).addClass('.concluido');
        }); 


        $('#lista-devres').val('');
    })
})

