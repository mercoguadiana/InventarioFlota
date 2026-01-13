const params = new URLSearchParams(window.location.search);
const codigo = params.get("codigo");

fetch("data/inventario.json")
  .then(res => res.json())
  .then(productos => {
    const producto = productos.find(p => p.codigo === codigo);

    if (!producto) {
      document.body.innerHTML = "<h2>Equipo no encontrado</h2>";
      return;
    }

    document.getElementById("codigo").textContent = producto.codigo;
    document.getElementById("categoria").textContent = producto.categoria;
    document.getElementById("marca").textContent = producto.marca || "-";
    document.getElementById("modelo").textContent = producto.modelo || "-";
    document.getElementById("anio").textContent = producto.anio || "-";
    document.getElementById("delegacion").textContent = producto.delegacion;
    document.getElementById("empresa").textContent = producto.empresa;
  });
