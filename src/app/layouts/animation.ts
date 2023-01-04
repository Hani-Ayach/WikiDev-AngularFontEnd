import { trigger, state, style, transition, animate } from "@angular/animations";

export const fadeFromTop= trigger('fadeFromTop', [
  state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
  transition('void => *', [animate(1000)]),
]);

export  const  fadeFromLeft=trigger('fadeFromLeft', [
  state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition('void => *', [animate(1000)]),
]);

export const shake= trigger('shake', [

  transition('void => *', [
    style({ transform:'rotate(2deg)' }),
    animate(100)
  ])
])
