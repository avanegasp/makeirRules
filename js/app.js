// $('form').submit(function(e){
//   e.preventDefault();
//   $('#first-name').css('border-color', '')
//   $('#last-name').css('border-color', '')
//   $('#mobile-number').css('border-color', '')
//   $('#confirmed').css('border-color', '')
//
//   var nombre = $('#first-name').val();
//   var apellido = $('#last-name').val();
//   var celular = $('#mobile-number').val();
//   var confirmar = $('#confirmed').val();
//
//     if(nombre.length > 0){
//       if(apellido.length > 0){
//         if(celular.length === 10 && !isNaN(celular)){
//             if($('#confirmed').is(':checked')){
//             } else{
//               $('#confirmed').css('border-color','#FF0000');
//               return false;
//             }
//         }else{
//           $('#mobile-number').css('border-color','#FF0000');
//           return false;
//         }
//       }else{
//         $('#last-name').css('border-color','#FF0000');
//         return false;
//       }
//     }else{
//       $('#first-name').css('border-color','#FF0000');
//       return false;
//     }
//
//   $('.table tbody').append('<tr>' + '<td>' + nombre + '</td><td>' + apellido + '</td><td>' + celular + '</td><td>' + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'  + '</td></tr>')
//
//   $('#first-name').val('');
//   $('#last-name').val('');
//   $('#mobile-number').val('');
//   $('#confirmed').removeAttr('checked');
//
//
//   $('#new-guest').modal('hide');
//
//
// });


// escribe tu código acá
$('button').on('click', function(){

  var countries = [
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
  ];
  $('body').append('<table></table>');
  $('table').append('<tr><th>' +"Code" + '</th>' + '<th>' + "Name" + '</th>' + '<th>' +"Flag"+ '</th>' +'</tr>')
  $('table').append('<tr><td>' + countries[0].code + '</td><td>' + countries[0].name + '</td><td><img src="' + countries[0].flag_url + '"></td></tr>')
  $('table').append('<tr><td>' + countries[1].code + '</td><td>' + countries[1].name + '</td><td><img src="' + countries[1].flag_url + '"></td></tr>')
  $('table').append('<tr><td>' + countries[2].code + '</td><td>' + countries[2].name + '</td><td><img src="' + countries[2].flag_url + '"></td></tr>')
  $('table').append('<tr><td>' + countries[3].code + '</td><td>' + countries[3].name + '</td><td><img src="' + countries[3].flag_url + '"></td></tr>')

  $('button').hide()
});
