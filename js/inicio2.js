//expandir menu

let expandedmenu = document.querySelector('#hamburguer')
let menulat = document.querySelector('.menu1')
let link = document.querySelector('#link') 

//expandedmenu.addEventListener('click', function(){
//    menulat.classList.toggle('expandir')
//})
//link.addEventListener('click', function(){
//    menulat.classList.toggle('expandir')
//})


function hamb(){
    const wasexpandirmode = localStorage.getItem('expandir') === 'true';
    localStorage.setItem('expandir', !wasexpandirmode);
    const element = document.body;
    element.classList.toggle('expandir', !wasexpandirmode);
    menulat.classList.toggle('expandir', !wasexpandirmode);
}

function onload2(){
    document.body.classList.toggle('expandir', localStorage.getItem('expandir') === 'true');
    menulat.classList.toggle('expandir', localStorage.getItem('expandir') === 'true');
}