
$('form').submit(function(e){
  e.preventDefault();

  var nombre = $('#first-name').val();
  var apellido = $('#last-name').val();
  var celular = $('#mobile-number').val();


  // CAMPOS VACÍOS


  	// if(nombre.length === 0){
  	// 	alert('llene el campo nombre')
  	// }else{
  	// 	console.log('pasa a apellido')
  	// }if(apellido.length === 0){
  	// 	alert('llene el campo apellido')
  	// }else{
  	// 	console.log('pasa a número de celular')
  	// }if(!(/^\d{9}$/.test(celular))){
  	// 	alert('llena el campo del celular')
  	// }else{
  	// 	console.log('pasa a confirmarte en la lista')
  	// }if($(".checkbox").is(':checked'))){
  	// 	console.log('te confirmaste')
  	// }

    if(nombre.length > 0){
      if(apellido.length > 0){
        if(!(/^\d{9}$/.test(celular))){
          if($(".checkbox").is(':checked') == true){
          }else{
            console.log('Marca la casilla de confirmado')
          }
        }else{
          console.log('Escribe tu Celular')
        }
      }else{
        console.log('Escribe tu apellido')
      }
    }else{
    console.log('Escribe tu nombre')
    }

//     if nombre **no** está vacío
// |  si el apellido **no** está vacío
// |    si el celular **no** está vacío
// |            si la confirmación está seleccionada
// |        todo está bien, agregar el registro
// |      de lo contrario
// |                mostrarle algo para que sepa que debe seleccionar
// |    de lo contrario (el celular **está** vacío)
// |        mostrarle algo para que agregue el celular
// |  de lo contrario (el apellido **está** vacío)
// |       mostrarle algo para que agregue el apellido
// de lo contrario (el nombre **está** vacío)
//   mostrarle algo para que agregue el nombre


  $('.table tbody').append('<tr>' + '<td>' + nombre + '</td><td>' + apellido + '</td><td>' + celular + '</td><td><svg id="i-checkmark" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentcolor">'
  + '<path d="M2 20 L12 28 30 4" /></svg></td></tr>')

  $('#first-name').val('');
  $('#last-name').val('');
  $('#mobile-number').val('');

});
