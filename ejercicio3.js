const age = prompt(" Por favor ingresa tu edad");

if (age === "" || age === null) {
  alert(" Valores invalidos");
} else {
  if (age >= 18) {
    alert(" Usted es mayor de edad");
  } else {
    alert(" Usted es menor de edad");
  }
}
