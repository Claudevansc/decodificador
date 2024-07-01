
let flag = true;
let encriptado = '';
let descriptar = '';
let contador = 1;
let vogais = ['a','e','i','o','u'];
let strings = ['ai','enter','imes','ober','ufat'];

function criptografar(){
   let authorized =  containsUpperCase();
   let notAuthorized = containsSpecialChars();

   if(authorized == false && notAuthorized == false){
    document.getElementById('img').style.display = 'none'
    document.getElementById('msg').style.display = 'flex';
    let texto = document.querySelector('.texto').value;
    if(contador > 1){
      document.querySelector('.msg__parag').innerText = '';
      encriptado = '';
      descriptar = '';
    }

    for(let i = 0; i < texto.length; i++) {
      flag = true;
      for(let x = 0; x < vogais.length; x++){
        if( texto[i] == vogais[x] ) {
          encriptado += strings[x];
          flag = false;
        } 
      }    
      if(flag){
        encriptado += texto[i];
      }
    }
    ++contador
    document.querySelector('.msg__parag').innerText = encriptado;
  } else if(authorized == true) {
    document.querySelector('.paragrafo').style.display = 'none';
    document.querySelector('.paragrafo__maiuscula').style.display = 'flex';
  } else if(notAuthorized == true){
    document.querySelector('.paragrafo').style.display = 'none';
    document.querySelector('.paragrafo__caracter--especial').style.display = 'flex';
  } 
}

function descriptografar(){
  document.getElementById('img').style.display = 'none'
  document.getElementById('msg').style.display = 'flex';
  let descriptar = document.querySelector('.texto').value;
  let input = document.querySelector('.texto');
  input.value = '';  
  
  for(let i = 0; i < descriptar.length; i++) {
    flag = true;
    for(let x = 0; x < vogais.length; x++){
      if( descriptar[i] == vogais[x] ) {
        flag = false;
        if (descriptar.substring(i, (i + strings[x].length)) == strings[x]){            
          descriptar = descriptar.replace(descriptar.substring(i,(i + strings[x].length)), vogais[x]);
        }
      } 
    }   
  }  
  document.querySelector('.msg__parag').innerText = descriptar;
}

function copiaTexto() {
  let text = document.querySelector('.msg__parag').innerText;
  let input = document.querySelector('.texto');
  input.value = '';
    navigator.clipboard.writeText(text).then( () => {
        alert('Texto copiado!');
    })
}

function containsUpperCase(){
  let texto = document.querySelector('.texto').value;
  return /[A-Z]/.test(texto);
}

function containsSpecialChars() {
  let texto = document.querySelector('.texto').value;
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
  return specialChars.test(texto);
}
