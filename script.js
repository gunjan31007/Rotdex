(function(){
var $=function(i){return document.getElementById(i)},st=['aura','rizz','chaos'],m67=false;
var A=[['Shark','🦈','Squalo'],['Cat','🐱','Gatto'],['Frog','🐸','Rana'],['Crocodile','🐊','Coccodrillo'],['Penguin','🐧','Pinguino'],['Goat','🐐','Capra'],['Owl','🦉','Gufo'],['Snail','🐌','Lumaca'],['Octopus','🐙','Polpo'],['Duck','🦆','Papero']];
var O=[['Cappuccino','☕','Cappuccino'],['Banana','🍌','Banana'],['Sneaker','👟','Scarpa'],['Toaster','🍞','Tostapane'],['Umbrella','☂️','Ombrello'],['Lamp','💡','Lampadina'],['Bucket','🪣','Secchio'],['Cactus','🌵','Cactus'],['Phone','📱','Telefono'],['Pizza','🍕','Pizza']];
var V=[['Chaotic','chaos'],['Sleepy','aura'],['Sigma','aura'],['Cursed','chaos'],['Delulu','rizz'],['Mewing','rizz']];
var EV=['a group project meeting','a fire drill','a 3 a.m. doomscroll','a free pizza announcement','a surprise quiz'];
var PW=['steals aura from anyone who says ‘bro’','can only speak in 67','silently judges your attendance','teleports when you open Instagram','wins every argument by blinking','turns deadlines into suggestions'];
var REAL=['Reminder: the assignment is due on 11 November.','The library closes at 8 pm today.','Please carry your ID card to the exam hall.','Lab file submission is on Monday.','Registration closes on 11 November.'];
function rng(s){var h=1779033703^s.length;for(var i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19}return function(){h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);return((h^=h>>>16)>>>0)/4294967296}}
function pk(r,a){return a[Math.floor(r()*a.length)]}
function stem(w){return w.replace(/[aeiou]$/i,'')}
function make(a,o,v){var r=rng(a+'-'+o+'-'+v),su=['ino','etto','ona','ello','issimo'];
var c={a:a,o:o,v:v,name:stem(A[a][2])+pk(r,su)+' '+stem(O[o][2])+pk(r,su),em:A[a][1]+O[o][1],vibe:V[v][0],s:{}};
st.forEach(function(k){c.s[k]=Math.min(99,30+Math.floor(r()*50)+(V[v][1]===k?15:0));if(m67)c.s[k]=67});
c.lore='Born when a '+A[a][0].toLowerCase()+' fell into a '+O[o][0].toLowerCase()+' during '+pk(r,EV)+'. It '+pk(r,PW)+'.';return c}
function toast(t){var d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2200)}
var au=0,dex=[];try{au=+localStorage.getItem('rd-au')||0;dex=JSON.parse(localStorage.getItem('rd-dx')||'[]');if(!Array.isArray(dex))dex=[]}catch(e){dex=[]}
function sv(){try{localStorage.setItem('rd-au',au);localStorage.setItem('rd-dx',JSON.stringify(dex))}catch(e){}}
function add(n){au=Math.max(0,au+n);$('au').textContent=au;sv()}add(0);
function fill(id,arr,f){var s=$(id);arr.forEach(function(x,i){var p=document.createElement('option');p.value=i;p.textContent=f(x);s.appendChild(p)})}
fill('sa',A,function(x){return x[1]+' '+x[0]});fill('so',O,function(x){return x[1]+' '+x[0]});fill('sv',V,function(x){return x[0]});
function cur(){return make(+$('sa').value,+$('so').value,+$('sv').value)}
function wrap(g,t,x,y,w,lh){var ws=t.split(' '),l='';ws.forEach(function(q){if(g.measureText(l+q).width>w&&l){g.fillText(l,x,y);y+=lh;l=''}l+=q+' '});g.fillText(l,x,y)}
function draw(c,cv){var g=cv.getContext('2d'),W=600,H=840,gr=g.createLinearGradient(0,0,W,H);gr.addColorStop(0,'#ff2e93');gr.addColorStop(1,'#2b3cff');
g.fillStyle=gr;g.fillRect(0,0,W,H);g.fillStyle='#ffe500';g.fillRect(24,24,W-48,H-48);g.strokeStyle='#140a1f';g.lineWidth=10;g.strokeRect(24,24,W-48,H-48);
g.fillStyle='#fff';g.fillRect(60,60,480,300);g.strokeRect(60,60,480,300);g.textAlign='center';g.font='150px serif';g.fillStyle='#140a1f';g.fillText(c.em,W/2,255);
g.font='28px Bungee,Impact,sans-serif';g.fillText(c.vibe+' · '+(m67?'67 MODE':'rot'),W/2,330);
g.font='38px Bungee,Impact,sans-serif';wrap(g,c.name,W/2,425,480,42);
g.font='22px Rubik,sans-serif';g.textAlign='left';wrap(g,c.lore,64,520,470,28);
st.forEach(function(k,i){var y=630+i*58;g.fillStyle='#140a1f';g.font='24px Bungee,Impact,sans-serif';g.fillText(k,64,y+22);g.fillRect(190,y,300,28);g.fillStyle='#ff2e93';g.fillRect(190,y,3*c.s[k],28);g.fillStyle='#140a1f';g.fillText(c.s[k],500,y+24)})}
function show(){draw(cur(),$('cv'))}
['sa','so','sv'].forEach(function(i){$(i).onchange=show});
$('rnd').onclick=function(){$('sa').value=Math.floor(Math.random()*A.length);$('so').value=Math.floor(Math.random()*O.length);$('sv').value=Math.floor(Math.random()*V.length);show()};
function rdex(){var d=$('dex');d.innerHTML='';if(!dex.length){d.textContent='Empty. Save a creature.';return}
dex.forEach(function(k,i){var c=make(k[0],k[1],k[2]),b=document.createElement('button');b.className='chip';b.textContent=c.em+' '+c.name;b.onclick=function(){$('sa').value=k[0];$('so').value=k[1];$('sv').value=k[2];show()};d.appendChild(b)})}
$('sv2').onclick=function(){var k=[+$('sa').value,+$('so').value,+$('sv').value];if(dex.some(function(x){return x.join()===k.join()})){toast('Already in your dex 🗿');return}if(dex.length>=12){toast('Dex full (12). Reload to clear.');return}dex.push(k);add(25);rdex();toast('Caught! +25 aura')};
$('dl').onclick=function(){var a=document.createElement('a');a.download='rotdex-card.png';try{a.href=$('cv').toDataURL('image/png');a.click()}catch(e){toast('Download blocked here. Use the deployed site.')}};
/* modes */
$('m67').onclick=function(){m67=!m67;this.setAttribute('aria-pressed',m67);toast(m67?'EVERYTHING IS 67 NOW':'67 mode off');show()};
$('ch').onclick=function(){toast(document.body.classList.toggle('chaos')?'CHAOS ON 🌀':'ok boomer')};
var TH=['dark','acid','gum','light'],ti=-1,busy=false,tm=[],nv=null;
function noise(){var g=$('nz').getContext('2d'),d=g.createImageData(160,90);for(var i=0;i<d.data.length;i+=4){var v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}g.putImageData(d,0,0)}
function fin(){tm.forEach(clearTimeout);clearInterval(nv);ti=(ti+1)%TH.length;document.documentElement.setAttribute('data-theme',TH[ti]);$('tv').hidden=true;busy=false;toast('Signal restored: '+TH[ti]+' theme')}
$('th').onclick=function(){if(busy)return;busy=true;var o=$('tv');o.hidden=false;o.className='tv';noise();if(!window.matchMedia('(prefers-reduced-motion:reduce)').matches)nv=setInterval(noise,125);tm=[setTimeout(function(){o.className='tv stat'},1500),setTimeout(fin,3600)]};
$('tv').onclick=function(){if(busy)fin()};
var em=['💀','🗿','✨','🔥','🫠'],lt=0;document.addEventListener('pointermove',function(e){var t=Date.now();if(t-lt<90)return;lt=t;var s=document.createElement('span');s.className='tr';s.textContent=pk(Math.random,em);s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';document.body.appendChild(s);setTimeout(function(){s.remove()},800)});
/* tabs */
document.querySelectorAll('.nav .btn').forEach(function(b){b.onclick=function(){document.querySelectorAll('.nav .btn').forEach(function(x){x.classList.toggle('on',x===b)});['lab','bat','doom'].forEach(function(t){$(t).hidden=t!==b.dataset.t});if(b.dataset.t==='bat')rb()}});
/* battle */
function rb(){var s=$('bs');s.innerHTML='';dex.forEach(function(k,i){var p=document.createElement('option');p.value=i;p.textContent=make(k[0],k[1],k[2]).name;s.appendChild(p)})}
var B=null;
function card(c,t){return '<div class="fi"><div class="e">'+c.em+'</div><div class="b">'+t+'</div><div>'+c.name+'</div><div>'+st.map(function(k){return k+' '+c.s[k]}).join(' · ')+'</div></div>'}
$('bgo').onclick=function(){if(!dex.length){toast('Save a creature in the Lab first');return}var k=dex[+$('bs').value||0];
B={me:make(k[0],k[1],k[2]),en:make(Math.floor(Math.random()*A.length),Math.floor(Math.random()*O.length),Math.floor(Math.random()*V.length)),used:[],w:0,l:0};
$('vs').innerHTML=card(B.me,'You')+card(B.en,'Rival');$('bl').textContent='Pick a stat to fight with.';bb()};
function bb(){var d=$('bb');d.innerHTML='';st.forEach(function(k){var b=document.createElement('button');b.className='btn o';b.textContent=k;b.disabled=B.used.indexOf(k)>-1;b.onclick=function(){fight(k)};d.appendChild(b);d.appendChild(document.createTextNode(' '))})}
function fight(k){var m=B.me.s[k],e=B.en.s[k],w=m>e||(m===e&&Math.random()<.5);B.used.push(k);w?B.w++:B.l++;
$('bl').textContent+='\n'+k+': '+m+' vs '+e+(w?' – you win the round.':' – rival wins the round.');$('bl').style.whiteSpace='pre-line';
if(B.used.length===3||B.w===2||B.l===2){var win=B.w>B.l;$('bl').textContent+='\n'+(win?'VICTORY. +100 aura.':'You got cooked. +10 aura for trying.');add(win?100:10);$('bb').innerHTML='';B=null}else bb()}
/* doomscroll */
var T=0,iv=null,ok=0;
function round(){var f=$('fd');f.innerHTML='';var ps=[{t:pk(Math.random,REAL),r:1}];
for(var i=0;i<7;i++){var c=make(Math.floor(Math.random()*A.length),Math.floor(Math.random()*O.length),Math.floor(Math.random()*V.length));ps.push({t:'🚨 '+c.name+' '+c.lore.split('. It ')[1].replace(/\.$/,'')+'. Share before it is deleted.'})}
ps.sort(function(){return Math.random()-.5});
ps.forEach(function(p){var b=document.createElement('button');b.className='post';b.textContent=p.t;b.onclick=function(){if(p.r){ok++;add(50);round()}else{add(-10);b.classList.add('shake');b.disabled=true}};f.appendChild(b)})}
$('dgo').onclick=function(){clearInterval(iv);T=20;ok=0;$('dt').textContent=T+'s';round();iv=setInterval(function(){T--;$('dt').textContent=T+'s';if(T<=0){clearInterval(iv);$('fd').innerHTML='';$('dt').textContent='Time. You caught '+ok+' real post'+(ok===1?'':'s')+'.'}},1000)};
/* gate */
var G=[['Step 1: type “I am not cooked”','t',function(v){return v.trim().toLowerCase()==='i am not cooked'}],['Step 2: drag the slider to exactly 67','r',function(v){return+v===67}],['Step 3: what is 6 + 7? (only the correct brainrot answer works)','t',function(v){return v.trim()==='67'}]],gi=0;
function gate(){var g=G[gi];$('gq').textContent=g[0];$('ge').textContent='';var i=document.createElement('input');i.type=g[1]==='r'?'range':'text';i.setAttribute('aria-label',g[0]);$('gi').innerHTML='';$('gi').appendChild(i);var b=document.createElement('button');b.className='btn';b.textContent='Verify';b.onclick=function(){if(g[2](i.value)){gi++;if(gi>=G.length){$('gate').remove();toast('Welcome, sigma 🗿')}else gate()}else $('ge').textContent='Wrong. Very cooked. Try again.'};$('gi').appendChild(b)}
$('gs').onclick=function(){$('gate').remove()};gate();
(function(){
var ri=function(a){return Math.floor(Math.random()*a.length)},cl=['#ff2e93','#ffe500','#00e5ff','#c6ff00','#fff7d6','#9d7bff'],W=['67','67','SIX SEVEN','aura','skibidi','cooked','sigma','no cap'],L=['downloading 67 aura','buffering the rizz','summoning creatures','almost cooked'],R=$('rain'),still=window.matchMedia('(prefers-reduced-motion:reduce)').matches,t=0,iv;
function drop(){var s=document.createElement('span'),r=Math.random();s.textContent=r<.3?A[ri(A)][1]+O[ri(O)][1]:r<.55?make(ri(A),ri(O),ri(V)).name:W[ri(W)];s.style.cssText='left:'+Math.random()*88+'%;font-size:'+(22+Math.random()*34)+'px;color:'+cl[ri(cl)]+';animation-duration:'+(2.5+Math.random()*2)+'s;--r:'+(Math.random()*80-40)+'deg';R.appendChild(s);setTimeout(function(){s.remove()},4600)}
function done(){var n=$('intro');if(!n)return;clearInterval(iv);n.classList.add('out');setTimeout(function(){n.remove()},400)}
iv=setInterval(function(){t+=100;$('li').style.width=Math.min(100,t/38)+'%';$('lt').textContent=L[Math.min(3,Math.floor(t/1000))];if(!still){drop();if(Math.random()<.6)drop()}if(t>=(still?1000:3800))done()},100);
$('intro').onclick=done;
var C=['67','67','67!','SIX SEVEN','🗿67'];
document.addEventListener('pointerdown',function(e){var s=document.createElement('div');s.className='s7';s.textContent=C[ri(C)];s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';s.style.color=cl[ri(cl)];s.style.setProperty('--r',(Math.random()*40-20)+'deg');document.body.appendChild(s);setTimeout(function(){s.remove()},1000)});
})();
$('sa').value=1;$('so').value=0;$('sv').value=2;show();rdex();
})();
