// Creacion del objeto de worker
var worker = new Worker('worker.js');

// Función que escuchará cuando recibamos un mensaje por parte
// del worker y ejecutará un procedimiento
worker.addEventListener('message', function(e) {
  let pivot = document.getElementsByTagName("q");
  pivot[0].innerHTML = e.data;
})

// Enviar información al worker (se copia, no se comparte)
worker.postMessage('Un camino...');
