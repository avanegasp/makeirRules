$('form').submit(function(e){
  e.preventDefault();
  $('#first-name').css('border-color', '')
  $('#last-name').css('border-color', '')
  $('#mobile-number').css('border-color', '')
  $('#confirmed').css('border-color', '')

  var nombre = $('#first-name').val();
  var apellido = $('#last-name').val();
  var celular = $('#mobile-number').val();
  var confirmar = $('#confirmed').val();

    if(nombre.length > 0){
      if(apellido.length > 0){
        if(celular.length === 10 && !isNaN(celular)){
            if($('#confirmed').is(':checked')){
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
    }else{
      $('#first-name').css('border-color','#FF0000');
      return false;
    }

  $('.table tbody').append('<tr>' + '<td>' + nombre + '</td><td>' + apellido + '</td><td>' + celular + '</td><td>' + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'  + '</td></tr>')

  $('#first-name').val('');
  $('#last-name').val('');
  $('#mobile-number').val('');
  $('#confirmed').removeAttr('checked');


  $('#new-guest').modal('hide');


});
