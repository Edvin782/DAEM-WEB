const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target") || counter.textContent;

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,20);

}

}

update();

})