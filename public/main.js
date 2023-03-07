//obteniendo el boton para editar los campos
const btnEditar = document.querySelector('.bg-green-500');

//Creando el contenedor de edicion de lo campos

//Creando un div con sus clases
const contenedorEdicion = document.createElement('div');
contenedorEdicion.classList.add(
    'bg-white', 'rounded-lg', 'w-11/12', 'py-4', 'mb-4', 'mx-auto', 'md:max-w-lg', 'shadow-2xl', 'px-4', 'flex', 'flex-col', 'justify-center', 'items-center', 'text-center', 'z-50', 'absolute', 'top-1', 'right-0', 'left-0', 'z-50',  'h-96','my-0', 'hidden', 'gap-2'
  );

//Creando un input para editar el nombre
const inputNombre = document.createElement('input');
inputNombre.classList.add('custom-input','text-sm', 'font-medium', 'text-gray-400', 'mb-4' );
inputNombre.setAttribute('type', 'text');
inputNombre.setAttribute('placeholder', 'Nombre Completo');
inputNombre.value = '';

//Creando un select radial para el nivel
const selectNivel = document.createElement('div');
selectNivel.classList.add('flex', 'flex-row', 'gap-6', 'text-2xl', 'font-medium', 'text-gray-400', 'mb-4');

// Variable para guardar la selección del usuario
let nivelSeleccionado;

const niveles = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'];
for (let nivel of niveles) {
  const label = document.createElement('label');
  label.classList.add('inline-flex', 'items-center', 'mt-3');

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'niveles';
  input.value = nivel;
  input.classList.add('form-radio', 'text-indigo-600', 'h-5', 'w-5', 'px-6');

  // Agregar evento change para guardar la selección del usuario
  input.addEventListener('change', (event) => {
    nivelSeleccionado = event.target.value;
    console.log(nivelSeleccionado);
  });

  const text = document.createTextNode(nivel);

  label.appendChild(input);
  label.appendChild(text);

  selectNivel.appendChild(label);
}


//Creando otro input para guardar el correo
const inputCorreo = document.createElement('input');
inputCorreo.classList.add('text-sm', 'font-medium', 'text-gray-400', 'mb-2','custom-input');
inputCorreo.setAttribute('type', 'email');
inputCorreo.setAttribute('placeholder', 'ejemplo@gmail.com');
inputCorreo.value = '';
let contrasena  = "";


//Creando otro input para guardar la contrase;a
const inputContrasena = document.createElement('input');
inputContrasena.classList.add('text-sm', 'font-medium', 'text-gray-400', 'mb-2', 'custom-input', 'relative');
inputContrasena.setAttribute('type', 'password');
inputContrasena.setAttribute('placeholder', 'Contraseña');
inputContrasena.value = contrasena;


//codigo para mostrar la contrase;a si mantengo un boton

//Creando boton mostrar contrase;a
const botonMostrarContrasena = document.createElement('button');
botonMostrarContrasena.classList.add('text-sm', 'font-medium', 'text-gray-700');
botonMostrarContrasena.textContent = 'Mostrar';
botonMostrarContrasena.addEventListener('mousedown', function() {
  inputContrasena.setAttribute('type', 'text');
});
botonMostrarContrasena.addEventListener('mouseup', function() {
  inputContrasena.setAttribute('type', 'password');
});


//Creando un input para editar el numero de telefono
const inputTelefono = document.createElement('input');
inputTelefono.classList.add('text-sm', 'font-medium', 'text-gray-400', 'mb-2', 'custom-input');
inputTelefono.setAttribute('type', 'tel');
inputTelefono.setAttribute('placeholder', 'Número de teléfono');
inputTelefono.value = '';

// Crear el div contenedor de los botones
const divBotones = document.createElement('div');
divBotones.classList.add('flex', 'justify-center', 'gap-6');

//Creando el boton guardar cambios
const btnGuardar = document.createElement('button');
btnGuardar.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'mt-4');
btnGuardar.textContent = 'Guardar';

