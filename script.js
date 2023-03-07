const horas = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const img = document.getElementById('imagem');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getUTCSeconds();

    if (hr<10) hr = '0'+ hr;
    if (min<10) min = '0'+ min;
    if (sec<10) sec = '0'+ sec;

    

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec
    
})











