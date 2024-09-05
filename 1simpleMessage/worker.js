self.addEventListener('message', function(e) {
  var message = e.data + 'muchas puertas.';
  self.postMessage(message);
  self.close(); // Cierra el hilo del worker.
})