//Creando el boton cancelar cambios
const btnCancelar = document.createElement('button');
btnCancelar.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'mt-4', 'btnCancelar');
btnCancelar.textContent = 'Cancelar';

// Agregar los botones al div
divBotones.appendChild(btnGuardar);
divBotones.appendChild(btnCancelar);

//Agregando todos los elementos al contenedor principal
contenedorEdicion.appendChild(inputNombre);
contenedorEdicion.appendChild(selectNivel);
contenedorEdicion.appendChild(inputCorreo);
contenedorEdicion.appendChild(inputContrasena);
contenedorEdicion.appendChild(botonMostrarContrasena);
contenedorEdicion.appendChild(inputTelefono);
contenedorEdicion.appendChild(divBotones);

//Agregando el contenedor principal al body
document.querySelector('body').appendChild(contenedorEdicion);

//Haciendo visible la ventana de estitar datos
btnEditar.addEventListener('click', () => {
  console.log('Botón de editar clickeado');
  contenedorEdicion.classList.toggle('hidden');
});

//Declarando variables fuera de funciones para utilizarlas en cualquier parte.
contrasena = inputContrasena.value;
let nombreOriginal ="";
let nivelOriginal = "";
let correoOriginal = "";
let contrasenaOriginal = "";
let telefonoOriginal = "";


//Creando el evento click del boton guardar
btnGuardar.addEventListener('click', () => {
//Validando que no haya ningun campo vacio.
  if (!inputNombre.value || !nivelSeleccionado || !inputCorreo.value || !inputContrasena.value || !inputTelefono.value) {
    alert('Por favor, llene todos los campos antes de guardar los cambios.');
    return;
  }

//Validando la contrase;a editada
  if (!/(?=.*[a-zA-Z])/i.test(inputContrasena.value)) {
    alert('La contraseña debe tener al menos una letra.');
    return;
  }

  if (inputContrasena.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return;
  }

  if (!/\d+/.test(inputContrasena.value)) {
    alert('La contraseña debe tener al menos un número.');
    return;
  }

  if (!/\W+/.test(inputContrasena.value)) {
    alert('La contraseña debe tener al menos un caracter especial.');
    return;
  }

  //Validando el numero de telefono

  if (!/^\d{8,}$/.test(inputTelefono.value)) {
    alert('El teléfono debe tener al menos 8 números y sin letras ni guiones');
    return;
  }

  //validando el correo

const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!correoRegex.test(inputCorreo.value)) {
  alert('Por favor, ingrese un correo electrónico válido.');
  return;
}

if (!inputCorreo.value.endsWith('.com')) {
  alert('Por favor, ingrese un correo electrónico con el dominio .com.');
  return;
}

//guardando los datos y mostrandolos en el contenedor de detalles
    nombreOriginal  =  inputNombre.value;
    document.querySelector("h2").textContent = nombreOriginal;

    nivelOriginal = nivelSeleccionado;
    document.querySelector(".nivel").textContent = nivelOriginal; 

    correoOriginal = inputCorreo.value;
    document.querySelector(".correo").textContent = correoOriginal;
    contrasena = inputContrasena.value;

    //mostrando en el contenedor de detalles la contrase;a con *****
const contrasenaOculta = contrasena.replace(/./g, "*");
    contrasenaOriginal = contrasena;
document.querySelector(".contra").textContent = contrasenaOculta;


    telefonoOriginal = inputTelefono.value;
    document.querySelector(".tel").textContent = telefonoOriginal;
    contenedorEdicion.classList.add('hidden'); // Ocultar el formulario de edición
  });



  //Boton cancelar

// Creando el evento click del botón de cancelar
btnCancelar.addEventListener('click', () => {

  // Ocultar el formulario de edición
  contenedorEdicion.classList.add('hidden');

  // Mantener los campos con los datos guardador sin cambios hechos.
 inputNombre.value = nombreOriginal;
 selectNivel.querySelector(`[value="${nivelOriginal}"]`).checked = true;
  inputCorreo.value = correoOriginal;
  inputContrasena.value = contrasenaOriginal;
  inputTelefono.value = telefonoOriginal;
});












