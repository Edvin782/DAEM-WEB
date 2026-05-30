const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

});

});



const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

counter.innerText=0;

let count=0;

const update=()=>{

if(count<target){

count+=Math.ceil(target/100);

counter.innerText=count;

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

}

update();

});