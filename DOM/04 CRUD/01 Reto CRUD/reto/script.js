let boton = document.getElementById('agregar')
let div = document.getElementById('component')
let texto = '<h3>HOLA</h3><a href="google.com">google<a/>'
boton.addEventListener('click', function () {

    div.innerHTML = texto;
  });