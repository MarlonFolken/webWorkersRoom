/**
 * Script que envia dos valores a un worker, los cuales son multiplicados
 * para retornarlos al contenido de una etiqueta.
 */

const primero = document.querySelector('#numero1');
const segundo = document.querySelector('#numero2');
const resultado = document.querySelector('#resultado');

if (window.Worker) {
  // Importación
  const myWorker = new Worker("worker.js");

  [primero, segundo].forEach(input => {
    input.onchange = function() {
      // Envia un mensaje al worker para que lo copie y lo tenga.
      myWorker.postMessage([primero.value, segundo.value]);
      console.log('Enviado mensaje al Worker');
    }
  })

  //Utiliza la función del worker
  myWorker.onmessage = function(e) {
    // Mediante e.data accedemos a la información enviada en myWorker.postMessage()
    resultado.textContent = e.data;
    console.log('Recibido mensaje del Worker');
  }
} else {
  console.log('El navegador que está usando no soporta Web Workers.');
}