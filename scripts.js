const btn=document.getElementById('menuBtn'),menu=document.getElementById('menu'),overlay=document.getElementById('overlay');
function setMenu(open){btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu');menu.classList.toggle('open',open);overlay.classList.toggle('show',open)}
btn.addEventListener('click',()=>setMenu(btn.getAttribute('aria-expanded')!=='true'));
overlay.addEventListener('click',()=>setMenu(false));
menu.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){setMenu(false);btn.focus()}});
matchMedia('(min-width:768px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
const g=document.getElementById('grid'),w=g.parentElement;let cells=[];
function build(){g.innerHTML='';const c=Math.floor(w.clientWidth/64),r=Math.ceil(w.clientHeight/64);g.style.gridTemplateColumns='repeat('+c+',64px)';for(let i=0;i<c*r;i++)g.appendChild(document.createElement('i'));cells=[...g.children]}
function lit(e){const t=e.target;if(t.tagName==='I'){t.className=Math.random()<.25?'on2':'on';setTimeout(()=>t.className='',60)}}
build();addEventListener('resize',build);
w.addEventListener('mousemove',e=>{const x=document.elementFromPoint(e.clientX,e.clientY);if(x&&x.tagName==='I')lit({target:x})});