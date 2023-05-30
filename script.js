function changeMode(){
  changeClasses();
}
function changeClasses(){
  btndrkmode.classList.toggle(drkmodeclass);
  btndrkmode.classList.toggle(w3textgrey);
  body.classList.toggle(drkmodeclass);
  body.classList.toggle(w3greybody);
  footer.classList.toggle(drkmodeclass);
  footer.classList.toggle(w3cyan);
  nome.classList.toggle(drkmodeclass);
  sobre.classList.toggle(drkmodeclass);
  sobre.classList.toggle(w3textgrey);
  educacao.classList.toggle(drkmodeclass);
  educacao.classList.toggle(w3textgrey);
  leftcolumn.classList.toggle(drkmodeclass);
  leftcolumn.classList.toggle(w3textgrey);
  leftcolumn.classList.toggle(w3white);
  sobrebox.classList.toggle(drkmodeclass);
  sobrebox.classList.toggle(w3white);
  educacaobox.classList.toggle(drkmodeclass);
  educacaobox.classList.toggle(w3white);
  projetosbox.classList.toggle(drkmodeclass);
  projetosbox.classList.toggle(w3white);
  projetos.classList.toggle(w3textgrey);
}

const body =  document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');
const btndrkmode = document.getElementById('mode-selector');
const nome = document.getElementsByTagName('h2')[0];
const sobre = document.getElementsByTagName('h2')[1];
const educacao = document.getElementsByTagName('h2')[2];
const projetos = document.getElementsByTagName('h2')[3];
const leftcolumn = document.getElementById('leftcolumn');
const sobrebox = document.getElementById('sobrebox');
const educacaobox = document.getElementById('educacaobox');
const projetosbox = document.getElementById('projetosbox');
const drkmodeclass = 'dark-mode';
const w3cyan = 'w3-cyan';
const w3greybody = 'w3-light-grey';
const w3textgrey = 'w3-text-grey';
const w3white = 'w3-white'

btndrkmode.addEventListener('click', changeMode);