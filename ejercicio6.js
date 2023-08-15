const userName = prompt(" Por favor ingresa tus nombres");
const age = prompt("Por favor ingresa tu edad");
const country = prompt(" Por favor ingresa tu país").toLowerCase();
const state = prompt(" Por favor ingresa tu estado").toLowerCase();

if (
  userName === "" ||
  userName === null ||
  age === "" ||
  age === null ||
  country === "" ||
  country === null ||
  state === "" ||
  state === null
) {
  alert("datos invalidos");
} else {
  if (
    age >= "18" && country === "canada" ||
    country === "canadá" && state === "toronto"
  ) {
    alert("Has aprobado para la beca");
  } else {
    alert("No aprobaste la beca");
  }
}

//Profe, en este ejercicio tengo el mismo problema del primer ejercicio del repaso que nos puso y que no era obligatorio. En el if anidado, las condiciones de las variables me funcionan hasta la tercera. La variable state, le ponga distinto a toronto me aprueba la beca. Tengo esta duda desde el principio con los 2 ejercicios y no la he podido resolver.