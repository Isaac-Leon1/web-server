const productos = [
    { id: 1, nombre: 'Pizza', cantidad: 2, precio: 1.50 },
    { id: 2, nombre: 'Hamburguesa', cantidad: 3, precio: 2.50 },
    { id: 3, nombre: 'Hot Dog', cantidad: 1, precio: 1.00 },
    { id: 4, nombre: 'Refresco', cantidad: 2, precio: 0.50 },
    { id: 5, nombre: 'Papas Fritas', cantidad: 1, precio: 1.00 }
  ];

  const table = document.getElementById('productos-table');

  productos.forEach(producto => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.precio.toFixed(2)}</td>
    `;
    table.appendChild(row);
});