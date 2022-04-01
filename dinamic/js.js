//box1
let jaime = document.getElementById('jaime');
let p1 = document.getElementById('p1');

let inc = document.getElementById('incrment');
let totpc =document.getElementById('total_piece');
let totpr =document.getElementById('total_paiment');
let topr = document.getElementById('total_prix')

//box2
let jaime2 = document.getElementById('jaime2');
let p2 = document.getElementById('p2');

let inc2 = document.getElementById('incrment2');
let totpr2 =document.getElementById('total_paiment2');

//box3
let jaime3 = document.getElementById('jaime3');
let p3 = document.getElementById('p3');

let inc3 = document.getElementById('incrment3');
let totpr3 =document.getElementById('total_paiment3');

//box1
function like(){
    if(jaime.style.color == "black"){
        jaime.style.color="blue";   
    }else{
        jaime.style.color="black";
    }
}

function remove(){
    p1.style.display='none';
    totpc.innerHTML=totpc.innerHTML- inc.innerHTML;
    topr.innerHTML=topr.innerHTML - totpr.innerHTML;
}

function ajout(){
    inc.innerHTML=+ inc.innerHTML+1;
    totpr.innerHTML=+totpr.innerHTML+239;
    totpc.innerHTML=+totpc.innerHTML+1;
    topr.innerHTML=+topr.innerHTML+239;
}
function diminue(){
    if(inc.innerHTML==0){
        inc.innerHTML;
    }
    else{
        inc.innerHTML=+ inc.innerHTML-1;
        totpr.innerHTML=+totpr.innerHTML-239;
        totpc.innerHTML=inc.innerHTML;
        topr.innerHTML=totpr.innerHTML;
    }
}

//box2
function like2(){
    if(jaime2.style.color == "black"){
        jaime2.style.color="blue";   
    }else{
        jaime2.style.color="black";
    }
}
function remove2(){
    p2.style.display='none';
    totpc.innerHTML=totpc.innerHTML- inc2.innerHTML;
    topr.innerHTML=topr.innerHTML - totpr2.innerHTML;
}

function ajout2(){
    inc2.innerHTML=+ inc2.innerHTML+1;
    totpr2.innerHTML=+ totpr2.innerHTML+300;
    totpc.innerHTML=+ totpc.innerHTML + 1;
    topr.innerHTML=+ topr.innerHTML + 300;
}

function diminue2(){
    if(inc2.innerHTML==0){
        inc2.innerHTML;
    }
    else{
        inc2.innerHTML=+ inc2.innerHTML-1;
        totpr2.innerHTML=+totpr2.innerHTML-300;
        totpc.innerHTML=totpc.innerHTML-1;
        topr.innerHTML=topr.innerHTML-300;
    }
}

//box3
function like3(){
    if(jaime3.style.color == "black"){
        jaime3.style.color="blue";   
    }else{
        jaime3.style.color="black";
    }
}
function remove3(){
    p3.style.display='none';
    totpc.innerHTML=totpc.innerHTML- inc3.innerHTML;
    topr.innerHTML=topr.innerHTML - totpr3.innerHTML;
}

function ajout3(){
    inc3.innerHTML=+ inc3.innerHTML+1;
    totpr3.innerHTML=+ totpr3.innerHTML+1000;
    totpc.innerHTML=+ totpc.innerHTML + 1;
    topr.innerHTML=+ topr.innerHTML + 1000;
}

function diminue3(){
    if(inc3.innerHTML==0){
        inc3.innerHTML;
    }
    else{
        inc3.innerHTML=+ inc3.innerHTML-1;
        totpr3.innerHTML=+totpr3.innerHTML-1000;
        totpc.innerHTML=totpc.innerHTML-1;
        topr.innerHTML=topr.innerHTML-1000;
    }
}