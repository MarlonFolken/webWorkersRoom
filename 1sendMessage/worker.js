/**
 * Worker que multiplica dos valores que le son enviados
 */

onmessage = function(e) {
  console.log('Desde el Worker: Mensaje recibido de main.js');
  const resultado = e.data[0] * e.data[1];
  // el metodo de window.postMessage() retorna el objeto al hilo principal (en main.js).
  if (isNaN(resultado)) {
    postMessage('Porfavor, escriba 2 mensajes');
  } else {
    const workerResult = 'Resultado: ' + resultado;
    console.log('Desde el Worker: Enviando mensaje de regreso a main.js');
    postMessage(workerResult);
  }
}