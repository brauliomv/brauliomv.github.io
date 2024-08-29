//Obtener el boton de menu
const menuToggle = document.querySelector(".hamburger");

//Se obtiene la lista desplegable
const menu = document.querySelector(".menu-container");


//Funcion para abrir el menu
function openMenu(event){
  event.stopPropagation();//Se usa event.stopPropagation() para evitar que el evento se progague a otros elementos al hacer clic
  menu.classList.add("show");//Se agrega la clase show, para mostrar
  if(navbar.classList.contains('dark')){
    menu.classList.add('dark');
  };
  menuToggle.classList.add("change");//Cuando el menú se muestra, se anima el botón a través de la propiedad change
  document.addEventListener("click",closeMenuOutside); //Se habilita el evento que detecta clics fuera del menú para cerrarlo, y se pasa como argumento la funcion que cierra el menú
}

//Función para cerrar el menú al hacer clic fuera de él
function closeMenuOutside(event){
  const target = event.target;//Event.target se guarda en una variable, practicamente es toda la pagina que está fuera del menú
  //console.log(target);
    
  //Si el menu desplegado no está dentro del target y target no es menuToggle que es el boton del menú 
  if(!menu.contains(target) && target !== menuToggle){
    //Se llama a la función que cierra el menú
    closeMenu();
  }
}

function closeMenu(){
  menu.classList.remove("show"); //Se elimina la clase show para que desaparezca el menú

    menu.classList.remove('dark');

  menuToggle.classList.remove("change"); //El boton de menú regresa a su forma original 
  document.removeEventListener("click",closeMenuOutside); //Se remueve el eventlistener que cierra el menú al hacer clic desde fuera
}


//Agregar evento de clic al icono de menu
menuToggle.addEventListener("click",(event) =>{
  //Se alterna entre cerrar o abrir el menú, para ello se detecta si el classList es show
  if(menu.classList.contains("show")){
    closeMenu();
  }else{
    openMenu(event);
  }
});