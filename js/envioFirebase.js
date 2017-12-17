
function consultarFiltro() {

  var bigOne = document.getElementById('bigOne');
  var filtro = document.getElementById('campo1').value;

  const dbRef = firebase.database().ref().child('eventos');
  bigOne.innerHTML = "";

  var query = dbRef
              .orderByChild('tipo')
              .equalTo(filtro);

  query.on("child_added", function(snapshot) {

            var nom = snapshot.val();

            bigOne.innerHTML += nom.nombre + "<br>";
            //console.log(nom.nombre);

  });

}

function enboton() {
  alert('Hola Mundo');
}
