//  cuando carga la pagina
const select = document.querySelector('.js_face_select');
const btn = document.querySelector('.js_btn');
const h1 = document.querySelector('.js_face');
const main = document.querySelector('main');

const updateFace = () => {
  const valueSelect = select.value;
  // en caso que en el value del option tengas   happy, o sad
  /* if (valueSelect === 'happy') {
    h1.innerHTML = ':)';
  } else if (valueSelect === 'sad') {
    h1.innerHTML = ':(';
  }*/
  // si en el value del select pones :), :(
  h1.innerHTML = valueSelect;
};
// Obtener el numero aleatorio entre 0 y 100
const getNumberRandom = () => {
  return Math.round(Math.random() * 100);
};
// cambiar el color de fondo dependiendo si es par o impar el numero random
const changeBackground = () => {
  const number = getNumberRandom();
  console.log(number);
  /*80 / 2 => 40  
    15 /2 => 7.5
    80 % 2 ==> 0
    15 % 2 ==> 1
    number / 2 */
  if (number % 2 === 0) {
    main.classList.add('yellow');
    main.classList.remove('orange');
  } else {
    main.classList.add('orange');
    main.classList.remove('yellow');
  }
};

//cuando se hace click en el boton
const handleClick = (event) => {
  event.preventDefault();
  // modifica la cara
  updateFace();
  //cambiar color de fondo
  changeBackground();
};

btn.addEventListener('click', handleClick);

// cuando carga  la pagina
