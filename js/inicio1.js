//ativar página com click
var menuitem = document.querySelectorAll('.pag')
let trilho =document.getElementById('trilho')
let body =document.querySelector('body')

function select(){
    menuitem.forEach((item)=>
     item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuitem.forEach((item)=>
    item.addEventListener('click', select)
)

// trilho.addEventListener('click',()=>{
//    trilho.classList.toggle('dark')
//    body.classList.toggle('dark')
//})

function darkmode(){
    const wasdarkmode = localStorage.getItem('dark') === 'true';
    localStorage.setItem('dark', !wasdarkmode);
    const element = document.body;
    element.classList.toggle('dark', !wasdarkmode);
    trilho.classList.toggle('dark', !wasdarkmode);
}

function onload1(){
    document.body.classList.toggle('dark', localStorage.getItem('dark') === 'true')
    trilho.classList.toggle('dark', localStorage.getItem('dark') === 'true');
}