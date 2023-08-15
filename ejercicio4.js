const password = prompt("Por favor ingrese su contraseña");

if (password === "" || password === null) {
  alert(" Valores invalidos");
} else {
  if (password === "javascript") {
    alert("acceso concedido");
  } else {
    alert("Acceso denegado");
  }
}