/* function mostrarVentanaEmergente() {
    const contenedorEdicion = document.createElement('div');
    contenedorEdicion.classList.add(
      'bg-white', 'rounded-lg', 'py-4', 'mb-4', 'px-4', 'text-center', 'relative', 'z-50', 'hidden', 'fixed',
      'w-11/12', 'md:max-w-lg',
      'top-0', 'bottom-0', 'left-0', 'right-0', 'm-auto'
    );
  
    const inputNombre = document.createElement('input');
    inputNombre.classList.add('text-3xl', 'font-bold', 'text-gray-700', 'mb-2');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('placeholder', 'Nombre Completo');
    inputNombre.value = 'Nombre Completo';
  
    const selectNivel = document.createElement('select');
    selectNivel.classList.add('text-xl', 'font-medium', 'text-gray-700', 'mb-2');
    const niveles = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'];
    for (let nivel of niveles) {
      const option = document.createElement('option');
      option.value = nivel;
      option.text = nivel;
      selectNivel.appendChild(option);
    }
  
    const inputCorreo = document.createElement('input');
    inputCorreo.classList.add('text-sm', 'font-medium', 'text-gray-700', 'mb-2');
    inputCorreo.setAttribute('type', 'email');
    inputCorreo.setAttribute('placeholder', 'Correo electrónico');
    inputCorreo.value = 'juan.perez@gmail.com';
  
    const inputContrasena = document.createElement('input');
    inputContrasena.classList.add('text-sm', 'font-medium', 'text-gray-700', 'mb-2');
    inputContrasena.setAttribute('type', 'password');
    inputContrasena.setAttribute('placeholder', 'Contraseña');
    inputContrasena.value = '********';
  
    const inputTelefono = document.createElement('input');
    inputTelefono.classList.add('text-sm', 'font-medium', 'text-gray-700', 'mb-2');
    inputTelefono.setAttribute('type', 'tel');
    inputTelefono.setAttribute('placeholder', 'Número de teléfono');
    inputTelefono.value = '123-456-7890';
  
    const btnGuardar = document.createElement('button');
    btnGuardar.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded-lg', 'mt-4');
    btnGuardar.textContent = 'Guardar';
  
    contenedorEdicion.appendChild(inputNombre);
    contenedorEdicion.appendChild(selectNivel);
    contenedorEdicion.appendChild(inputCorreo);
    contenedorEdicion.appendChild(inputContrasena);
    contenedorEdicion.appendChild(inputTelefono);
    contenedorEdicion.appendChild(btnGuardar);
  
    document.querySelector('body').appendChild(contenedorEdicion);
  
    contenedorEdicion.classList.toggle('hidden');
  
    const ventanaAncho = contenedorEdicion.offsetWidth;
    const ventanaAlto = contenedorEdicion.offsetHeight;
    const ventanaX = (window.innerWidth - ventanaAncho) / 2;
    const ventanaY = (window.innerHeight - ventanaAlto) / 2;
    console.log('Botón de editar clickeado');
    contenedorEdicion.style.top = ventanaY + 'px';
    contenedorEdicion.style.left = ventanaX + 'px';
}
  
  const btnEditar = document.querySelector('.bg-green-500');
  btnEditar.addEventListener('click', () => {
    
    mostrarVentanaEmergente();
  }); */
  

  









/* btnGuardar.addEventListener('click', () => {
  const nombreCompleto = inputNombre.value;
  const nivel = selectNivel.value;
  const correoElectronico = inputCorreo.value;
  const contrasena = inputContrasena.value;
  const numeroTelefono = inputTelefono.value;

  const nombreCompletoElemento = document.querySelector('.text-3xl');
  const nivelElemento = document.querySelector('.text-xl');
  const correoElectronicoElemento = document.querySelectorAll('.text-sm')[0];
 
}); */
