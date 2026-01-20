const params = new URLSearchParams(window.location.search);
const codigo = params.get("codigo");

fetch("data/inventario.json")
  .then(res => res.json())
  .then(productos => {

    const producto = productos.find(
      p => p["CÓDIGO"] === codigo
    );

    if (!producto) {
      window.location.href = "error.html";
      return;
    }

    function setField(id, value) {
      const el = document.getElementById(id);
      if (!el) return;

      if (
        value === "0" ||
        value === "-" ||
        value === "" ||
        value === null ||
        value === undefined
      ) {
        el.closest("div").style.display = "none";
      } else {
        el.textContent = value;
      }
    }

    setField("codigo", producto["CÓDIGO"]);
    setField("familia", producto["FAMILIA"]);
    setField("categoria", producto["CATEGORÍA"]);
    setField("marca", producto["MARCA"]);
    setField("modelo", producto["MODELO"]);
    setField("anio", producto["AÑO"]);
    setField("numero_serie", producto["N/S - BASTIDOR"]);
    setField("delegacion", producto["DELEG.UBICACIÓN"]);
    setField("usuario", producto["USUARIO"]);
    setField("empresa", producto["EMPRESA"]);
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML = "<h2>Error cargando el inventario</h2>";
  });
