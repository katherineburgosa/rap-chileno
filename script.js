async function card() {
  const consulta = await fetch("https://raw.githubusercontent.com/katherineburgosa/pruebas.../main/contenido.json");
  const data = await consulta.json();
  var donde = document.querySelector("#zona");

  var tarjetas = data.map(function (t, i) {
    return '<div class="col-md-4 mb-4"><div class="ui-card"><a href="single.html?nro=' + i + '"><img src="' + t.cate + '" alt="' + t.alt1 + '"></a><div class="description"><h3>' + t.cantante + '</h3></div></div></div>';
  });

  donde.innerHTML = '<div class="row">' + tarjetas.join("") + '</div>';
}

card().catch((error) => console.error(error));
