/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
// based on https://github.com/ai/easings.net/blob/master/src/easings/easingsFunctions.ts

const { sqrt, sin, cos, PI } = Math;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;

function bounceOut(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  }

  if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  }

  if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  }

  return n1 * (x -= 2.625 / d1) * x + 0.984375;
}

const easingsFunctions = {
  linear(x: number) {
    return x;
  },
  easeInQuad(x: number) {
    return x ** 2;
  },
  easeOutQuad(x: number) {
    return 1 - (1 - x) ** 2;
  },
  easeInOutQuad(x: number) {
    return x < 0.5 ? 2 * x ** 2 : 1 - (-2 * x + 2) ** 2 / 2;
  },
  easeInCubic(x: number) {
    return x ** 3;
  },
  easeOutCubic(x: number) {
    return 1 - (1 - x) ** 3;
  },
  easeInOutCubic(x: number) {
    return x < 0.5 ? 4 * x ** 3 : 1 - (-2 * x + 2) ** 3 / 2;
  },
  easeInQuart(x: number) {
    return x ** 4;
  },
  easeOutQuart(x: number) {
    return 1 - (1 - x) ** 4;
  },
  easeInOutQuart(x: number) {
    return x < 0.5 ? 8 * x ** 4 : 1 - (-2 * x + 2) ** 4 / 2;
  },
  easeInQuint(x: number) {
    return x ** 5;
  },
  easeOutQuint(x: number) {
    return 1 - (1 - x) ** 5;
  },
  easeInOutQuint(x: number) {
    return x < 0.5 ? 16 * x ** 5 : 1 - (-2 * x + 2) ** 5 / 2;
  },
  easeInSine(x: number) {
    return 1 - cos((x * PI) / 2);
  },
  easeOutSine(x: number) {
    return sin((x * PI) / 2);
  },
  easeInOutSine(x: number) {
    return -(cos(PI * x) - 1) / 2;
  },
  easeInExpo(x: number) {
    return x === 0 ? 0 : 2 ** (10 * x - 10);
  },
  easeOutExpo(x: number) {
    return x === 1 ? 1 : 1 - 2 ** (-10 * x);
  },
  easeInOutExpo(x: number) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? 2 ** (20 * x - 10) / 2
      : (2 - 2 ** (-20 * x + 10)) / 2;
  },
  easeInCirc(x: number) {
    return 1 - sqrt(1 - x ** 2);
  },
  easeOutCirc(x: number) {
    return sqrt(1 - (x - 1) ** 2);
  },
  easeInOutCirc(x: number) {
    return x < 0.5
      ? (1 - sqrt(1 - (2 * x) ** 2)) / 2
      : (sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2;
  },
  easeInBack(x: number) {
    return c3 * x * x * x - c1 * x * x;
  },
  easeOutBack(x: number) {
    return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2;
  },
  easeInOutBack(x: number) {
    return x < 0.5
      ? ((2 * x) ** 2 * ((c2 + 1) * 2 * x - c2)) / 2
      : ((2 * x - 2) ** 2 * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  },
  easeInElastic(x: number) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : -(2 ** (10 * x - 10)) * sin((x * 10 - 10.75) * c4);
  },
  easeOutElastic(x: number) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : 2 ** (-10 * x) * sin((x * 10 - 0.75) * c4) + 1;
  },
  easeInOutElastic(x: number) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? -(2 ** (20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
      : (2 ** (-20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
  },
  easeInBounce(x: number) {
    return 1 - bounceOut(1 - x);
  },
  easeOutBounce: bounceOut,
  easeInOutBounce(x: number) {
    return x < 0.5
      ? (1 - bounceOut(1 - 2 * x)) / 2
      : (1 + bounceOut(2 * x - 1)) / 2;
  },
};

export const easingNames: (keyof typeof easingsFunctions)[] = [
  'linear',
  'easeInSine',
  'easeOutSine',
  'easeInOutSine',
  'easeInQuad',
  'easeOutQuad',
  'easeInOutQuad',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint',
  'easeInExpo',
  'easeOutExpo',
  'easeInOutExpo',
  'easeInCirc',
  'easeOutCirc',
  'easeInOutCirc',
  'easeInBack',
  'easeOutBack',
  'easeInOutBack',
  'easeInElastic',
  'easeOutElastic',
  'easeInOutElastic',
  'easeInBounce',
  'easeOutBounce',
  'easeInOutBounce',
];

export function easeCalc(
  l: number,
  r: number,
  t: number,
  easing: number | null
): number {
  if (easing) {
    const func = easingsFunctions[easingNames[easing]];
    return l + (r - l) * func(t);
  } else {
    return l;
  }
}

export function easeSumCalc(
  l: number,
  r: number,
  st: number,
  et: number,
  easing: number | null
): number {
  const eps = 1e-1;
  let t = st;
  let sum = 0;
  while (t <= et) {
    sum += easeCalc(l, r, t, easing);
    t += eps;
  }

  sum *= eps;
  return sum;
}
