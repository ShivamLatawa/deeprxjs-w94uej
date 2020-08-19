import { of, from, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const obs$ = from(['🍕', '🍪', '🍔', '🌭', '🍟']).pipe(map(val => {
  return `Miam ${val}!`;
}));
console.clear();
const sub1 = obs$.subscribe(val => {
  console.log('From sub1:', val);
}, null, () => {
  console.log('done ----------------');
});

const sub2 = obs$.subscribe(val => {
  console.log('From sub2:', val);
}, null, () => {
  console.log('done ----------------');
});

/*---------------------------vs-------------------------------------------------------------- */ 

const mouse$ = fromEvent(document, 'click').pipe(map((event: MouseEvent) => ({ clientX: event.clientX, clientY: event.clientY })));

  const mouseSub1 = mouse$.subscribe(val => {
  console.log('mouseSub1:', val);
});
setTimeout(() => {
  console.log('Start sub2');
  const mouseSub2 = mouse$.subscribe(val => {
    console.log('mouseSub2After4000:', val);
  });
}, 4000);