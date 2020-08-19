import { CustomObservable } from "./observerPattern";

// Add burger
const burgerPipeLine = new CustomObservable();
function addBurger(){
  const burger =  document.querySelector('.burger-body');
  
  burgerPipeLine.subscribe((slice: string) => {
    burger.appendChild(addSlice(slice));
  });
}

function addSlice(item){
  let tomato = document.createElement('div');
  tomato.className = item;
  return tomato;
}

addBurger();

burgerPipeLine.next('tomato');
burgerPipeLine.next('lettuce');
burgerPipeLine.next('cheese');
burgerPipeLine.next('bun-2');