import { trigger, transition, query, animateChild, animate, style } from "@angular/animations";

export const Container = [
    trigger('container', [
      transition(':enter, :leave', [
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
];

export const EnterExitLeft = [
    trigger('enterExitLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate(
          '400ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in',
          style({ opacity: 0, transform: 'translateX(-200px)' })
        ),
      ]),
    ]),
  ];
  
  export const EnterExitRight = [
    trigger('enterExitRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(200px)' }),
        animate(
          '400ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in',
          style({ opacity: 0, transform: 'translateX(200px)' })
        ),
      ]),
    ]),
  ];

  export const FADE_UP = [
    trigger('enterExitUP', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(200px)' }),
        animate(
          '400ms ease-in',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in',
          style({ opacity: 0, transform: 'translateY(-200px)' })
        ),
      ]),
    ]),
  ];

  