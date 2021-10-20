let btn = document.getElementById("btn");
let precio: string = document.getElementById("precio");
let cantidad: string = document.getElementById("cantidad");

let descuento: number = 0;
let precioDescuento: number = 0;

btn.addEventListener("click", () => {
  let price: number = Number(precio.value);
  let cant: number = Number(cantidad.value);
  let precioTotal: number = price * cant;
  if (precioTotal >= 1000) {
    descuento = precioTotal * 0.1;
    precioDescuento = precioTotal - descuento;
    console.log("el precio con descuento es", precioDescuento);
  } else {
    console.log("el precio sin descuento es ", precioTotal);
  }
});
