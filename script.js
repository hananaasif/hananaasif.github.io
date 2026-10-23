const form=document.getElementById('typing-form');
const input=document.getElementById('typing-input');
const start=document.getElementById('start-game');
const target=document.getElementById('target-word');
const scoreDisplay=document.getElementById('score');
const timerDisplay=document.getElementById('timer');
const statusDisplay=document.getElementById('game-status');
const help=document.getElementById('game-help');
const words=['play','unity','pixel','jump','arcade','puzzle','code','level','spawn','sprint','merge','create','camera','balloon','world'];
let score=0,remaining=20,interval=null,active=false,lastWord='';
function nextWord(){let word;do{word=words[Math.floor(Math.random()*words.length)]}while(word===lastWord);lastWord=word;target.textContent=word;}
function finish(){clearInterval(interval);active=false;input.disabled=true;start.disabled=false;start.textContent='Play again ↗';statusDisplay.textContent='NICE PLAYING!';target.textContent=score+' pops!';help.textContent='Try another round — or play the full Type ’n Pop above.';}
start.addEventListener('click',()=>{clearInterval(interval);score=0;remaining=20;active=true;scoreDisplay.textContent='0';timerDisplay.textContent='20';input.value='';input.disabled=false;start.disabled=true;start.textContent='Playing…';statusDisplay.textContent='GO, GO, GO!';help.textContent='Match the word, then press Enter.';nextWord();input.focus();interval=setInterval(()=>{remaining--;timerDisplay.textContent=remaining;if(remaining<=0)finish();},1000);});
form.addEventListener('submit',event=>{event.preventDefault();if(!active)return;if(input.value.trim().toLowerCase()===target.textContent){score++;scoreDisplay.textContent=score;input.value='';help.textContent='Pop! Keep going.';nextWord();}else{help.textContent='Almost! Match the word above and press Enter.';input.select();}});
document.getElementById('year').textContent=new Date().getFullYear();
