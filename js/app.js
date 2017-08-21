
$('form').submit(function(e){
  e.preventDefault();

  var nombre = $('#first-name').val();
  var apellido = $('#last-name').val();
  var celular = $('#mobile-number').val();

    if(nombre.length > 0){
      if(apellido.length > 0){
        if(celular.length === 10 && !isNaN(celular)){
            if($('#confirmed').is(':checked')){
                console.log('Todo esta bien, agrega el registro')
            } else{
              $('#confirmed').css('border-color','#FF0000');
              return false;
            }
        }else{
          $('#mobile-number').css('border-color','#FF0000');
          return false;
        }
      }else{
        $('#last-name').css('border-color','#FF0000');
        return false;
      }
    }else if ($('#first-name').css('border-color','#FF0000')){
      return false;
    }else{
      $('#first-name').css('','');
    }


  $('.table tbody').append('<tr>' + '<td>' + nombre + '</td><td>' + apellido + '</td><td>' + celular + '</td><td>' + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'  + '</td></tr>')

  $('#first-name').val('');
  $('#last-name').val('');
  $('#mobile-number').val('');

});
